myApp.factory('answersFactory', function($http){
  return {

    create: function(question, callback) {
      $http.patch('questions/' + question.questionId, question).success(function() {
        callback();
      })
    },

    show: function(questionId, showquestion) {
      $http.get('questions/' + questionId).success(function(question) {
        showquestion(question);
      })
    },

    update: function(answersId, showanswers) {
      $http.patch('answers/' + answersId).success(function(answer) {
        showanswers(answer);
      })
    }


  }/*return methods*/
})