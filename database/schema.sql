-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;
DROP DATABASE IF EXISTS guru;
CREATE DATABASE guru;
USE guru;


-- ---
-- Table 'site'
---- ---

DROP TABLE IF EXISTS `site`;
    
CREATE TABLE `site` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'tag'
-- 
-- ---

DROP TABLE IF EXISTS `tag`;
    
CREATE TABLE `tag` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'site-tag'
-- 
-- ---

DROP TABLE IF EXISTS `site-tag`;
    
CREATE TABLE `site_tag` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `id_site` INTEGER NOT NULL,
  `id_tag` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `site_tag` ADD FOREIGN KEY (id_site) REFERENCES `site` (`id`);
ALTER TABLE `site_tag` ADD FOREIGN KEY (id_tag) REFERENCES `tag` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `site` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `tag` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `site-tag` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `site` (`name`,`title`,`url`) VALUES ('Google','','https://www.google.com/');
INSERT INTO `site` (`name`,`title`,`url`) VALUES ('Bing','','https://www.bing.com/');
INSERT INTO `site` (`name`,`title`,`url`) VALUES ('Yahoo','','https://www.yahoo.com/');
INSERT INTO `tag` (`name`) VALUES ('Search Engine');
INSERT INTO `tag` (`name`) VALUES ('Portal');
INSERT INTO `site_tag` (`id_site`,`id_tag`) VALUES (1,1);
INSERT INTO `site_tag` (`id_site`,`id_tag`) VALUES (2,1);
INSERT INTO `site_tag` (`id_site`,`id_tag`) VALUES (3,1);
INSERT INTO `site_tag` (`id_site`,`id_tag`) VALUES (2,2);
INSERT INTO `site_tag` (`id_site`,`id_tag`) VALUES (3,2);
