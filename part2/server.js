let express = require('express');
let app = express();
let fs = require("fs");
//let path = require("path");
let port = process.env.PORT || 8000;

// Challenge 1
app.post('/create/:name/:age', function (req, res) {
  let person = {"name" : req.params.name,
                 "age" : parseInt(req.params.age) 
                 }
        
  let f = fs.readFileSync('./storage.json', 'utf8');
  let content = JSON.parse(f);
  content.push(person);
  console.log(content);
  fs.writeFileSync("/storage.json", JSON.stringify(content));
  res.send('File write complete')
})

// Challenge 2
app.get('/', function(req, res){
  let h = fs.readFileSynce('./storage.json', 'utf8');
  let content = JSON.parse(h);
  let result = content.filter(item => item.name === req.params.name)[0];
  if(result){
    res.json(result);
  }else{
    res.sendStatus(400);
  }
})



app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
