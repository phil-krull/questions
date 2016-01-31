myApp.factory('answersFactory', function($http){
  return {

    create: function(question, callback) {
        console.log(question)
      $http.patch('questions/' + question.questionId, question).success(function() {
        callback();
      })
    }


  }/*return methods*/
})