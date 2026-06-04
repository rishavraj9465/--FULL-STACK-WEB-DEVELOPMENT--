CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE Teacher(
id INT PRIMARY KEY,
name VARCHAR(20),
subject VARCHAR(20),
salary INT 
);

INSERT INTO Teacher(id,name,subject,salary) VALUES
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

SELECT * FROM Teacher;
-- Q1
SELECT * FROM Teacher WHERE salary>55000;
-- Q2
ALTER TABLE Teacher CHANGE COLUMN salary ctc INT ;
-- Q3
UPDATE Teacher SET ctc=ctc+ctc*0.25;
SET SQL_SAFE_UPDATES = 0;
-- Q4
ALTER TABLE Teacher ADD COLUMN city VARCHAR(20) DEFAULT "Gurgaoan";
-- Q5
ALTER TABLE Teacher DROP COLUMN ctc;


-- TOPIC 15 PRACTICE QS 2
CREATE TABLE student(
roll_no INT PRIMARY KEY,
name VARCHAR(10),
city VARCHAR (10),
marks INT); 

INSERT INTO student (roll_no,name,city,marks) VALUES
(110,"adam","Delhi",76),
(108,"bob","Mumbai",65),
(123,"casey","Pune",94),
(112,"duke","Pune",80);

SELECT * FROM student;

-- Q1 
SELECT * FROM student WHERE MARKS>75;
-- Q2
SELECT DISTINCT city FROM student ; -- OR
SELECT city FROM student GROUP BY city;
-- Q3
SELECT city,max(marks) FROM student GROUP BY city;
-- Q4
SELECT avg(marks) FROM student;
-- Q5
ALTER TABLE student ADD COLUMN grade VARCHAR(10);

UPDATE student SET grade = "O" WHERE marks>=80 ;

UPDATE student SET grade = "A" WHERE marks>=70 AND marks<80 ;

UPDATE student SET grade = "B" WHERE marks>=60 AND marks<70 ;

SELECT * FROM student;
 





