
create database project;
use project;
create table Library
(
	lib_ID int primary key,
	lib_name varchar(100)
);

create table Employee (
    EmpID INT NOT NULL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    lib_ID INT, 
    salary INT,
    FOREIGN KEY (lib_ID) REFERENCES Library(lib_ID)
);

create table Employee_Contacts(
	Emp_Con INT NOT NULL PRIMARY KEY,
    email VARCHAR(255),
    phone_number Varchar(255),
    EmpID INT,
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
);



CREATE TABLE Customers (
    CusID INT NOT NULL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    lib_ID INT NOT NULL
);
ALTER TABLE Customers
ADD FOREIGN KEY (lib_ID) REFERENCES Library(lib_ID);
create table Customer_contacts(
	Cus_con INT NOT NULL PRIMARY KEY,
	email VARCHAR(255),
    phone_number varchar(255),
    CusID INT NOT NULL
);

CREATE TABLE Orders (
    OrderID INT NOT NULL PRIMARY KEY,
    Date DATE,
    CusID INT,
    FOREIGN KEY (CusID) REFERENCES Customers(CusID)
);


create table Books(
	BookID Int NOT NULL PRIMARY KEY,
	Name varchar(255) NOT NULL,
	Quantity int,
    category varchar(255) NOT NULL,
    prod_house_ID int NOT NULL,
    price int
);


create table Production_house(
	prod_house_ID Int NOT NULL PRIMARY KEY,
    Name varchar(255)
);
ALTER TABLE Books
ADD FOREIGN KEY (prod_house_ID) REFERENCES Production_house(prod_house_ID);
CREATE TABLE Location (
    locID INT NOT NULL PRIMARY KEY,
    Name VARCHAR(255),
    lib_ID INT,
    prod_house_ID INT
);
ALTER TABLE Location
ADD FOREIGN KEY (lib_ID) REFERENCES Library(lib_ID);
ALTER TABLE Location
ADD FOREIGN KEY (prod_house_ID) REFERENCES Production_house(prod_house_ID);
create table Author(
	authorID Int NOT NULL PRIMARY KEY,
    Name varchar(255)
);
CREATE TABLE AuthorsBooks(
    authorID INT NOT NULL,
    BookID INT NOT NULL
);
ALTER TABLE AuthorsBooks
ADD FOREIGN KEY (authorID) REFERENCES Author(authorID);
ALTER TABLE AuthorsBooks
ADD FOREIGN KEY (BookID) REFERENCES Books(BookID);
CREATE TABLE BookOrders(
    OrderID INT NOT NULL,
    BookID INT NOT NULL
);
ALTER TABLE BookOrders
ADD FOREIGN KEY (OrderID) REFERENCES Orders(OrderID);
ALTER TABLE BookOrders
ADD FOREIGN KEY (BookID) REFERENCES Books(BookID);


INSERT INTO Library (lib_ID, lib_name)
VALUES
    (1, 'Central Library'),
    (2, 'Community Library');

INSERT INTO Employee (EmpID , Name, lib_ID, salary)
VALUES
    (101, 'John Doe', 1, 5000),
    (102, 'Jane Smith', 2, 7500),
    (103, 'Kendall Morgan', 1, 6000),
    (104, 'Harper Jordan', 2, 5000)
    ;


INSERT INTO Employee_Contacts (Emp_Con, email, phone_number, EmpID)
VALUES
    (1001, 'john.doe@example.com', '123-456-7890', 101),
    (1002, 'jane.smith@example.com', '333-054-3210', 102),
    (1003, 'kendall.morgan@example.com', '777-654-0010', 103),
    (1004, 'harper.jordan@example.com', '900-604-6610', 104);


INSERT INTO Customers (CusID, Name, lib_ID)
VALUES
    (201, 'Alice Johnson', 1),
    (202, 'Bob Smith', 2),
    (203, 'Elliott Finley', 2),
    (204, 'Charlie Dakota', 1),
    (205, 'Avery Bailey', 2),
    (206, 'Parker Quinn', 1);


INSERT INTO Customer_contacts (Cus_con, email, phone_number, CusID)
VALUES
    (2001, 'alice.johnson@example.com', '111-222-3333', 201),
    (2002, 'bob.smith@example.com', '777-555-6666', 202),
    (2003, 'elliott.finley@example.com', '444-111-6666', 203),
    (2004, 'charlie.akota@example.com', '444-555-0000', 204),
    (2005, 'avery.bailey@example.com', '444-589-9966', 205),
    (2006, 'parker.quinn@example.com', '441-005-489', 206);

INSERT INTO Orders (OrderID, Date, CusID)
VALUES
    (301, '2023-01-15', 201),
    (302, '2023-02-20', 202),
    (303, '2023-12-12', 203),
	(304, '2023-12-02', 204),
	(305, '2023-12-26', 205),
    (306, '2023-12-24', 206),
	(307, '2023-12-25', 203),
	(308, '2023-12-26', 206),
    (309, '2023-12-01', 202),
	(310, '2023-12-05', 204),
    (311, '2023-12-20', 202),
    (312, '2023-12-13', 201);


INSERT INTO Production_house (prod_house_ID, Name)
VALUES
    (1, 'Publisher A'),
    (2, 'Publisher B');


INSERT INTO Books (BookID, Name, Quantity, category, prod_house_ID, price)
VALUES
    (401, 'The Great Gatsby', 10, 'Fiction', 1, 150),
    (402, 'To Kill a Mockingbird', 5, 'Fiction', 2, 200),
    (403, 'The Catcher in the Rye', 7, 'Fiction', 2, 250),
    (404, 'The Hobbit', 3, 'Fantasy', 2, 100),
    (405, 'The Lord of the Rings', 2, 'Fantasy', 1, 75),
    (406, 'The Da Vinci Code', 8, 'Mystery', 2, 150),
    (407, 'Angels and Demons', 6, 'Mystery', 1, 160),
    (408, 'The Girl with the Dragon Tattoo', 4, 'Mystery', 1, 120),
    (409, 'The Hunger Games', 9, 'Science Fiction', 2, 220),
    (410, 'Dune', 1, 'Science Fiction', 1, 170),
    (411, 'The Hitchhiker''s Guide to the Galaxy', 3, 'Science Fiction', 2, 180),
    (412, 'The War of the Worlds', 2, 'Science Fiction', 1, 100),
    (413, 'The Time Machine', 1, 'Science Fiction', 1, 90),
    (414, 'The Picture of Dorian Gray', 6, 'Classics', 1, 85),
    (415, 'Pride and Prejudice', 4, 'Classics', 1, 235),
    (416, 'Book One', 50, 'Fiction', 1, 130),
    (417, 'Book Two', 30, 'Mystery', 2, 200)
;
    


INSERT INTO Location (locID, Name, lib_ID, prod_house_ID)
VALUES
    (501, 'Main Branch', 1, 1),
    (502, 'Branch 1', 2, 2);


INSERT INTO Author (authorID, Name)
VALUES

    (601, 'F. Scott Fitzgerald'),
    (602, 'Harper Lee'),
    (603, 'J.D. Salinger'),
    (604, 'J.R.R. Tolkien'),
    (605, 'Dan Brown'),
    (606, 'Stieg Larsson'),
    (607, 'Suzanne Collins'),
    (608, 'Frank Herbert'),
    (609, 'Douglas Adams'),
    (610, 'H.G. Wells'),
    (611, 'Author X'),
    (612, 'Author Y');

INSERT INTO AuthorsBooks (authorID, BookID)
VALUES
    (601, 401),
    (602, 402),
    (603, 403),
    (604, 404),
    (604, 405),
    (605, 406),
    (605, 407),
    (606, 408),
    (607, 409),
    (608, 410),
    (609, 411),
    (610, 412),
    (610, 413),
    (611, 416),
    (612, 417);


INSERT INTO BookOrders (OrderID, BookID)
VALUES
    (301, 411),
    (302, 413),
    (303, 404),
	(304, 405),
	(305, 408),
    (306, 410),
	(307, 412),
	(308, 417),
    (309, 413),
	(310, 402),
    (311, 403),
    (312, 401);

select * from Library;
select * from Employee;
select * from Employee_contacts;
select * from Customers;
select * from Customer_Contacts;
select * from Orders;
select * from Production_house;
select * from Books;
select * from location;
select * from Author;
select * from AuthorsBooks;
select * from Bookorders;