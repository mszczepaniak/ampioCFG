/* global AppState */
(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('PersonalDataController', PersonalDataController);

  /** @ngInject */
  function PersonalDataController($location, $window, AppState) {
    var vm = this;
    vm.AppState = AppState.getAppState();
    console.log('APP STATE personal data page')
    console.log(vm.AppState)
    
    vm.creationDate = 1452787656155;
    vm.goToAmpio = goToAmpio;
    
    function goToAmpio() {
       $window.location.href = 'http://ampio.com.pl/';
    }
  }
})();
