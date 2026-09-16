import { receiptDb } from "@/lib/receipt-db";
import { receiptSchema } from "@/lib/receipt-validation";
import { noticeText } from "@/lib/notice";
export const dynamic="force-dynamic";
const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{"Cache-Control":"no-store"}});
async function hash(s:string){return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)))).map(b=>b.toString(16).padStart(2,"0")).join("");}
export async function POST(request:Request){
  const origin=request.headers.get("origin");
  if(!origin||origin!==new URL(request.url).origin)return json({error:"Solicitud no permitida."},403);
  if(!request.headers.get("content-type")?.includes("application/json"))return json({error:"Formato no válido."},415);
  if(Number(request.headers.get("content-length")||0)>10000)return json({error:"Solicitud demasiado extensa."},413);
  let parsed;try {const text=await request.text();if(text.length>10000)return json({error:"Solicitud demasiado extensa."},413);parsed=receiptSchema.safeParse(JSON.parse(text));}catch{return json({error:"Revisa los datos e intenta nuevamente."},400);}
  if(!parsed.success)return json({error:"Revisa los campos y la confirmación de lectura. Si el comunicado cambió, vuelve a cargar la página."},400);
  const p=parsed.data;
  try {
    const db=receiptDb(),payloadHash=await hash(JSON.stringify(p)),noticeHash=await hash(noticeText),receivedAt=new Date().toISOString();
    await db.prepare("INSERT INTO receipts (id,company,nit,name,email,received_at,version,notice_text,notice_hash,payload_hash,confirmation) VALUES (?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING").bind(p.requestId,p.company,p.nit,p.name,p.email,receivedAt,p.version,noticeText,noticeHash,payloadHash,"He recibido y leído el comunicado de EMIZOR sobre la adecuación a la Ley N.º 1733.").run();
    const row=await db.prepare("SELECT id,company,nit,name,email,received_at AS receivedAt,version,notice_hash AS noticeHash,payload_hash AS payloadHash FROM receipts WHERE id=?").bind(p.requestId).first();
    if(!row)throw new Error("Receipt not found after insert");
    if(row.payloadHash!==payloadHash)return json({error:"Esta solicitud ya se registró con otros datos. Vuelve a cargar la página para registrar una nueva."},409);
    const {payloadHash:_,...receipt}=row;return json(receipt);
  }catch(e){console.error("receipt_save_failed",e instanceof Error?e.message:"unknown");return json({error:"No pudimos registrar tu confirmación. Tus datos siguen en el formulario; intenta nuevamente."},503);}
}
