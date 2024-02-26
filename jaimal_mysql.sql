create database e_com;

use e_com;

create table products(
id int primary key,
name varchar(50),
image varchar(50))

insert into products values(
5,"move_forward","success is waiting");

select * from products

insert into products values(
11,"suit","888");
insert into products values(
12,"kurta","777");
insert into products values(
13,"shirt","666");
insert into products values(
14,"jeans","555");
insert into products values(
15,"jeans","567")

select * from products
use e_com;

create table users(
name varchar(20),
username varchar(50),
password varchar(50))

insert into users values(
"jai","jaimal@gmail","jh77");

select * from users where name = "jai" and password = "jh77"

select * from users
