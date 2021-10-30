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
var sql = "INSERT INTO student (id, name, age, city) VALUES ?";   
var values = [
['3', 'rohan', '28', 'mumbai'],
['4', 'mohan', '29', 'delhi'],
['5', 'sohan', '30', 'chandigarh'],
['6', 'lucky', '10', 'banglore']
];
con.query(sql,[values], function (err, result) {  
if (err) throw err;  
console.log("Number of records inserted: " + result.affectedRows);  
});  
});  