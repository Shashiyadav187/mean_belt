app.controller('dashboardController',['$scope','userFactory','appointmentFactory',function($scope,userFactory,appointmentFactory){
  $scope.current_user = userFactory.GetUser();
  var appointment_index = function(){
    appointmentFactory.index(function(appointments){
      $scope.appointments = appointments
    })
  };
  appointment_index();
  $scope.Delete = function(appointment){
    appointmentFactory.Delete(appointment,function(result){
      appointment_index();
    })
  }
}])
