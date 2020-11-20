const express = require('express')
const expressHbs = require('express-handlebars')
const hbs = require('hbs')
const app = express()
const socket = require("socket.io")()
var mysql = require('mysql')


var con = mysql.createConnection({
  host: "localhost",
  user: "Admin",
  password: "tmk44d88",
  database:"derby38"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});


hbs.registerPartials(__dirname + "/views/partials")

hbs.registerHelper('getTime', function() {
  var myDate = new Date()
  var hour = myDate.getHours()
  var minute = myDate.getMinutes()
  var second = myDate.getSeconds()
  if (minute < 10) {
    minute = '0' + minute
  }
  if (second < 10) {
    second = '0' + second
  }
  return 'время входа на сайт: ' + hour + ':' + minute + ':' + second
})

let a = hbs.registerHelper('test',function(){
  var t = "Привет"
  return  new hbs.SafeString("<ul>" + t+ "</ul>")
})

app.set('view engine', 'hbs')


app.engine("hbs", expressHbs({
  layoutsDir: 'views/layouts',
  defaultLayout: 'layout',
  extname: 'hbs'
}))

app.use(express.static('public'))

socket.on('addNewPlayer', function (data){console.log(data)})




app.use('/table', function(request, response) {
  response.render('table.hbs')
})

app.use('/', function(request, response) {
  response.render('home.hbs', {title: "Главная"
})
})



app.listen(2000);
console.log("Server started.");