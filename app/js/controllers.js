'use strict';

/* Controllers */
 

angular.module('myApp.controllers', []).
  controller('TrackerCtrl', ['$scope', '$http', '$location', 'Tracker','Dialog', function($scope, $http, $location, Tracker, Dialog) {
          
        
          
$scope.trackers = Tracker;
$scope.showIt = false;

          
    $scope.addEvent = function( tracker ) { tracker.eventTimes.push( new Date() );
        //TODO send time info to server
        $scope.dialog = Dialog;
        $scope.dialog.state = true;
        $scope.dialog.message = 'Tracked!';
    };
    
    $scope.addTracker = function() { 
        $scope.trackers.push({ name: $scope.newTrackerName, eventTimes: [] });
        $scope.newTrackerName = "";
        $scope.showIt = false;
        
       
        //TODO send new tracker info to server
    };
    
    $scope.closeAddTrackerBox = function() {
      $scope.showIt = false; 
      $scope.newTrackerName = "";
        
    };
    
    $scope.removeTracker = function( tracker ) { 
        var index = $scope.trackers.indexOf(tracker);
        
        $scope.trackers.splice(index, 1); };
    
    $scope.removeLastEvent = function( tracker ) {
        var index = $scope.trackers.indexOf(tracker);
        $scope.trackers[index].eventTimes.pop();
    };
    
    
    $scope.toggletrackerdialog = function(tracker) {
        tracker.trackerdialog = !tracker.trackerdialog;
        
        
    };
    
    

  }])  //end TrackerCtrl
            .controller('DialogCtrl', ['$scope', 'Tracker', 'Dialog','$timeout', function($scope, Tracker, Dialog, $timeout) {
        $scope.dialog = Dialog;

        $scope.$watch('dialog.state', function() { console.log($scope.dialog.state); $timeout(function(){ $scope.dialog.state = false; }, 2000);     } )

          
          
            }])
  
  
          .controller('GraphCtrl', ['$scope', 'Tracker', function($scope, Tracker) {
             $scope.trackers = Tracker;
             $scope.graphTrackers = {};
          
              $scope.createGraph = function() { };
          
          
            }]);  //end GraphCtrl
