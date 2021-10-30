var  express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("welcome to javaTpoint sonu");
});

var server = app.listen(8000, () => {
    console.log(`Server started on port 8000`);
});

