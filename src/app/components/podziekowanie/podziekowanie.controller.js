(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('PodziekowanieController', PodziekowanieController);

  /** @ngInject */
  function PodziekowanieController($timeout, $state) {
    var vm = this;
    vm.ampioSign = '';
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1452787656155;
  
  }
})();
