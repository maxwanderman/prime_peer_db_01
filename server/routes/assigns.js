var express = require('express');
var Assignment = require('../../models/assignment');
var bodyParser = require('body-parser');
var router = express.Router();

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

router.get('/thing/:id', function(request, response){
  console.log(request.params.id);
    //If an ID has been passed in, find that single 'Thing'
    if(request.params.id){
      Thing.findById(request.params.id, function(err, user){
        if(err){
          console.log(err);
        } else {
        //Return single user
          response.send(user);
        }
    });
  } else { //Else if no ID has been passed in, return everything
    Thing.find({}, function(err, users){
      if(err){
        console.log(err);
      } else {
        response.send(users);
      }
    });
  }
});


module.exports = router;

