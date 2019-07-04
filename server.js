var express = require('express');
var path =  require('path');

var app = express();

app.use(express.static(__dirname + '/dist/TwitterPro/'));

app.listen(process.env.PORT || 3000 ,() => console.log("Express Server listening."));

app.get('/*' , (req , res) => {
    res.sendFile(path.join(__dirname + '/dist/TwitterPro/index.html'));
});