
'use strict';

angular.
  module('meatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: 'oi'
        }).
        when('/home/:homeId', {
          template: 'Oi com id'
        }).
        otherwise('/home');
    }
  ]);