var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var answerSchema = new mongoose.Schema({
  username: String,
  answer: String,
  likes: Number
})

answerSchema.plugin(timestamps);

mongoose.model('answer', answerSchema);