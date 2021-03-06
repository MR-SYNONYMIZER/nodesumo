'use strict';

// Declare app level module which depends on filters, and services

angular.module('sumoApp', [
  'sumoApp.controllers',
  'sumoApp.filters',
  'sumoApp.services',
  'sumoApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/add', {
      templateUrl: 'partials/add_synonym',
      controller: 'addSynonymController'
    }).
      when('/add/synonym', {
          templateUrl: 'partials/add_synonym',
          controller: 'addSynonymController'
      }).
      when('/add/stopword', {
          templateUrl: 'partials/add_stopword',
          controller: 'addStopwordController'
      }).
    when('/manage', {
      templateUrl: 'partials/manage',
      controller: 'managementController'
    }).
      when('/export', {
          templateUrl: '/partials/export',
          controller: 'exportController'
      }).
    otherwise({
      templateUrl: '/partials/home',
      controller: 'indexController'
    });

  $locationProvider.html5Mode(true);
});
