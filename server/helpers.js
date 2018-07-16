const db = require('../database/index.js').db
const ToDo = require('../database/index.js').ToDo;

db;

var addTask = function(req, res){

  ToDo.create({task: req.body.task})         
    .then(function(data){
      console.log(data, ': WAS SUCCESSFULLY SAVED') 
    })
    .catch(function(error){
      console.log(error);
    })
}

var toDoQuery = function(req, res){

  ToDo.find({})
  .then(function(data){
    res.status(200).send(data)
  })
  .catch(function(error){
    res.status(500).send(error)
  })
}

var deleteTask = function(req, res){
  ToDo.findByIdAndRemove({_id: req.query._id}) //USED TO BE HARDWIRED
  //console.log(req.query._id)
  .then(function(data){
    console.log(data, ': WAS SUCCESSFULLY DELETED') 
    res.status(200).send(data)
  })
  .catch(function(error){
    res.status(500).send(error)
  })
}

// ToDo.create({task: 'Eat Lunch'})               
//   .then(function(test){
//     console.log(test, ': WAS SUCCESSFULLY SAVED') 
//   })
//   .catch(function(error){
//     console.log(error);
//   })

//var test = new ToDo({task: 'eat lunch'});         //SAVING RECORDS WITH VARIABLES, AND .SAVE

// test.save(function(err, test){                   //CALLBACKS
//   if (err){
//     return console.error(err)
//   }
//   else{
//     console.log(test, ': WAS SUCCESSFULLY SAVED')
//   }
// })

// ToDo.create({task: 'Eat Lunch'})                 //SAVING RECORDS WITH .CREATE
//   .then(function(test){
//     console.log(test, ': WAS SUCCESSFULLY SAVED') //PROMISES
//   })
//   .catch(function(error){
//     console.log(error);
//   })

module.exports.toDoQuery = toDoQuery;
module.exports.addTask = addTask;
module.exports.deleteTask = deleteTask;





