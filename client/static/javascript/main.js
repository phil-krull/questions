var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'questionsController',
      controllerAs: 'questionsCtrl'
    })
    .when('/questions', {
      templateUrl: 'partials/questions.html',
      controller: 'questionsController',
      controllerAs: 'questionsCtrl'
    })
    .when('/addquestion', {
      templateUrl: 'partials/addquestion.html',
      controller: 'questionsController',
      controllerAs: 'questionsCtrl'
    })
    .when('/showanswers/:questionId', {
      templateUrl: 'partials/showanswers.html',
      controller: 'answersController',
      controllerAs: 'answersCtrl'
    })
    .when('/answerquestions/:questionId', {
      templateUrl: 'partials/answerquestion.html',
      controller: 'answersController',
      controllerAs: 'answersCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
  })


// /:questionId

