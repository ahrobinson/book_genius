app.factory('Auth', function($window, jwtHelper){
  return {
    isAuth: function(){
      var token = $window.localStorage['bg-token'];
      if(token){
        return jwtHelper.isTokenExpired(token)
      }
    },
    logout: function(){
      $window.localStorage.removeItem('bg-token');
    },
    saveToken: function(token){
      $window.localStorage['bg-token'] = token;
    }
  }
})

.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('bg-token');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
