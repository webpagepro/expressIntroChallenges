var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var path = require('path');
/*
// ONE
app.get('/hello', function(req, res) {
  res.send("Hello!");
});

app.use(function(req, res) {
  res.sendStatus(404);
});

// TWO
app.get('/create/:name', function(req, res) {
  let obj = { "id":1, "name":req.params.name };
  console.log(obj)
  let prnt =  res.json(obj);
  app.post('/')
    res.send(prnt);
});

// THREE
let file = 'C:\server\www\galvanize\js\Q2\expressIntroChallenges/part1/';
app.get('/', function(req, res) {
  console.log(path.resolve('index.html'));
  res.sendFile(path.join(__dirname+'/index.html'))
});
*/
// FOUR
app.get('/verify/:age', function(req, res) {
  let age = req.params.age;
  if(age > 13){
    res.sendStatus(403);
  }else{
    res.sendStatus(200);
  }
  console.log(age)
 
  //app.post('/')
   // res.send();
//  res.send(res.status());
});


  app.use(function(req, res) {
    res.sendStatus(404);
  });

  app.listen(port, function() {
  console.log('Listening on port', port);
});

