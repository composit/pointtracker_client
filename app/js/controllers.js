'use strict';

/* Controllers */
 

angular.module('myApp.controllers', []).
  controller('TrackerCtrl', ['$scope', '$http', '$location', 'Tracker', function($scope, $http, $location, Tracker) {
          
        
          
$scope.trackers = Tracker;

          
    $scope.addEvent = function( tracker ) { tracker.eventTimes.push( new Date() );
        //TODO send time info to server
    };
    
    $scope.addTracker = function() { 
        $scope.trackers.push({ name: $scope.newTrackerName, eventTimes: [] });
        $location.path("/");
        //TODO send new tracker info to server
    };
    
    $scope.removeEvent = function( tracker ) { 
        var index = $scope.trackers.indexOf(tracker);
        
        $scope.trackers.splice(index, 1); };

  }])  //end TrackerCtrl
  
  
          .controller('GraphCtrl', ['$scope', 'Tracker', function($scope, Tracker) {
             $scope.trackers = Tracker;
             $scope.graphTrackers = {};
          
              $scope.createGraph = function() { };
          
          
            }]);  //end GraphCtrl
