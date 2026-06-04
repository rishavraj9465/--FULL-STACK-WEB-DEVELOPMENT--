use Instagram;
select * from user;

SELECT * FROM user WHERE followers >= 200;
SELECT name,followers FROM user Where followers >=200;

SELECT name,age FROM user Where age<22;
-- WHERE CLAUSE 

SELECT name,age FROM user WHERE age + 1 = 22; -- right now age is 21
-- AND
SELECT name,age,followers FROM user WHERE age>=19 AND followers>200;
-- OR
SELECT name,age,followers FROM user WHERE age>=19 OR followers>200;
-- BETWEEN
select name,age,followers FROM user WHERE age BETWEEN 19 AND 21;
-- IN 
SELECT name,email FROM user WHERE email IN  ("donald@gmail.com","adam@yahoo.in","a@.i");


INSERT INTO user (id,age,name,email,followers,following) VALUES
(5,19,"eve","eve@yahoo.in",400,145),
(6,20,"farah","farah@gmail.com",10000,1000);

SELECT name,followers,age FROM user WHERE age  in (19,20);
-- NOT 
SELECT name,followers,age FROM user WHERE age  NOT in (19,20);

-- TOPIC 4 LIMIT CLAUSE 
SELECT name,age,email FROM user WHERE age>17 ;
SELECT name,age,email FROM user WHERE age>17 LIMIT 3 ;

SELECT name,age,email FROM user LIMIT 2 ;

-- TOPIC 5 Order By Clause
SELECT name,followers FROM user ORDER BY followers ASC ; 
SELECT name,followers FROM user ORDER BY followers DESC ; 

SELECT name,followers FROM user ORDER BY followers ; -- default by ASC 

-- TOPIC 6 AGGREGATE FUNCTIONS
SELECT MAX(followers) FROM user;
SELECT MIN(followers) FROM user;
SELECT SUM(followers) FROM user;
SELECT AVG(age) FROM user;
SELECT COUNT(followers) FROM user WHERE age>20;

-- TOPIC 7 GROUP BY CLAUSE
SELECT  age,COUNT(id),max(followers) FROM user GROUP BY age;

-- SELECT  name,age,COUNT(id),max(followers) FROM user GROUP BY age; 
-- above line gives err bec if any col is selected then group by that col only


-- TOPIC 8 HAVING CLAUSE 

SELECT age,max(followers) FROM user GROUP BY age HAVING max(followers)>200;

-- TOPIC 9 GENEREAL ORDER

SELECT age,max(followers) FROM user GROUP BY age HAVING max(followers)>200
ORDER BY age DESC;

-- TOPIC 10 UPDATE TABLE

UPDATE user SET 
followers = 600 WHERE age = 19 ;

SET SQL_SAFE_UPDATES = 0; -- TO REMOVE 1175 ERROR

SELECT * FROM user ;

-- TOPIC 11 DELETE TABLE

-- DELETE FROM user WHERE age = 22 ;
-- DELETE FROM user : -- will delete all rows

-- TOPIC 12 ALTER TABLE

-- add column
ALTER TABLE user ADD COLUMN city VARCHAR(10) DEFAULT "DELHI";
ALTER TABLE user ADD COLUMN state VARCHAR(10);

-- drop column
ALTER TABLE user DROP COLUMN state;
SELECT * FROM user;

-- rename table
ALTER TABLE user RENAME TO customer;
Select * from customer;

ALTER TABLE customer RENAME TO user;
SELECT * FROM user;

-- change col name

ALTER TABLE user CHANGE COLUMN
id roll INT NOT NULL ;

SELECT * FROM user;

ALTER TABLE user CHANGE COLUMN 
roll id INT NOT NULL;

-- MODIFY COLUMN

ALTER TABLE user MODIFY 
city VARCHAR(20) DEFAULT "MUMBAI";

SELECT * FROM user;

-- TOPIC 13 TRUNCATE TABLE

-- WILL GIVE ERROR IF FOREIGN KEY OF OTHER TABLE OR ANY CONNECTIONS TO OTHER TABLE 




