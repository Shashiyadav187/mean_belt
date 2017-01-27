app.factory('userFactory',['$http',function($http){
        var factory = {};
        factory.Create = function(user,callback){
          $http.post('/user',user).then(function(returned_data){
            var user = returned_data.data;
            factory.user = user
            callback(user)
          })
        };

        factory.GetUser = function(){
          return (factory.user);
        };

        factory.FindUserByName = function(user,callback){
          $http.post('/FindUserByName',user).then(function(returned_data){
            factory.user = returned_data.data
            callback(returned_data.data)
          })
        };
        factory.FindUserByID = function(user,callback){
          $http.post('/FindUserByID',user).then(function(returned_data){
            factory.userfound = returned_data.data
            callback(returned_data.data)
          })
        };
        factory.index = function(callback){
            $http.get('/users').then(function(returned_data){
              users = returned_data.data;
              callback(users);
            });
        }
        return factory;
    }]);
