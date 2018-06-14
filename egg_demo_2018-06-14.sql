# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.1.32-MariaDB)
# Database: egg_demo
# Generation Time: 2018-06-14 14:51:47 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(200) NOT NULL,
  `password` char(200) NOT NULL,
  `nickname` char(200) DEFAULT NULL,
  `sex` int(1) NOT NULL DEFAULT '0' COMMENT '0-未知，1-男，2-女',
  `birthday` date DEFAULT NULL,
  `mobile` char(11) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '1-启用，2-禁用',
  `role` int(1) NOT NULL DEFAULT '1' COMMENT '1-普通用户，2-管理员，3-超级管理员',
  `created_time` timestamp NULL DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `username`, `password`, `nickname`, `sex`, `birthday`, `mobile`, `status`, `role`, `created_time`, `updated_time`)
VALUES
	(1,'ken','$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy','kenny',1,NULL,'13925542760',1,3,NULL,NULL),
	(2,'user1','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy','user1',2,NULL,'13800138000',1,1,NULL,NULL),
	(4,'yaoyonstudio','$2a$10$.ad2bozKXUpGaWo/6xm/PeLwfFnhxlA92MaJJWChbYKskt6/40jJK','yaoyon',3,NULL,'13900139000',1,2,NULL,NULL),
	(6,'user2','$2a$10$.ad2bozKXUpGaWo/6xm/PeLwfFnhxlA92MaJJWChbYKskt6/40jJK',NULL,0,NULL,NULL,2,1,NULL,NULL),
	(7,'user3','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy',NULL,0,NULL,NULL,1,1,NULL,NULL),
	(8,'user4','$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy',NULL,0,NULL,NULL,2,1,NULL,NULL),
	(9,'user5','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy',NULL,0,NULL,NULL,2,1,NULL,NULL),
	(10,'user6','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy',NULL,0,NULL,NULL,1,1,NULL,NULL),
	(11,'user7','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy',NULL,0,NULL,NULL,2,2,NULL,NULL),
	(12,'user8','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy',NULL,0,NULL,NULL,1,1,NULL,NULL),
	(13,'user9','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy',NULL,0,NULL,NULL,1,1,NULL,NULL),
	(14,'user10','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy',NULL,0,NULL,NULL,1,1,NULL,NULL),
	(15,'user11','$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy',NULL,0,NULL,NULL,1,1,NULL,NULL);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
