app.controller('AuthController', function($scope, $http){
  $scope.user = {}

  $scope.login = function(){
    $http.post('/api/users/login', $scope.user).then(function(resp){
      console.log(resp.data)
    })
  }

  $scope.register = function(){
    $http.post('/api/users/register', $scope.user).then(function(resp){
      console.log(resp.data)
    })
  }
})
