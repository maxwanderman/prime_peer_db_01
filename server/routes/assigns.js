var express = require('express');
var router = express.Router();
var path = require('path');
var Assignment = require('../../models/assignment');
var bodyParser = require('body-parser');

router.post('/', function(request, response, next){
  var input = request.body;
  var newAssign = new Assignment({name: input.student_name}, {assignment_number: input.assignment_number}, {score: input.score}, {date_completed:input.date_completed});
  newAssign.save(function(err){
    if(err) console.log('invalid entry', err);
    response.send(newAssign.toJSON());
    next();
  });
});

router.get('/', function(request, response){
  Assignment.find({}, function(err, assignments){
    if(err){
      console.log(err);
    } else {
      response.send(assignments);
    }
  });
});


module.exports = router;
