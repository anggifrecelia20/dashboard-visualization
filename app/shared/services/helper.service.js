'use strict';

angular.module('app')

.factory('Helper',
  ['APP', 'lodash', '$filter',
  function(APP, lodash, $filter) {
    var service = {};

    service.ucfirstWord = function(collections, attribute) {
      attribute = attribute ? attribute : '';
      lodash.each(collections, function(data) {
        data[attribute] = $filter('lowercase')(data[attribute]);
        data[attribute] = $filter('ucfirst')(data[attribute]);
      });
      return collections;
    };

    service.addBrackets = function(word) {
      if (word) {
        var wordWithBracket = '(' + word + ')';
        return wordWithBracket;
      }
      else {
        return '';
      }
    };

    service.renameKey = function(collections, key, newKey) {
      lodash.each(collections, function(c) {
        c[newKey] = angular.copy(c[key]);
        delete c[key];
      });
      return collections;
    };

    service.toFloat = function(number) {
      number = number ? number : 0;
      var float = parseFloat(parseFloat(number).toFixed(2));
      return float;
    };

    service.toNumber = function(number) {
      if (number != null) {
        var float = parseFloat(parseFloat(number).toFixed(2));
        return float;
      }
      else {
        return null;
      }
    };

    service.normalText = function(word) {
      if (word) {
        var hasUnderscore = /_|-/g.test(word);
        var hasDot = /\./g.test(word);

        if (hasUnderscore || hasDot) {
          var removeUnderscore = word.replace(/_|-/g, " ");
          var removeDot = removeUnderscore.replace(/\./g, " ");
          var finalWord = $filter('ucfirst')(removeDot);
          return finalWord;
        }
        else {
          var finalWord = $filter('ucfirst')(word);
          return finalWord;
        }
      }
    };

    service.isHomogenous = function(array, value) {
      if (array.length > 0) {
        return array.every( (val, i, arr) => arr[i] === value );
      }
      else {
        return false;
      }
    };

    service.getPeriods = function() {
      var periods = [
        // {id: 'custom', name: 'Custom'},
        // {id: 'today', name: 'Today'},
        {id: 'this_week', name: 'This Week'},
        // {id: 'this_month', name: 'This Month'},
        // {id: 'this_year', name: 'This Year'},
        // {id: 'yesterday', name: 'Yesterday'},
        {id: 'last_week', name: 'Last Week'},
        // {id: 'last_month', name: 'Last Month'},
        // {id: 'last_year', name: 'Last Year'},
      ];
      return periods;
    };

    return service;
  }]);
