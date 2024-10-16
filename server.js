//importing the neccesaring dependencies
 const express = require('express');
 const mysql =require('mysql2')
 const dotenv = require('dotenv')


 const app = express();
dotenv.config() 

// create a connection object
const db = mysql.createConnection({
  host: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password:process.env.DB_PASSSWORD,
  database: process.env.DB_NAME
})

// testing connection
db.connetion((err) =>{
 
// connection not successfull
if(err){
    return console.log("Error connecting to MySQL" ,err)
}
 
// connection succesfull
console.log("My SQL connection succefull")
}) 

// ejs templating configuration
//ejs for the assignment
 
// get patients

app.get('/get patients', (req,res) =>{
   const getpatients ="SELECT * FROM patients"
   db.query(

   )
})




 // declare the port 
 const PORT = 3000
// listen to the server
 app.listen(PORT, () => {
   console.log(`server is runnig on http://localhost:${PORT}`)
 })