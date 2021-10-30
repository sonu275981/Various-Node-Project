var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("how r u");
});

app.get('/a', (req, res) => {
    res.send("again you r here");
});
app.get('/b', (req, res) => {
    res.send("Hiiii here");
});
app.get('/c', (req, res) => {
    res.send("i'm here in panipat");
});
app.get('/d', (req, res) => {
    res.send("today is tcs paper");
});


app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});