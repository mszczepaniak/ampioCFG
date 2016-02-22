(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('SummaryController', SummaryController);

  /** @ngInject */
  function SummaryController($location, $window, AppState) {
    var vm = this;
    vm.AppState = AppState.getAppState();
    console.log('APP STATE summary')
    console.log(vm.AppState)
    
    vm.creationDate = 1452787656155;
    vm.goToAmpio = goToAmpio;
    
    vm.label1 = vm.AppState.template6 ? vm.AppState.template6.elements[0].label : '';
    vm.label2 = vm.AppState.template6 ? vm.AppState.template6.elements[1].label : '';
    vm.label3 = vm.AppState.template6 ? vm.AppState.template6.elements[2].label : '';
    vm.label4 = vm.AppState.template6 ? vm.AppState.template6.elements[3].label : '';
    vm.label5 = vm.AppState.template6 ? vm.AppState.template6.elements[4].label : '';
    vm.label6 = vm.AppState.template6 ? vm.AppState.template6.elements[5].label : '';
    
    function goToAmpio() {
       $window.location.href = 'http://ampio.com.pl/';
    }
  }
})();