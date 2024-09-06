const mysql = require('mysql');
require('dotenv').config()
const Connection = mysql.createConnection({
    host: process.env.HOST,
    user:process.env.USER ,
    database:process.env.DBNAME ,
    password:process.env.PASSWORD 
})

 Connection.connect()
console.log("database connection true")

module.exports= Connection

