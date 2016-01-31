var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
  name: String,
  answers: [{type: Schema.Types.ObjectId, ref: 'answer'}]
})

questionSchema.plugin(timestamps);

mongoose.model('question', questionSchema);