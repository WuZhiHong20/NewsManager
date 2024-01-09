/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : propertysysdb

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2024-01-09 17:39:19
*/

SET FOREIGN_KEY_CHECKS=0;



-- ----------------------------
-- Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `typename` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `photo` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `introduction` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `descript` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `author` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `addtime` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('3', '美国宇航局要把人形机器人送上天？', '国际新闻', '2', '美国国家航天航空局（NASA）', '在空间竞赛时期，各国积极培养宇航员进驻太空。但时至今日，伴随着科技进步，仿生机器人逐渐崭露头角，有望在未来的深空探索中大显身手，开拓新的宇宙征程。  　　“女武神”高6英寸2英寸(约188厘米)，体重300磅(约136公斤)，名字来源于北欧神话中的女武神形象，最初是为了应对福岛核电泄露而研发，以避免让救援人员直接暴露在危险的辐射环境中。  　　“女武神”有着与人类极为相似的躯干、头部、双臂和双腿，通过不断优化软件算法，机器人最终能像人类一样熟练使用各种工具和设备，胜任许多工作。在未来的太空任务中，像“女武神”一样的机器人可以替代宇航员进行太空站外壳的清洁与维修，可以独立检修故障设备。', '机器人网', '2024-01-09 13:47:33');
INSERT INTO `news` VALUES ('4', '今天天气非常不错', '国内新闻', '3', '今天天气非常不错', '今天天气非常不错强强强强qqq', '张', '2024-01-09 15:06:45');
INSERT INTO `news` VALUES ('5', '呼呼呼', '国内新闻', '3', '呼呼呼', '呼呼呼呼呼呼呼呼呼呼呼呼', '呼呼呼', '2024-01-09 15:07:34');
INSERT INTO `news` VALUES ('6', '强强强强', '国际新闻', '1', '强强强强', '强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强强', '强强强强', '2024-01-09 15:14:22');



-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `userpass` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `addtime` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
