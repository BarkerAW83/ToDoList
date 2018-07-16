var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected, homie')
});

var toDoSchema = mongoose.Schema({
  task: { 
  type: String,
  unique: true
  }
});

var ToDo = mongoose.model('ToDo', toDoSchema);

module.exports.db = db;
module.exports.ToDo = ToDo;