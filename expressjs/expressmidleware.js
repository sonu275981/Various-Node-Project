var express = require('express');
var app = express();

app.use('/', (req, res,next) => {
   res.send("hello riya");
  console.log(`this is 1st next`);
    next();
});

app.get('/', (req, res) => {
   res.send("hello sonu");
  console.log(`this is 2nd function`);
});

app.listen(3000, function()  {
    console.log(`Server started on port 3000`);
});