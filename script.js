      console.log("script opend");
      async function fetchData(){
            console.log("start fetching");
      try {
            const response = await fetch('http://localhost:3000/');
            data = await response.json();

            console.log("start library");
            var tableBody = document.getElementById("libraryTable");
            data.from_library.forEach(function (obj) {
                  var row = document.createElement("tr"); // create new table raw
                  var idCell = document.createElement("td"); // create new table cell 
                  idCell.textContent = obj.lib_ID;
                  row.appendChild(idCell);
                  var libNameCell = document.createElement("td");
                  libNameCell.textContent = obj.lib_name;
                  row.appendChild(libNameCell); 
                  tableBody.appendChild(row);
            });
            
            console.log("emolyee started");
            tableBody = document.getElementById("employeeTable");
            data.from_Employee.forEach(function (obj) {
              var row = document.createElement("tr");
            
              var empIdCell = document.createElement("td");
              empIdCell.textContent = obj.EmpID;
              row.appendChild(empIdCell);
            
              var libIdCell = document.createElement("td");
              libIdCell.textContent = obj.lib_ID;
              row.appendChild(libIdCell);
            
              var nameCell = document.createElement("td");
              nameCell.textContent = obj.Name;
              row.appendChild(nameCell);
            
              var salaryCell = document.createElement("td");
              salaryCell.textContent = obj.salary;
              row.appendChild(salaryCell);
            
              tableBody.appendChild(row);
            });            



            console.log("emolyee contact start");           
            tableBody = document.getElementById("employeeContactsTable");
            data.from_Employee_contacts.forEach(function (obj) {
                  
                  var row = document.createElement("tr");
                  var empConCell = document.createElement("td");
                  empConCell.textContent = obj.Emp_Con;
                  row.appendChild(empConCell);
            
                  var empIdCell = document.createElement("td");
                  empIdCell.textContent = obj.EmpID;
                  row.appendChild(empIdCell);
            
                  var emailIdCell = document.createElement("td");
                  emailIdCell.textContent = obj.email;
                  row.appendChild(emailIdCell);

                  var phoneCell = document.createElement("td");
                  phoneCell.textContent = obj.phone_number;
                  row.appendChild(phoneCell);
                  tableBody.appendChild(row);
            });
            
            
            tableBody = document.getElementById("customerTable");
            data.from_Customers.forEach(function (obj) {      
                  var row = document.createElement("tr");
                  var cusIdCell = document.createElement("td");
                  cusIdCell.textContent = obj.CusID;
                  row.appendChild(cusIdCell);
            
                  var libIdCelll = document.createElement("td");
                  libIdCelll.textContent = obj.lib_ID;
                  row.appendChild(libIdCelll);
            
                  var nameCelll = document.createElement("td");
                  nameCelll.textContent = obj.Name;
                  row.appendChild(nameCelll);
                  
                  tableBody.appendChild(row);
            });
                       
            tableBody = document.getElementById("CustomerContactsTable");
            data.from_Customer_Contacts.forEach(function (obj) {      
                  var row = document.createElement("tr");
                  var cusConCell = document.createElement("td");
                  cusConCell.textContent = obj.Cus_con;
                  row.appendChild(cusConCell);
                  
                  var cusIdCell = document.createElement("td");
                  cusIdCell.textContent = obj.CusID;
                  row.appendChild(cusIdCell);
            
                  var emailIdCell = document.createElement("td");
                  emailIdCell.textContent = obj.email;
                  row.appendChild(emailIdCell);
            
                  var phoneCell = document.createElement("td");
                  phoneCell.textContent = obj.phone_number;
                  row.appendChild(phoneCell);
            
                  tableBody.appendChild(row);
            });
                       
            tableBody = document.getElementById("OrdersTable");
            data.from_Orders.forEach(function (obj) {      
                  var row = document.createElement("tr");
                  var orderIdCell = document.createElement("td");
                  orderIdCell.textContent = obj.OrderID;
                  row.appendChild(orderIdCell);
                  
                  var cusIdCell = document.createElement("td");
                  cusIdCell.textContent = obj.CusID;
                  row.appendChild(cusIdCell);
            
                  var dateCell = document.createElement("td");
                  dateCell.textContent = obj.Date;
                  row.appendChild(dateCell);
                  
                  tableBody.appendChild(row);
            });
                
            tableBody = document.getElementById("BooksTable");
            data.from_Books.forEach(function (obj) {      
                  var row = document.createElement("tr");
                  var bookIdcell = document.createElement("td");
                  bookIdcell.textContent = obj.BookID;
                  row.appendChild(bookIdcell);
                  
                  var prodHouseCell = document.createElement("td");
                  prodHouseCell.textContent = obj.prod_house_ID;
                  row.appendChild(prodHouseCell);
            
                  var nameCell = document.createElement("td");
                  nameCell.textContent = obj.Name;
                  row.appendChild(nameCell);
            
                  var quantityCell = document.createElement("td");
                  quantityCell.textContent = obj.Quantity;
                  row.appendChild(quantityCell);
                  
                  var categoryCell = document.createElement("td");
                  categoryCell.textContent = obj.category;
                  row.appendChild(categoryCell);
            
                  var priceCell = document.createElement("td");
                  priceCell.textContent = obj.price;
                  row.appendChild(priceCell);
                  
                  tableBody.appendChild(row);
            });
            
            console.log("start location table");           
            tableBody = document.getElementById("locationTable");
            data.from_location.forEach(function (obj) {
                  var row = document.createElement("tr");
                
                  var locIdCell = document.createElement("td");
                  locIdCell.textContent = obj.locID;
                  row.appendChild(locIdCell);
                
                  var libIdCell = document.createElement("td");
                  libIdCell.textContent = obj.lib_ID;
                  row.appendChild(libIdCell);
                
                  var prodHouseCell = document.createElement("td");
                  prodHouseCell.textContent = obj.prod_house_ID;
                  row.appendChild(prodHouseCell);
                
                  var nameCell = document.createElement("td");
                  nameCell.textContent = obj.Name;
                  row.appendChild(nameCell);
                
                  tableBody.appendChild(row);
                });                
                console.log("end location table")
                       
            tableBody = document.getElementById("authorTable");
            data.from_Author.forEach(function (obj) {      
                  var row = document.createElement("tr");
                  var authorIdCell = document.createElement("td");
                  authorIdCell.textContent = obj.authorID;
                  row.appendChild(authorIdCell);
     
                  var nameCell = document.createElement("td");
                  nameCell.textContent = obj.Name;
                  row.appendChild(nameCell);
            
                  tableBody.appendChild(row);
            });
            

            tableBody = document.getElementById("authorBoksTable");
            data.from_AuthorsBooks.forEach(function (obj) {      
                  var row = document.createElement("tr");
                  var authorIdCell = document.createElement("td");
                  authorIdCell.textContent = obj.authorID;
                  row.appendChild(authorIdCell);
            
                  var bookIdcell = document.createElement("td");
                  bookIdcell.textContent = obj.BookID;
                  row.appendChild(bookIdcell);
            
                  tableBody.appendChild(row);
            });
                     
            tableBody = document.getElementById("bookOrders");
            data.from_AuthorsBooks.forEach(function (obj) {      
                  var row = document.createElement("tr");
                  var orderIdCell = document.createElement("td");
                  orderIdCell.textContent = obj.OrderID;
                  console.log(obj.OrderID);
                  row.appendChild(orderIdCell);
            
                  var bookIdcell = document.createElement("td");
                  bookIdcell.textContent = obj.BookID;
                  row.appendChild(bookIdcell);
            
                  tableBody.appendChild(row);
            });
                console.log("start prodHouseCell");      
            tableBody = document.getElementById("productionHouse");
            data.from_production_house_id.forEach(function (obj) {      
                  var row = document.createElement("tr");
                  var prodHouseCell = document.createElement("td");
                  prodHouseCell.textContent = obj.prod_house_ID;
                  row.appendChild(prodHouseCell);
            
                  var nameCell = document.createElement("td");
                  nameCell.textContent = obj.Name;
                  row.appendChild(nameCell);
                  
                  tableBody.appendChild(row);
            });
            console.log("end prodHouseCell");
      } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
      }
      }
      window.onload = fetchData;