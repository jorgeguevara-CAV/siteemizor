import { env } from "cloudflare:workers";
export function receiptDb(){if(!env.DB)throw new Error("Receipt database unavailable");return env.DB;}
