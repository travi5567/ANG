(function() {
  'use strict';

  angular.module('app')

  // OpenWeatherMap API returns temperature in degrees Kelvin.
  .filter('kelvinToCelsius', function() {
    return function(kelvin) {
      return parseFloat(kelvin) - 273.15;
    };
  });
})();




