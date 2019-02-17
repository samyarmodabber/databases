select * from user;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';
select * from user;
select * from status;
insert into user (name,email) values('Sam','sam@gmail.com');

select * from task where id=36;
select * from task;


select * from user_task;
