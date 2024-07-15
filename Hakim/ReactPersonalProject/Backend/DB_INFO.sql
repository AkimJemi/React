create schema react_hakim;
use react_hakim;
select database();
drop table user;
CREATE TABLE `user` (
  `id` varchar(10) NOT NULL,  
  `pw` varchar(15) NOT NULL,
  `name` varchar(20) NOT NULL,
  `delete_flag` tinyint(1) DEFAULT 0,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
