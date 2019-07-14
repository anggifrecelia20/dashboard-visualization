'use strict';

angular.module('app')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('app.dashboard', {
    url: '/dashboard',
    reload: true,
    cache: false,
    templateUrl: 'modules/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$rootScope', '$scope', 'Helper', 'DashboardService',
  function($rootScope, $scope, Helper, DashboardService) {
    $rootScope.title = 'Advotics Dashboard';
    $scope.periods = Helper.getPeriods();
    $scope.filter = {
      period_id: 'this_week'
    };

    $(document).ready(function() {
      var start = moment().subtract(6, 'days');
      var end = moment();

      function cb(start, end) {
        $('#reportrange span').html(start.format('DD MMMM YYYY') + ' - ' + end.format('DD MMMM YYYY'));
      }

      $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        opens: 'left',
        maxDate: new Date(),
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
        }
      }, cb);

      cb(start, end);
    });

    var balloonText = "<span style='font-size:13px;'>[[date]]<br><a class='ui empty circular label' style='background-color: #289E45'></a><span class='text-grey'>&ensp;Gross</span><span style='color: #289E45'>&ensp;&ensp;[[gross]]</span><br><a class='ui empty circular label' style='background-color: #37B04C'></a><span class='text-grey'>&ensp;Nett</span><span style='color: #37B04C'>&ensp;&ensp;&ensp;&nbsp;[[nett]]</span><br><a class='ui empty circular label' style='background-color: #7AE28C'></a><span class='text-grey'>&ensp;APV</span><span style='color: #7AE28C'>&ensp;&ensp;&ensp;&ensp;[[apv]]</span><br><a class='ui empty circular label' style='background-color: #707070'></a><span class='text-grey'>&ensp;UPT</span><span style='color: #707070'>&ensp;&ensp;&ensp;&ensp;[[upt]]</span></span>";

    var chart = AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "addClassNames": true,
      "theme": "none",
      "autoMargins": false,
      "marginLeft": 55,
      "marginRight": 8,
      "marginTop": 10,
      "marginBottom": 26,
      "balloon": {
        "adjustBorderColor": true,
        "horizontalPadding": 10,
        "color": "#000000",
        "fillColor": "#FFFFFF",
        "textAlign": "left",
      },
      "valueAxes": [ {
        "axisAlpha": 0,
        "position": "left"
      } ],
      "startDuration": 1,
      "graphs": [
        {
          "alphaField": "alpha",
          "balloonText": balloonText,
          "fillAlphas": 1,
          "title": "Bar",
          "type": "column",
          "valueField": "apv",
          "fillColors": "#37B04C",
          "lineThickness": 0,
        },
        {
          "id": "graph2",
          "balloonText": balloonText,
          "bullet": "round",
          "lineThickness": 3,
          "bulletSize": 7,
          "bulletBorderAlpha": 1,
          "useLineColorForBulletBorder": true,
          "bulletBorderThickness": 3,
          "fillAlphas": 0,
          "lineAlpha": 1,
          "title": "Line",
          "valueField": "apv",
        }
      ],
      "categoryField": "day",
      "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "tickLength": 0
      },
      "legend": {
        "data": [
          {title: "Nett", color: "#37B04C"},
          {title: "Gross", color: "#289E45"},
          {title: "Average Purchase Value", color: "#6BE681"},
          {title: "Unit per Transaction", color: "#6A6A6A"},
        ],
      },
    });

    var reloadChart = function(period) {
      var data;
      if (period == 'this_week') data = DashboardService.thisWeekData;
      else data = DashboardService.lastWeekData;
      chart.dataProvider = data;
      chart.validateData();
    };

    $scope.changePeriod = function(period) {
      reloadChart(period);
    };

    reloadChart('this_week');

  }]);
