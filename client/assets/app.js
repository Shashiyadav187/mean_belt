var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl:"/partials/login.html"
  })
  .when('/dashboard',{
    templateUrl:"/partials/dashboard.html"
  })
  .when('/appointment',{
    templateUrl:"/partials/appointment.html"
  })
  .otherwise({redirectTo:'/'})
});
