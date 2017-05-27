var app = angular.module('questionaireApp', ['ngRoute','ngMaterial']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    controller: 'loginController',
    templateUrl: 'views/login.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});


 

    

