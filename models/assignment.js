var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
  name: String,
  student_name: {type: String, required: true},
  assignment_number: {type: Number, required: true},
  score: {type: Number, required: true},
  date_completed: {type: Date, required: true}
})

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
