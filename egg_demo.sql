/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : egg_demo

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-06-15 18:35:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `content` text,
  `keyword` varchar(255) DEFAULT NULL,
  `excerpt` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `source_link` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `featuredImg` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('1', 'post1', 'post1', 'post1', 'post1', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('2', 'post2', 'post2', 'post2', 'post2', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('3', 'post3', 'post3', 'post3', 'post3', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('4', 'post4', 'post4', 'post4', 'post4', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('5', 'post5', 'post5', 'post5', 'post5', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('6', 'apost6', 'post6', 'post6', 'post6', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('7', 'post7', 'post7', 'post7', 'post7', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('8', 'post8', 'post8', 'post8', 'post8', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('9', 'post9', 'post9', 'post9', 'post9', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('10', 'bpost10', 'post10', 'post10', 'post10', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('11', 'post11', 'post11', 'post11', 'post11', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('12', 'post12', 'post12', 'post12', 'post12', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('13', 'post13', 'post13', 'post13', 'post13', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('14', 'post14', 'post14', 'post14', 'post14', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('15', 'post15', 'post15', 'post15', 'post15', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('16', 'post16', 'post16', 'post16', 'post16', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('17', 'post17', 'post17', 'post17', 'post17', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('18', 'post18', 'post18', 'post18', 'post18', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('19', 'post19', 'post19', 'post19', 'post19', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('20', 'post20', 'post20', 'post20', 'post20', null, null, null, null, null, '1', null, null);
INSERT INTO `news` VALUES ('21', 'my post1', 'my post1 content', 'mypost1', 'my post1 excerpt', 'my post1 slug', null, null, null, null, '1', '2018-06-15 08:56:31', '2018-06-15 08:56:31');
INSERT INTO `news` VALUES ('24', 'my post24', 'my post24 content', 'mypost24', 'my post24 excerpt', 'my post24 slug', null, null, null, null, '1', '2018-06-15 08:58:22', '2018-06-15 09:15:16');
INSERT INTO `news` VALUES ('25', 'my post2', 'my post2 content', 'mypost2', 'my post2 excerpt', 'my post2 slug', null, null, null, null, '1', '2018-06-15 09:08:58', '2018-06-15 09:08:58');
INSERT INTO `news` VALUES ('26', 'my post2', 'my post2 content', 'mypost2', 'my post2 excerpt', 'my post2 slug', null, null, null, null, '1', '2018-06-15 09:11:25', '2018-06-15 09:11:25');
INSERT INTO `news` VALUES ('27', 'my post2', 'my post2 content', 'mypost2', 'my post2 excerpt', 'my post2 slug', null, null, null, null, '1', '2018-06-15 09:11:31', '2018-06-15 09:11:31');

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
INSERT INTO `sequelizemeta` VALUES ('20180615065038-create-user.js');
INSERT INTO `sequelizemeta` VALUES ('20180615065056-create-news.js');
INSERT INTO `sequelizemeta` VALUES ('20180615065655-associate-migration.js');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `nickname` varchar(200) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `birthday` varchar(20) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'ken', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'kenny', '2', '1990-07-07', '13800138000', '1', '1', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('2', 'user1', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user1', '3', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('3', 'user2', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user2', '3', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('4', 'user3', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user3', '2', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('5', 'user4', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user4', '3', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('6', 'user5', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user5', '3', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('7', 'user6', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user6', '2', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('8', 'user7', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user7', '3', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('9', 'user8', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user8', '3', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `users` VALUES ('10', 'user9', '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy', 'user9', '2', null, null, '1', '3', null, null, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
