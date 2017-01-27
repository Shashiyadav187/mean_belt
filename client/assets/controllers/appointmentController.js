app.controller('appointmentController',['$scope','$location','userFactory','appointmentFactory',function($scope,$location,userFactory,appointmentFactory){

      $scope.addAppointment = function(appointment){
        $scope.appointment._creator = userFactory.GetUser()._id;
        appointmentFactory.Create(appointment,function(appointment){
            if (appointment.error){
                $scope.errors=appointment.error.errors
            }else{
                console.log("success")
                $location.url('/dashboard')
            }
        })
      }
    }]);
