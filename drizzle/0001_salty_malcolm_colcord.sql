CREATE TABLE `update_subscribers` (
	`id` text PRIMARY KEY NOT NULL,
	`company` text NOT NULL,
	`nit` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`registered_at` text NOT NULL,
	`version` text NOT NULL,
	`consent_text` text NOT NULL,
	`payload_hash` text NOT NULL
);
