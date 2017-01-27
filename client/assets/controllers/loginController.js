app.controller('loginController',['$scope','$location','userFactory',function($scope,$location,userFactory){

      $scope.login = function(user){
        userFactory.FindUserByName(user,function(result){
          if (result == null){
            // if user is not found then we create the user
            userFactory.Create(user,function(result1){
              $location.url('/dashboard')
            })
          }else{
            $location.url('/dashboard')
          }
        })
      }
    }]);
