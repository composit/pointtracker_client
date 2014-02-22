'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/trackers.html', controller: 'TrackerCtrl'});
   $routeProvider.when('/new-tracker', {templateUrl: 'partials/new-tracker.html', controller: 'TrackerCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
