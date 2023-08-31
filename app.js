const express = require('express')
const app = express()
const port = 8080
// Static content server
app.use( express.static('public') );


app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
} )
app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
} )
app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
} )
app.listen( port , ()=>{
  console.log(`App runing in ${port} port`)
} )