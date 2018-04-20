# shoppingpro
Database
Create user, db, and grant access
mysql -u root -p 
create user shop identified by 'shoppass';
create database shopdb;
grant all privileges on shopdb.* to shopper;
flush privileges;
exit
