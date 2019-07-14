'use strict';

angular.module('app')

.factory('UserService',
  ['$http', '$cookies', '$rootScope', 'APP', '$q',
  function($http, $cookies, $rootScope, APP, $q) {
    var service = {};

    service.get = function(params, onSuccess, onError) {
      var url = APP.BASE_URL + '/users';
      $http.get(url, {paramSerializer: '$httpParamSerializerJQLike', params: params}).then(onSuccess, onError);
    };

    service.show = function(id, onSuccess, onError) {
      var url = APP.BASE_URL + '/users/' + id;
      $http.get(url).then(onSuccess, onError);
    };

    service.create = function(data, onSuccess, onError) {
      var url = APP.BASE_URL + '/kuesioner';
      $http.post(url, data).then(onSuccess, onError);
    };

    service.update = function(id, data, onSuccess, onError) {
      var url = APP.BASE_URL + '/users/' + id;
      $http.put(url, data).then(onSuccess, onError);
    };

    service.destroy = function(id, onSuccess, onError) {
      var url = APP.BASE_URL + '/users/' + id;
      $http.delete(url, id).then(onSuccess, onError);
    };

    service.export = function(params, onSuccess, onError) {
      var url = apiUrl + '/users/export';
      $http.get(url, {
        paramSerializer: '$httpParamSerializerJQLike',
        params: params,
        responseType: 'arraybuffer'
      })
      .then(onSuccess, onError);
    };

    return service;
  }]);
