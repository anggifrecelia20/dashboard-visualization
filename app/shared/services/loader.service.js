'use strict';

angular.module('app')

.factory('Loader',
  ['APP', 'lodash', '$filter',
  function(APP, lodash, $filter) {
    var service = {};

    service.showInSegment = function() {
      angular.element('.segment > .dimmer').addClass('active');
    };

    service.hideInSegment = function() {
      angular.element('.segment > .dimmer').removeClass('active');
    };

    service.showInStacked = function() {
      angular.element('.stacked > .dimmer').addClass('active');
    };

    service.hideInStacked = function() {
      angular.element('.stacked > .dimmer').removeClass('active');
    };

    service.showInList = function() {
      angular.element('.content-list > .dimmer').addClass('active');
    };

    service.hideInList = function() {
      angular.element('.content-list > .dimmer').removeClass('active');
    };

    service.showInDetailList = function() {
      angular.element('.content-workspace > .dimmer').addClass('active');
    };

    service.hideInDetailList = function() {
      angular.element('.content-workspace > .dimmer').removeClass('active');
    };

    service.showInModal = function() {
      angular.element('.modal > .dimmer').addClass('active');
    };

    service.hideInModal = function() {
      angular.element('.modal > .dimmer').removeClass('active');
    };

    service.showInTableCard = function(index) {
      var tableCardIndex = '#tableCard-' + index;
      angular.element('.order-container > ' + tableCardIndex).addClass('active');
    };

    service.hideInTableCard = function(index) {
      var tableCardIndex = '#tableCard-' + index;
      angular.element('.order-container > .dimmer').removeClass('active');
    };

    service.showInLogin = function() {
      angular.element('.login-container > .dimmer').addClass('active');
    };

    service.hideInLogin = function() {
      angular.element('.login-container > .dimmer').removeClass('active');
    };

    service.show = function() {
      angular.element('body > .dimmer').addClass('active');
    };

    service.hide = function() {
      angular.element('body > .dimmer').removeClass('active');
    };

    service.showInTable = function() {
      angular.element('#table-loader').addClass('active');
    };

    service.hideInTable = function() {
      angular.element('#table-loader').removeClass('active');
    };

    service.showInForm = function() {
      angular.element('.ui.form').addClass('loading');
    };

    service.hideInForm = function() {
      angular.element('.ui.form').removeClass('loading');
    };

    return service;
  }]);
