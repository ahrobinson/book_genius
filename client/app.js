var app = angular.module('bookGenius',[
  'ngRoute',
  'angular-jwt'
])

app.config(function($routeProvider, $locationProvider, $httpProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainController'
  })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $httpProvider.interceptors.push('AttachTokens');
})
