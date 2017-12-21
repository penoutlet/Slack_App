var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, function(){
  console.log('App up and running.')
})
