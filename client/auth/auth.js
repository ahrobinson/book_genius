app.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'AuthController'
  })
  .when('/register', {
    templateUrl: 'signup.html',
    controller: 'AuthController'
  })
})
