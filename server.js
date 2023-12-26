
import express  from 'express';
import  data  from './data.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.get('/', async (req, res) => {
      try {          
            console.log("first");
            const from_library = await data.from_library();
            console.log("second")
            const from_Employee = await data.from_Employee();
            console.log("third")
            const from_Author = await data.from_Author();
            console.log("fourth")
            const from_AuthorsBooks = await data.from_AuthorsBooks();
            console.log("firth")
            const from_production_house_id = await data.from_production_house_id();
            console.log("sixth")
            const from_Books = await data.from_Books();
            console.log("seventh")
            const from_Orders = await data.from_Orders();
            console.log("eights");
            const from_Customer_Contacts = await data.from_Customer_Contacts();
            console.log("ninth")
            const from_Employee_contacts = await data.from_Employee_contacts();
            console.log("tenth")
            const from_Customers = await data.from_Customers();
            console.log("eleventh")
            const from_location = await data.from_location();
            const from_Bookorders = await data.from_Bookorders();
            res.send({from_Author,from_location,from_AuthorsBooks,from_Bookorders,from_production_house_id,from_library,from_Employee,from_Bookorders,from_Books,from_Customer_Contacts,from_Customers,from_Employee_contacts,from_Orders });

      } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
      }
      
});
app.listen(port , () => {
      console.log(`server is running on port ${port}`);
});


