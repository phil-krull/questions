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

})