app.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'auth/login.html',
    controller: 'AuthController'
  })
  .when('/register', {
    templateUrl: 'auth/signup.html',
    controller: 'AuthController'
  })
})
