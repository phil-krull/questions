myApp.factory('questionsFactory', function($http){
  return {

    index: function(sendquestions) {
      $http.get('/questions').success(function(questions) {
        sendquestions(questions);
      })
    },

    create: function(question, getQuestions) {
      
      $http.post('questions', question).success(function() {
        console.log(question)
        getQuestions();
      })
    }



  }/*return methods*/
})