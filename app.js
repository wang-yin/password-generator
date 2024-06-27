const express = require('express')
const { engine } = require('express-handlebars')
const  routes  = require('./routes/password_generator.routers.js')
const app = express()
const port = 3000

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))

app.use('/', routes)

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})