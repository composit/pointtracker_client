'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [ 'ngResource']).
           factory( 'Dialog', ['$timeout',
   function($timeout) { return {};

   }]).
   factory( 'Tracker', ['$resource',
   function($resource) {
       var trackers;
       if ( ! angular.isDefined(trackers)) {
       
     var trackerResource = $resource('/pointtracker_client/app/trackers.json', {}, {
   //        query: { method: 'GET', params: {}, isArray: true }
         });
         trackers = trackerResource.query();
     }
    return trackers; 
   }]);
