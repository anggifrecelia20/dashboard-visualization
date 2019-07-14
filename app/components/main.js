'use strict';

angular.module('app')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('app', {
    url: '',
    abstract: true,
    templateUrl: 'components/main.html',
    controller: 'MainCtrl',
  });
}])

.controller('MainCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope) {
    $rootScope.activeMenu = function (path) {
      return ($location.path().substr(0, path.length) === path) ? 'active grey' : '';
    };
  }]);
