"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { notice } from "@/lib/notice";
type Receipt = { id:string; registeredAt:string; company:string; name:string; email:string };
export function ReceiptForm() {
  const [confirmed,setConfirmed] = useState(false);
  const [busy,setBusy] = useState(false);
  const [error,setError] = useState("");
  const [receipt,setReceipt] = useState<Receipt|null>(null);
  const [requestId,setRequestId] = useState("");
  useEffect(()=>{setRequestId(crypto.randomUUID()); const ctx=(document as unknown as {modelContext?:{registerTool:(tool:unknown,options:unknown)=>Promise<void>}}).modelContext; if(!ctx)return; const controller=new AbortController(); try {Promise.resolve(ctx.registerTool({name:"start_updates_registration",description:"Abre el formulario para recibir novedades de EMIZOR. No registra ni envía datos.",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:(input:unknown)=>{if(!input||typeof input!=="object"||Object.keys(input).length)throw new Error("No se admiten parámetros");document.getElementById("recepcion")?.scrollIntoView({behavior:"smooth"});document.getElementById("company")?.focus({preventScroll:true});return {status:"form_open",submitted:false};}},{signal:controller.signal})).catch(()=>{});}catch{} return ()=>controller.abort();},[]);
  async function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); if(busy)return; setError("");
    if(!confirmed){setError("Autoriza el envío de novedades para registrar tus datos.");return;}
    const form=new FormData(e.currentTarget);setBusy(true);
    try {const r=await fetch("/api/actualizaciones",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({requestId,version:notice.version,consent:confirmed,company:form.get("company"),nit:form.get("nit"),name:form.get("name"),email:form.get("email")})});const body=await r.json();if(!r.ok)throw new Error(body.error||"No pudimos registrar tus datos. Intenta nuevamente.");setReceipt(body);}catch(e){setError(e instanceof Error?e.message:"No se pudo guardar. Comprueba tu conexión e intenta de nuevo.");}finally{setBusy(false);}
  }
  if(receipt)return <div className="form-card success" role="status"><CheckCircle2 size={40}/><h3>Ya registramos tus datos.</h3><p>Gracias, {receipt.name}. Registramos tu interés en recibir novedades sobre la adecuación de EMIZOR a la Ley N.º 1733.</p><p>Correo de contacto: <strong>{receipt.email}</strong></p></div>;
  return <form className="form-card" onSubmit={submit}><h3>Recibe nuestras novedades</h3><p className="form-intro">Indícanos cómo contactarte para mantenerte al día.</p><div className="fields"><label htmlFor="name">Tu nombre completo<Input id="name" name="name" required minLength={3} maxLength={160} autoComplete="name" placeholder="Nombre y apellido"/></label><label htmlFor="email">Correo electrónico<Input id="email" name="email" type="email" required maxLength={180} autoComplete="email" placeholder="nombre@empresa.com"/></label><label htmlFor="company">Empresa o razón social<Input id="company" name="company" required minLength={2} maxLength={180} autoComplete="organization" placeholder="Nombre de tu empresa"/></label><label htmlFor="nit">NIT de la empresa (opcional)<Input id="nit" name="nit" pattern="[0-9]{5,20}" inputMode="numeric" maxLength={20} title="Ingresa entre 5 y 20 dígitos, sin espacios ni guiones" placeholder="Solo números"/></label></div><div className="consent"><Checkbox id="confirmed" checked={confirmed} onCheckedChange={v=>setConfirmed(v===true)}/><label htmlFor="confirmed">Autorizo a EMIZOR a utilizar estos datos para enviarme novedades sobre la adecuación a la Ley N.º 1733.</label></div><p className="form-note">Podrás solicitar dejar de recibir estas novedades escribiendo a <a href="mailto:contacto@emizor.com">contacto@emizor.com</a>.</p>{error&&<p className="form-error" role="alert">{error}</p>}<Button className="submit-button" type="submit" disabled={busy||!requestId}>{busy?"Registrando tus datos…":"Quiero mantenerme informado"} {!busy&&<ArrowUpRight size={18}/>}</Button></form>;
}
