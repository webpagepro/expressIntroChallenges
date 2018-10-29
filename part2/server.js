let express = require('express');
let app = express();
let fs = require("fs");
let path = require("path");
let port = process.env.PORT || 8000;
let outfile = path.join(__dirname+'/storage.json');
console.log(outfile);
let content = []; let arr = [];

// Challenge 1
app.post('/create/:name/:age',  (req, res) => {
  let person = {"name" : req.params.name,
                 "age" : parseInt(req.params.age) 
                 }
                 
                 content.push(person);  
                 console.log(content);     
                  let f = fs.readFileSync(outfile, 'utf8');
                
                 fs.writeFileSync(outfile, JSON.stringify(content));
                 res.send('File write complete')
               })

// Challenge 2
app.get('/', function (req, res) {
  let h = fs.readFileSync(outfile, 'utf8');
   content.push(JSON.parse(h));
  
})

// Challenge 3
app.get('/:name', function (req, res) {
let person = {"name" : req.params.name,
                 "age" : parseInt(req.params.age) 
                 }
let raw = fs.readFileSync(outfile, 'utf8');
//console.log(raw)
let val = JSON.parse(raw);
let result = val.filter(item => item.name === req.params.name)[0];
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
