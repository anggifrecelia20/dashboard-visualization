'use strict';

angular.module('app', [
  'ui.router',
  'ngCookies',
  'ngSanitize',
  'ui.select',
  'angular.filter',
  'ngLodash',
  'angularify.semantic',
  'angularMoment',
  'ngConfirm',
  'ui.utils.masks',
  'ngFileSaver',
])

.constant('APP', {
  BASE_URL: 'http://localhost:3000',
  API_VERSION: 'v1',
  NAME: 'Advotics Dashboard',
  VERSION: '0.0.1',
})

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    $urlRouterProvider.when('', '/dashboard');
    $locationProvider.hashPrefix('');
  }]);
