app.factory('appointmentFactory',['$http',function($http){
        var factory = {};
        factory.index = function(callback){
          $http.get('/appointments').then(function(returned_data){
            callback(returned_data.data);
          })
      };
        factory.Create = function(appointment,callback){
          $http.post('/appointment',appointment).then(function(returned_data){
            console.log(returned_data.data)
            callback(returned_data.data)
          })
        };
        factory.Delete = function(appointment,callback){
            $http.post('/DeleteAppointment',appointment).then(function(returned_data){
                callback(returned_data.data)
            })
        }
        return factory;
    }]);
