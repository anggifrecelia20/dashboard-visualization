'use strict';

angular.module('app')

.factory('DashboardService',
  ['$http', '$rootScope',
  function($http, $rootScope) {
    var service = {};

    service.thisWeekData = [
      {
        "day": 'Sunday',
        "date": '12/07/2019',
        "gross": 15000,
        "nett": 16000,
        "apv": 17500,
        "upt": 10.00,
      }, {
        "day": 'Monday',
        "date": '13/07/2019',
        "gross": 13000,
        "nett": 10500,
        "apv": 9500,
        "upt": 7.30,
      }, {
        "day": 'Tuesday',
        "date": '14/07/2019',
        "gross": 23000,
        "nett": 21000,
        "apv": 17500,
        "upt": 8.14,
      }, {
        "day": 'Wednesday',
        "date": '15/07/2019',
        "gross": 10500,
        "nett": 9500,
        "apv": 6000,
        "upt": 3.45,
      }, {
        "day": 'Thursday',
        "date": '16/07/2019',
        "gross": 54000,
        "nett": 13500,
        "apv": 11000,
        "upt": 2.14,
      },
    ];

    service.lastWeekData = [
      {
        "day": "Sunday",
        "date": "30/06/2019",
        "gross": 25400,
        "nett": 24000,
        "apv": 16000,
        "upt": 6.69
      }, {
        "day": "Monday",
        "date": "01/07/2019",
        "gross": 41000,
        "nett": 39000,
        "apv": 30000,
        "upt": 6.87
      }, {
        "day": "Tuesday",
        "date": "02/07/2019",
        "gross": 20006,
        "nett": 13000,
        "apv": 15000,
        "upt": 5.67
      }, {
        "day": "Wednesday",
        "date": "03/07/2019",
        "gross": 17500,
        "nett": 20000,
        "apv": 14500,
        "upt": 3.71
      }, {
        "day": "Thursday",
        "date": "04/07/2019",
        "gross": 20000,
        "nett": 15600,
        "apv": 15400,
        "upt": 7.91
      }, {
        "day": "Friday",
        "date": "05/07/2019",
        "gross": 20133,
        "nett": 10526,
        "apv": 23301,
        "upt": 6.54
      }, {
        "day": "Saturday",
        "date": "01/07/2019",
        "gross": 14500,
        "nett": 20000,
        "apv": 23000,
        "upt": 3.45
      }
    ];

    return service;
  }]);
