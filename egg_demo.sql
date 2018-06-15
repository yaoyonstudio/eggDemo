/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : egg_demo

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-06-15 11:33:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `sequelizemeta`
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20180615032743-unnamed-migration.js');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'ken', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'kenny', '1', null, '13925542760', '1', '3', null, null);
INSERT INTO `users` VALUES ('2', 'user1', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', 'user1', '2', null, '13800138000', '1', '1', null, null);
INSERT INTO `users` VALUES ('4', 'yaoyonstudio', '$2a$10$.ad2bozKXUpGaWo/6xm/PeLwfFnhxlA92MaJJWChbYKskt6/40jJK', 'yaoyon', '3', null, '13900139000', '1', '2', null, null);
INSERT INTO `users` VALUES ('6', 'user2', '$2a$10$.ad2bozKXUpGaWo/6xm/PeLwfFnhxlA92MaJJWChbYKskt6/40jJK', null, '0', null, null, '2', '1', null, null);
INSERT INTO `users` VALUES ('7', 'user3', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', null, '0', null, null, '1', '1', null, null);
INSERT INTO `users` VALUES ('8', 'user4', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', null, '0', null, null, '2', '1', null, null);
INSERT INTO `users` VALUES ('9', 'user5', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', null, '0', null, null, '2', '1', null, null);
INSERT INTO `users` VALUES ('10', 'user6', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', null, '0', null, null, '1', '1', null, null);
INSERT INTO `users` VALUES ('11', 'user7', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', null, '0', null, null, '2', '2', null, null);
INSERT INTO `users` VALUES ('12', 'user8', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', null, '0', null, null, '1', '1', null, null);
INSERT INTO `users` VALUES ('13', 'user9', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', null, '0', null, null, '1', '1', null, null);
INSERT INTO `users` VALUES ('14', 'user10', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', null, '0', null, null, '1', '1', null, null);
INSERT INTO `users` VALUES ('15', 'user11', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', null, '0', null, null, '1', '1', null, null);
INSERT INTO `users` VALUES ('16', 'kenny', '$2a$10$bq8Cn93JtQmcBu4.bgWt5uiXSjS.z8.LFyYAKhRoAX.YUKNLDwyju', null, '0', null, null, '1', '1', null, null);
