-- Adds the enquiry (leads) table. Safe to re-run: IF NOT EXISTS.
-- Run in hPanel -> Databases -> phpMyAdmin -> SQL tab.

CREATE TABLE IF NOT EXISTS `enquiry` (
	`id` varchar(255) NOT NULL,
	`type` enum('general','tender') NOT NULL DEFAULT 'general',
	`name` text,
	`email` varchar(255),
	`phone` text,
	`clubName` text,
	`subject` text,
	`message` text,
	`tenderClosingDate` varchar(64),
	`sourcePage` text,
	`status` enum('new','read','replied') NOT NULL DEFAULT 'new',
	`emailDelivered` varchar(10) DEFAULT 'false',
	`createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `enquiry_id` PRIMARY KEY(`id`)
);
