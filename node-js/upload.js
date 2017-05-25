// fail
var express = require('express')
var multer = require('multer')
var app = express()
app.use(multer(), (req, res) => {
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/upload', function (req, res) {
  console.log(req)
  console.log('/////////////////////////////////////////////////')
  // console.log(res)
  res.send(req.files)
})
app.listen(5555, () => {
  console.log('App running')
})
