myApp.controller('answersController', function(answersFactory, $routeParams, $cookies, $location) {
  var _this = this;

  this.username = $cookies.get('username');

  this.addAnswer = function(answer) {
    answer.questionId = $routeParams.questionId;
    answer.username = this.username;
    answer.likes = 0;
    answersFactory.create(answer, function() {
      $location.path('/questions')
    })
      this.newAnswer = {};
  }

  function showQuestion() {
    answersFactory.show($routeParams.questionId, function(question) {
      _this.question = question;
    })
  }

  this.addLike = function (answerId) {
    answersFactory.update(answerId, function(answer) {
      showQuestion();
    })
  }

  showQuestion();

})