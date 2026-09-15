import { z } from 'zod';
import { receiptDb } from '@/lib/receipt-db';
import { notice } from '@/lib/notice';
export const dynamic='force-dynamic';
const schema=z.object({requestId:z.string().uuid(),company:z.string().trim().min(2).max(180),nit:z.string().trim().regex(/^(?:\d{5,20})?$/).optional().default(''),name:z.string().trim().min(3).max(160),email:z.string().trim().email().max(180).transform(v=>v.toLowerCase()),consent:z.literal(true),version:z.literal(notice.version)}).strict();
const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request:Request){
 if(request.headers.get('origin')!==new URL(request.url).origin)return json({error:'Solicitud no permitida.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return json({error:'Formato no válido.'},415);
 if(Number(request.headers.get('content-length')||0)>10000)return json({error:'Solicitud demasiado extensa.'},413);
 let parsed;try{const text=await request.text();if(text.length>10000)return json({error:'Solicitud demasiado extensa.'},413);parsed=schema.safeParse(JSON.parse(text));}catch{return json({error:'Revisa los datos e intenta nuevamente.'},400);}
 if(!parsed.success)return json({error:'Revisa tus datos y autoriza el envío de novedades para continuar.'},400);
 const p=parsed.data;
 try{
 const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify(p))))).map(b=>b.toString(16).padStart(2,'0')).join('');
 const db=receiptDb(),registeredAt=new Date().toISOString();
 await db.prepare('INSERT INTO update_subscribers (id,company,nit,name,email,registered_at,version,consent_text,payload_hash) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING').bind(p.requestId,p.company,p.nit,p.name,p.email,registeredAt,p.version,'Autorizo a EMIZOR a utilizar estos datos para enviarme novedades sobre la adecuación a la Ley N.º 1733.',hash).run();
 const row=await db.prepare('SELECT id,company,name,email,registered_at AS registeredAt,payload_hash AS payloadHash FROM update_subscribers WHERE id=?').bind(p.requestId).first();
 if(!row)throw new Error('Registration missing');
 if(row.payloadHash!==hash)return json({error:'La solicitud ya fue registrada con otros datos. Recarga la página para realizar un nuevo registro.'},409);
 const {payloadHash:_,...registration}=row;return json(registration);
 }catch(e){console.error('subscription_save_failed',e instanceof Error?e.message:'unknown');return json({error:'No pudimos guardar tus datos. El formulario conserva tu información; intenta nuevamente.'},503);}
}
