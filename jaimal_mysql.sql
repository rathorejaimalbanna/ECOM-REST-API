create database e_com;

use e_com;

create table products(
id int primary key,
name varchar(50),
category varchar(50),
price int)

insert into products values(
1,"jacket","mens wear",345)

create table users(
name varchar(20),
username varchar(50),
password varchar(50))

create table cart(
username varchar(50),
itemName varchar(50),
itemPrice int)

INSERT INTO products (id, name, category, price) VALUES
(2, 'sneakers', 'footwear', 80),
(3, 't-shirt', 'mens wear', 20),
(4, 'dress', 'womens wear', 150),
(5, 'jeans', 'mens wear', 50);

INSERT INTO products (id, name, category, price) VALUES
(6, 'running shoes', 'footwear', 120),
(7, 'hoodie', 'mens wear', 60),
(8, 'skirt', 'womens wear', 40),
(9, 'sunglasses', 'accessories', 25),
(10, 'watch', 'accessories', 200);

INSERT INTO products (id, name, category, price) VALUES
(11, 'backpack', 'accessories', 50),
(12, 'formal shirt', 'mens wear', 35),
(13, 'sandals', 'footwear', 25),
(14, 'leggings', 'womens wear', 30),
(15, 'belt', 'accessories', 15);