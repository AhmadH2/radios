const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/Radio'));

app.all('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Radio/index.html'));
});

const port = process.env.PORT
app.listen(port || 8080);