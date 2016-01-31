var mongoose = require('mongoose');
var answer = mongoose.model('answer');
var question = mongoose.model('question');

module.exports = {

  show: function(req, res) {
    question.findOne({_id: req.params.id}, function(errors, answer) {
      if(errors) {
        res.send(errors)
      } else {
        res.json(answer)
      }
    })
  },

  update: function(req, res) {
    answer.findOne({_id: req.params.id}, function(errors, answer) {
      answer.likes++;
      answer.save(function() {
        if(errors) {
          res.send(errors)
        } else {
          res.json(true)
        }
      })
    })
  }

}