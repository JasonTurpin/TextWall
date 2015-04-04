/* Text Messaging */
CREATE TABLE IF NOT EXISTS `Texts` (
  `text_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `phoneNumber` varchar(20) NOT NULL,
  `message` text NOT NULL,
  `isProfane` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP,
  PRIMARY KEY(`text_id`)
);
