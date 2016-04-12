var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
  name: String,
  student_name: {type: String, required: true},
  assignment_number: {type: Number, required: false},
  score: {type: Number, required: false},
  date_completed: {type: Date, required: true}
})

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
