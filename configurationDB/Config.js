const mysql = require("mysql2")
const connection = mysql.createConnection({
    host : "localhost",
    user : "root" ,
    password : "kkmaplee203233780",
    database : "todolist"
});

connection.connect((err) => err? console.log(err) : console.log("DB IS ALIVE"));

module.exports = {connection}