/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : egg_demo

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-06-14 17:55:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(200) NOT NULL,
  `password` char(200) NOT NULL,
  `nickname` char(200) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `mobile` char(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'ken', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'kenny', '1', '13925542760');
INSERT INTO `users` VALUES ('2', 'user1', '$2a$10$1uYhjCWk/Wuaz0vBWGRTVeXuVycMmJzTt6ewgvup5DKvamwJZpLDy', 'user1', '2', '13800138000');
INSERT INTO `users` VALUES ('4', 'yaoyonstudio', '$2a$10$.ad2bozKXUpGaWo/6xm/PeLwfFnhxlA92MaJJWChbYKskt6/40jJK', null, null, null);
