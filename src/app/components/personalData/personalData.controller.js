/* global AppState */
(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('PersonalDataController', PersonalDataController);

  /** @ngInject */
  function PersonalDataController($location, $window, AppState) {
    var vm = this;

    // funcation assignment
    vm.goToAmpio = goToAmpio;
    vm.onSubmit = onSubmit;

    vm.AppState = AppState.getAppState();
    console.log('APP STATE personal data page')
    console.log(vm.AppState)
    
    vm.creationDate = 1452787656155;
    
    // variable assignment
    vm.model = {
        firstName: 'Wpisz imię'
    }
    vm.fields = [
        {
            type: 'input',
            key: 'firstName',
            templateOptions: {
                label: 'First Name'
            }
        },
        {
            template: '<hr />'
        }
    ];
    
    // copy fields because formly adds data to them 
    vm.originalFields = angular.copy(vm.fields);
    
    // function definition
    function onSubmit() {
        alert(JSON.stringify(vm.model), null, 2)
    }
    
    
    
    function goToAmpio() {
       $window.location.href = 'http://ampio.com.pl/';
    }
  }
})();
