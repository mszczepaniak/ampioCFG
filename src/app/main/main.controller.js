(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $state) {
    var vm = this;
    vm.ampioSign = '';
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1452787656155;
    vm.goToColors = goToColors;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function goToColors() {
        $state.go('krok1kolor')
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
