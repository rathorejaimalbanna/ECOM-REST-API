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

insert into cart values(
"jaimal@banna","jacket",3444)

INSET INTO cart VALUES(
"rathore@jai",'jacket',345)