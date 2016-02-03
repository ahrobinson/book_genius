app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainController'
  })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
