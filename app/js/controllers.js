'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('TrackerCtrl', ['$scope', function($scope) {
    $scope.trackers = [ 
      { name: 'Tracker1', eventCount: 0 },
      { name: 'Tracker2', eventCount: 0 },
      { name: 'Tracker3', eventCount: 0 }
        ]
    $scope.addEvent = function( tracker ) { tracker.eventCount++
    }

  }])
