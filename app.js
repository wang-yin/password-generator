const express = require('express')
const  routes  = require('./routes/password_generator.routers.js')
const app = express()
const port = 3000

app.use('/', routes)

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})