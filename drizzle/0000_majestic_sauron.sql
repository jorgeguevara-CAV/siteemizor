CREATE TABLE `receipts` (
	`id` text PRIMARY KEY NOT NULL,
	`company` text NOT NULL,
	`nit` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`received_at` text NOT NULL,
	`version` text NOT NULL,
	`notice_text` text NOT NULL,
	`notice_hash` text NOT NULL,
	`payload_hash` text NOT NULL,
	`confirmation` text NOT NULL
);
