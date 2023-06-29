---
title: MySQL commands 
description: a collection of frequently used MySQL commands
slug: mysql-commands
date: 2023-06-29
type: Post
tags: ['mysql','note']
---

### SELECT 用法

使用資料庫, 再查找資料表
```sql
USE global;  
SELECT * FROM Worldcity;
```
查詢指定資料庫的資料表
```sql
SELECT * FROM TestDB.empdata;
```
僅查詢特定欄位
```sql
SELECT ID, Name FROM Worldcity;
SELECT Name, ID FROM Worldcity;
SELECT ID, Name, District FROM Worldcity;
```
查詢時做計算
```sql
SELECT ename, salary, 
       salary * 12, (salary * 12) + (salary DIV 2) 
FROM testdb.empdata;
```
別名, AS 可省略
```sql
SELECT ename, 
       salary AS MonthlySalary, 
       salary * 12 AS AnnualSalary, 
       (salary * 12) + (salary DIV 2) AS AnnualFullSalary 
FROM testdb.empdata;
```
`AS 'Annual Salary';`
查詢條件
```sql
SELECT * FROM Worldcity WHERE CountryDataCode = 'TWN';
```
```sql
SELECT * FROM Worldcity WHERE Population < 800;
```
```sql
SELECT * FROM Worldcity WHERE Population <= 800;
```
### 日期判斷
```sql
SELECT * FROM testdb.empdata WHERE hiredate > '1981-09-08';
```
```sql
SELECT * FROM testdb.empdata WHERE hiredate = '1981-09-08';
```
### 邏輯條件查找
```sql
SELECT * FROM Worldcity WHERE CountryDataCode != 'TWN';
```
```sql
SELECT * FROM Worldcity WHERE NOT CountryDataCode = 'TWN';
```
```sql
SELECT * FROM Worldcity 
WHERE CountryDataCode = 'TWN' AND Population < 100000;
```
```sql
SELECT * FROM Worldcity WHERE CountryDataCode = 'TWN' 
OR CountryDataCode = 'USA';
```
```sql
SELECT Name, Continent, Population 
FROM countrydata WHERE Continent = 'Europe' 
OR Continent = 'Africa' AND Population < 10000;
```
```sql
SELECT Name, Continent, Population 
FROM countrydata WHERE (Continent = 'Europe' 
OR Continent = 'Africa') AND Population < 10000;
```
### Between
```sql
SELECT * FROM Worldcity WHERE Population >= 80000 
AND Population <= 90000;
```
```sql
SELECT * FROM Worldcity WHERE Population 
BETWEEN 80000 AND 90000;
```
```sql
SELECT ename, hiredate
FROM TestDB.empdata
WHERE hiredate BETWEEN '1981-01-01' AND '1981-06-30';
```
### 許多條件
```sql
SELECT * FROM Worldcity WHERE CountryDataCode = 'TWN' 
OR CountryDataCode = 'USA';
```
```sql
SELECT *
FROM worldcity
WHERE CountryDataCode IN ('TWN','USA','JPN','ITA','KOR');
```
### 查詢資料為NULL
```sql
SELECT Name, LifeExpectancy FROM countrydata 
WHERE LifeExpectancy IS NULL;
```
```sql
SELECT Name, LifeExpectancy FROM countrydata 
WHERE LifeExpectancy <=> NULL;
```
```sql
SELECT Name, LifeExpectancy FROM countrydata 
WHERE LifeExpectancy IS NOT NULL;
```
### 查詢包含文字, regex
- starts with w/W  
```sql
SELECT Name FROM Worldcity WHERE Name LIKE 'w%';
```
- ends with w/W    
```sql
SELECT Name FROM Worldcity WHERE Name LIKE '%w';
```
- if w/W exists  
```sql
SELECT Name FROM Worldcity WHERE Name LIKE '%w%';
```
- starts with w/W, total of 6 letters  
```sql
SELECT Name FROM Worldcity WHERE Name LIKE 'w_____';
```
- letter six is w/W, after that any character  
```sql
SELECT Name FROM Worldcity WHERE Name LIKE '_____w%';
```
### 排序資料, 預設 ASC
```sql
SELECT CountryDataCode, Name FROM Worldcity 
ORDER BY CountryDataCode ASC;
```
```sql
SELECT CountryDataCode, Name FROM Worldcity 
ORDER BY CountryDataCode DESC;
```
多欄位排序  
```sql
SELECT CountryDataCode, Name FROM Worldcity 
ORDER BY CountryDataCode, Name;
```
```sql
SELECT CountryDataCode, Name FROM Worldcity 
ORDER BY CountryDataCode DESC, Name ASC;
```
### 計算後排序
```sql
SELECT ename, salary * 12 AS AnnualSalary 
FROM testdb.empdata ORDER BY salary * 12;
```
```sql
SELECT ename, salary * 12 AS AnnualSalary 
FROM testdb.empdata ORDER BY AnnualSalary;
```
指定排序的欄位
```sql
SELECT ename, salary * 12 AS AnnualSalary 
FROM testdb.empdata ORDER BY 2;
```
### 限制查詢筆數
前五筆  
```sql
SELECT empno, ename FROM testdb.empdata LIMIT 5;
```
從第五筆開始, 往後找五筆
```sql
SELECT empno, ename FROM testdb.empdata LIMIT 5, 5;
```
```sql
SELECT empno, ename, salary FROM testdb.empdata 
ORDER BY salary DESC LIMIT 3;
```
```sql
SELECT empno, ename, salary FROM testdb.empdata 
ORDER BY salary ASC LIMIT 3;
```
### 查詢全部資料
```sql
SELECT Continent FROM countrydata;  
```
```sql
SELECT ALL Continent FROM countrydata;  
```
重複的資料只會出現一次  
```sql
SELECT DISTINCT Continent FROM countrydata;
```
## 插入資料
### 顯示欄位資訊 description
```sql
DESC testdb.deptdata;
```
```sql
DESC testdb.empdata;
```

### 插入資料
`deptno, dname, location`
```sql
INSERT INTO testdb.deptdata VALUES (60, 'EDU', 'NEW YORK');
```
使用預設值
```sql
INSERT INTO testdb.deptdata
VALUES (70, 'MARKETING', DEFAULT);
```
Error 少一個欄位
```sql
INSERT INTO testdb.deptdata
VALUES (80, 'PURCHASING');
```
成功, 但第一欄位自動被替換成PK, 若有最小值, 即最小值
```sql
INSERT INTO testdb.deptdata
VALUES ('PURCHASING', 80, 'NEW YORK');
```
不按欄位順序插入資料, 需先表明欄位名稱
```sql
INSERT INTO testdb.deptdata (dname, deptno, location)
VALUES ('PURCHASING', 80, 'NEW YORK');
```
Error 少一個欄位
```sql
INSERT INTO testdb.deptdata (deptno, dname, location)
VALUES (90, 'SHIPPING');
```
指定欄位輸入時, 額外的欄位若沒指定資料, 自動填入預設值
```sql
INSERT INTO testdb.deptdata (deptno, dname)
VALUES (90, 'SHIPPING');
```
dname 不能為空值, 但依然能插入資料表, 此位置的資料將來存取會有問題
```sql
INSERT INTO testdb.deptdata (deptno, location)
VALUES (80, 'NEW YORK');
```
若 PK 重複, Error
```sql
INSERT INTO testdb.deptdata 
SET deptno = 90, dname = 'MARKETIN'
```
存資料已存在, 不插入資料, 程式不出錯
```sql
INSERT IGNORE INTO testdb.deptdata
SET deptno = 90, dname = 'MARKETIN';
```
```sql
INSERT IGNORE INTO testdb.deptdata
VALUES (500, 'MIS', DEFAULT);
```
多筆資料插入
```sql
INSERT INTO testdb.empdata VALUES 
(8001, 'SIMON', 'MANAGER', 7369, '2001-02-03', 3300, NULL, 50),
(8002, 'JOHN', 'PROGRAMMER', 8001, '2002-01-01', 2300, NULL, 50),
(8003, 'GREEN', 'ENGINEER', 8001, '2003-05-01', 2000, NULL, 50);
```
### 條件式查找資料
```sql
SELECT *
FROM testdb.traveldata
WHERE empno = 7900 AND location = 'BOSTON';
```
```sql
DESC testdb.traveldata;
```
`empno PK, location PK, counter`

雙PK, 若兩者同時重複才報錯
```sql
INSERT INTO testdb.traveldata
VALUES (7900, 'BOSTON', 1);
```
```sql
INSERT INTO testdb.traveldata
VALUES (7900, 'CHICAGO', 1);
```
## 更新資料
```sql
UPDATE testdb.traveldata 
SET counter = counter + 1
WHERE empno = 7900 AND location = 'BOSTON';
```
插入, 若PK重複, 則更新
```sql
INSERT INTO testdb.traveldata
VALUES (7900, 'BOSTON', 1)
ON DUPLICATE KEY UPDATE counter = counter + 1;
```
### insert ignore into, replace
若PK重複, 報錯
```sql
INSERT INTO testdb.deptdata
VALUES (50, 'MIS', DEFAULT);
```
若PK重複, 不報錯, 不插入
```sql
INSERT IGNORE INTO testdb.deptdata
VALUES (50, 'MIS', DEFAULT);
```
取代 PK 指定的資料
```sql
REPLACE INTO testdb.deptdata
VALUES (50, 'MIS', DEFAULT);
```
更改單一欄位的所有值
```sql
UPDATE testdb.empdata
SET    salary = salary + 100;
```
加入條件判斷
```sql
UPDATE testdb.empdata
SET    salary = salary + 100
WHERE  salary < 1500;
```
更改 PK
```sql
UPDATE testdb.deptdata
SET    deptno = 150
WHERE  deptno = 30;
```
若 PK 30 已有, 則不更新, 也不報錯, 會有警示
```sql
UPDATE IGNORE testdb.deptdata
SET    deptno = 30
WHERE  deptno = 150;
```
若條件不成立, 不報錯, 不執行更新
```sql
UPDATE testdb.empdata
SET    salary = 'HELLO', comm = 1000
WHERE  empno = 7369;
```
```sql
UPDATE testdb.empdata
SET    salary = 5000, comm = 1000
WHERE  empno = 8001;
```
資料型態不對還是可以更新, 但 salary 值為 0.00
```sql
UPDATE testdb.empdata
SET    salary = 'HELLO', comm = 1000
WHERE  empno = 8001;
```
### 加入排序
```sql
SELECT * FROM testdb.empdata ORDER BY salary LIMIT 3;
```
salary 最少的三位 + 100
```sql
UPDATE   testdb.empdata
SET      salary = salary + 100
ORDER BY salary
LIMIT    3;
```
salary 最高的三位 - 100
```sql
UPDATE   testdb.empdata
SET      salary = salary - 100
ORDER BY salary DESC
LIMIT    3;
```
## 刪除資料
刪除整個資料表 的內容
```sql
DELETE FROM testdb.empdata;
```
刪除符合條件的資料
```sql
DELETE FROM  testdb.empdata
WHERE  salary < 1500;
```
刪除 salary 最低的前三位資料
```sql
DELETE FROM testdb.empdata
ORDER BY salary
LIMIT    3;
```
刪除 salary 最高的前三位資料
```sql
DELETE FROM testdb.empdata
ORDER BY salary DESC
LIMIT    3;
```
刪除整個資料表
```sql
TRUNCATE TABLE testdb.empdata
```
### 其他功能
```sql
SELECT Name
FROM   countrydata
WHERE  Continent='Antarctica';
```
`'South Georgia and the South Sandwich Islands'
`
> 從左邊補齊 50 個字元, 補_
```sql
SELECT LPAD (Name, 50, '_') FROM countrydata WHERE Continent = 'Antarctica';
```
`'______South Georgia and the South Sandwich Islands'
`
> 從右邊補齊 70 個字元, 補_
```sql
SELECT RPAD (Name, 70, '_') 
FROM countrydata 
WHERE Continent = 'Antarctica';
```
`'South Georgia and the South Sandwich Islands__________________________'
`

比對日期, 計算相差天數
```sql
USE testdb;
SELECT ename, hiredate, DATEDIFF ('2015-03-05', hiredate) AS days FROM empdata;
```
ROUND 四捨五入, 四捨五入至第幾位, 進位至整數, 捨去至整數
```sql
SELECT 
ROUND(2.9587), 
ROUND(3.14159, 5), 
CEIL(5.6243), 
FLOOR(2.34178)
;
```
亂數取資料
```sql
SELECT Name
FROM global.countrydata
ORDER BY RAND()
LIMIT 3;
```
CURDATE() 年月日, 以YEAR()包起來, 就只回傳年
```sql
SELECT Name, YEAR(CURDATE()) - IndepYear AS year_range
FROM global.countrydata
ORDER BY year_range DESC;
```
單獨取資料中的年月日
```sql
SELECT YEAR(hiredate) AS year,
       MONTH(hiredate) AS month,
       DAY(hiredate) AS day
FROM testdb.empdata;
```

年小於 1985 顯示 Senior, 否則 顯示 General
```sql
SELECT ename, hiredate,
       IF(YEAR(hiredate) < 1985, 'Senior', 'General') AS grade
FROM testdb.empdata
ORDER BY hiredate;
```

查詢顯示的多種方法 條件式+算數
```sql
SELECT ename, hiredate, salary,
       salary * IF(YEAR(hiredate) < 1985, 2.5, 1.2) AS bonus
FROM testdb.empdata
ORDER BY hiredate;
```