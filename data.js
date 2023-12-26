import db from './tp.js';

async function from_library() {
      const [from_library] = await db.query("SELECT * FROM library");
      console.log("selecting from librray")
      console.log(from_library);
      return from_library;
}  


async function from_Employee() {
      const [from_Employee] = await db.query("SELECT * FROM Employee");
      console.log("selecting employee");
      console.log(from_Employee);
      return from_Employee;
}  

async function from_Author() {
      const [from_Author]= await db.query("SELECT * FROM Author");
      console.log("selecting authores");
      console.log(from_Author);
      return from_Author;
}  

async function from_AuthorsBooks() {
      const [from_AuthorsBooks] = await db.query("SELECT * FROM AuthorsBooks");
      console.log("selecting author books");
      console.log(from_AuthorsBooks);
      return from_AuthorsBooks;
}  

async function from_production_house_id() {
      const [from_production_house_id] = await db.query("SELECT * FROM Production_house");
      console.log(from_production_house_id)
      return from_production_house_id;
}  

async function from_Books() {
      const [from_Books]= await db.query("SELECT * FROM Books");
      return from_Books;
}  

async function from_Orders() {
      const [from_Orders] = await db.query("SELECT * FROM Orders");
      console.log(from_Orders)
      return from_Orders;
}  

async function from_Customer_Contacts() {
      const [from_Customer_Contacts] = await db.query("SELECT * FROM Customer_Contacts");
      return from_Customer_Contacts;
}  

async function from_Employee_contacts() {
      const [from_Employee_contacts] = await db.query("SELECT * FROM Employee_contacts");
      console.log(from_Employee_contacts);
      return from_Employee_contacts;
}  

async function from_Customers() {
      const [from_Customers] = await db.query("SELECT * FROM Customers");
      console.log(from_Customers);
      return from_Customers;
}  

async function from_Bookorders() {
      const [from_Bookorders] = await db.query("SELECT * FROM BookOrders");
      console.log(from_Bookorders);
      return from_Bookorders;
}

async function from_location(){
      const [from_location] = await db.query("SELECT * FROM Location")
      return from_location;
}

export default {
      from_Bookorders,
      from_Books,
      from_Customer_Contacts,
      from_Customers,
      from_Employee,
      from_Employee_contacts,
      from_Orders,
      from_library,
      from_production_house_id,
      from_Author,
      from_location,
      from_AuthorsBooks
    };