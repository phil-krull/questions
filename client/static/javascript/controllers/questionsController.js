myApp.controller('questionsController', function(questionsFactory, $cookies, $location) {
  var _this = this;

  function getQuestions() {
    questionsFactory.index(function(questions) {
      _this.questions = questions;
    })
  }
  getQuestions();

  this.addUser = function() {
    $cookies.put('username', this.newUser.name);
    $location.path('/questions');
  }

  this.addQuestion = function(question) {
    console.log(question);
    questionsFactory.create(question, function() {
      getQuestions();
    })
      this.newQuestion = {};
  }

})