app.controller('AuthController', function($scope, $http, $window, $location, Auth){
  $scope.user = {}

  $scope.login = function(){
    $http.post('/api/users/login', $scope.user).then(function(resp){
      console.log(resp.data)
      Auth.saveToken(resp.data.token)
      $location.path('/home')
    })
  }

  $scope.register = function(){
    $http.post('/api/users/register', $scope.user).then(function(resp){
      console.log(resp.data)
      Auth.saveToken(resp.data.token)
      $location.path('/home')
    })
  }

  $scope.logout = function(){
    Auth.logout();
    $location.path('/signin')
  }
})
