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
var sql = "UPDATE student SET city = 'kernal' WHERE city = 'banglore'";  

con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("Number of records update: " + result.affectedRows);  
});  
});  