const express = require('express')
const expressHbs = require('express-handlebars')
const hbs = require('hbs')
const app = express()


hbs.registerPartials(__dirname + "/views/partials")

app.engine("hbs", expressHbs({
  layoutsDir: 'views/layouts',
  defaultLayout: 'layout',
  extname: 'hbs'
})
)

hbs.registerHelper('createStringList', function() {
  var result = 'Привет'

  return new hbs.SafeString('Скажу тебе' + result )
})

app.set('view engine', 'hbs')

app.use('/', function(request, response) {
  response.render('home.hbs')
})


app.listen(2000);
console.log("Server started.");