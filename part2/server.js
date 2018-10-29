let express = require('express');
let app = express();
let fs = require("fs");
let path = require("path");
let port = process.env.PORT || 8000;
let outfile = path.join(__dirname+'/storage.json');
console.log(outfile);
let content = [];
// Challenge 1
app.post('/create/:name/:age',  (req, res) => {
  let person = {"name" : req.params.name,
                 "age" : parseInt(req.params.age) 
                 }
                 
  let f = fs.readFileSync(outfile, 'utf8');
  content.push(JSON.parse(f));  
  
  content.push(person);
  fs.writeFileSync(outfile, JSON.stringify(content));
  res.send('File write complete')
})

/// Challenge 2
app.get('/', function(req, res){
  let h = fs.readFileSync(outfile, 'utf8');
  let rcontent = JSON.parse(h);
  let result = rcontent.filter(item => item.i === req.params.i);
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
