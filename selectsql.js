var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",  
database: "nodeapp"  
});  
con.connect(function(err) {  
if (err) throw err;  
con.query("SELECT * FROM student", function (err, result) {  
if (err) throw err;  
console.log(result);  
});  
});  