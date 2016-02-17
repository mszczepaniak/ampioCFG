(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('SummaryController', SummaryController);

  /** @ngInject */
  function SummaryController($location, $window) {
    var vm = this;
    vm.creationDate = 1452787656155;
    vm.goToAmpio = goToAmpio;
    
    function goToAmpio() {
       $window.location.href = 'http://ampio.com.pl/';
    }
  }
})();