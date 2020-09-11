const express = require('express')
const expressHbs = require('express-handlebars')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + "/views/partials")

app.engine("hbs", expressHbs({
  layoutsDir: 'views/layouts',
  defaultLayout: 'layout',
  extname: 'hbs'
})
)

hbs.registerHelper ("css", function(){
  let ar = "Привет"
  return "Скажу тебе" + ar})


app.use('/', function(request, response) {
  response.render('home.hbs')
})


app.listen(2000);
console.log("Server started.");