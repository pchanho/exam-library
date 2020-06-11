const express = require('express');
// bodyParser for addNewAuthor
// Parsing = 가지고 있는 데이터를 내가 원하는 형태의 데이터로 '가공'
// 그 과정을 수행하는 모듈 = parser
// Extract the entire body portion of an incoming request stream
// and exposes it on req.body.
const bodyParser = require("body-parser");

const app = express();
const authorRouter = require('./routes/authorRouter');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get home page
app.get('/', function(req, res){
    res.send('<h1>Library System</h1>')
});

// Handle author-management requests
app.use('/author-management', authorRouter);

app.listen(3000, function(){
    console.log('The library app is listening on port 3000!')
});