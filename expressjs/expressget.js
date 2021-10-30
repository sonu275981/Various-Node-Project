var express = require('express');
var app = express();

var path = require("path");


app.get('/', (req, res) => {
   res.sendfile(path.join(__dirname,"index.html"));
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});