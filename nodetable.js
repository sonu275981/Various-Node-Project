var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",  
database: "nodeapp"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql = "CREATE TABLE student (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";  

con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Table created");  
});  
});  