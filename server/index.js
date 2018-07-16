const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const toDoQuery = require('./helpers.js').toDoQuery;
const addTask = require('./helpers.js').addTask;
const deleteTask = require('./helpers.js').deleteTask;

app.use(bodyParser.json())

//console.log('THE DIRNAME IS: ', __dirname)

app.use(express.static(path.join(__dirname, '/../dist')))


// app.get('/', function(req, res){ //IF THIS IS ABOVE THE STATIC, IT WON'T PRINT STATIC TO DOM
//   res.send('Hello World!')
// })

app.get('/todos', function(req, res){
  toDoQuery(req, res);
})

app.post('/todos', function(req, res){
  addTask(req, res);
})

app.delete('/todos', function(req, res){
  deleteTask(req, res);
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
