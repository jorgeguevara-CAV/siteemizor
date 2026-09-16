import { sqliteTable, text } from "drizzle-orm/sqlite-core";
export const receipts = sqliteTable("receipts", {
 id:text("id").primaryKey(), company:text("company").notNull(), nit:text("nit").notNull(), name:text("name").notNull(), email:text("email").notNull(), receivedAt:text("received_at").notNull(), version:text("version").notNull(), noticeText:text("notice_text").notNull(), noticeHash:text("notice_hash").notNull(), payloadHash:text("payload_hash").notNull(), confirmation:text("confirmation").notNull()
});

export const subscribers = sqliteTable("update_subscribers", {
 id:text("id").primaryKey(), company:text("company").notNull(), nit:text("nit").notNull(), name:text("name").notNull(), email:text("email").notNull(), registeredAt:text("registered_at").notNull(), version:text("version").notNull(), consentText:text("consent_text").notNull(), payloadHash:text("payload_hash").notNull()
});
