'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.uploadParseModule'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('mainCtrl', function (mainSrv) {
  this.hello = 'world';
  var vm = this;
  this.fruit = ['apple', 'orange', 'grapes'];
});

app.filter('makePlural', function () {
  return function (input) {
    return input + 's';
  };
});

app.service('mainSrv', function ($http) {
  this.getPosts = function () {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  };

});