var mongoose = require('mongoose');
var question = mongoose.model('question');
var answer = mongoose.model('answer');

module.exports = {

  index: function(req, res) {
    question.find({}, function(errors, questions) {
      if(errors) {
        res.send(errors)
      } else {
        res.json(questions)
      }
    })
  },

  create: function(req, res) {
    var new_question = new question(req.body);
    new_question.save(function(errors) {
      if(errors) {
        res.send(erros)
      } else {
        res.json(true)
      }
    })
  },

  update: function(req, res) {
    var new_answer = new answer(req.body);
      new_answer.save(function(errors, answer) {
        console.log(answer, 'added answer')
    question.findOne({_id: req.params.id}, function(errors, question) {
      question.answers.push(answer._id);
      question.save()
      console.log(question, 'updated question with answer')
        if(errors) {
          res.send(errors)
        } else {
          res.json(true)
        }
      })
    })
  }

}