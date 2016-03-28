var mongoose = require('mongoose');
var Question = require('./../controllers/questions.js');
var Answer = require('./../controllers/answers.js');

module.exports = function(app) {

  app.get('/questions', function(req, res) {
    Question.index(req, res);
  })

  app.post('/questions', function(req, res) {
    Question.create(req, res);
  })

  app.get('/questions/:id', function(req, res) {
    Answer.show(req, res);
  })

  app.patch('/questions/:id', function(req, res) {
    Question.update(req, res);
  })

  app.patch('/answers/:id', function(req, res) {
    Answer.update(req, res);
  })

  // app.get('/answers/:id', function(req, res) {
  //   Answer.show(req, res);
  // })

}