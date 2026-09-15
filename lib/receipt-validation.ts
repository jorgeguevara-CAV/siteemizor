import { z } from "zod";
import { notice } from "./notice";
export const receiptSchema = z.object({
  requestId: z.string().uuid(),
  company: z.string().trim().min(2).max(180),
  nit: z.string().trim().regex(/^\d{5,20}$/),
  name: z.string().trim().min(3).max(160),
  email: z.string().trim().email().max(180),
  confirmed: z.literal(true),
  version: z.literal(notice.version),
}).strict();
