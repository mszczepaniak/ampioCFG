(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('PodziekowanieController', PodziekowanieController);

  /** @ngInject */
  function PodziekowanieController($location, $window) {
    var vm = this;
    vm.ampioSign = '';
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1452787656155;
    vm.goToAmpio = goToAmpio;
    
    function goToAmpio() {
       $window.location.href = 'http://ampio.com.pl/';
    }
  }
})();
