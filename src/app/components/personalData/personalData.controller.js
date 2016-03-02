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
        
    }
    vm.fields = [
        {
            key: 'first_name',            
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Imię',
                placeholder: 'Wpisz swoje imię',
                required: true
            }
        },
        {
            template: '<hr />'
        },
        {
            key: 'last_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Nazwisko',
                placeholder: 'Wpisz nazwisko',
                required: true
            }
        },
        
        {
            template: '<hr />'
        },
        
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Adres email',
                placeholder: 'Wpisz swój adres email',
                required: true
            }
        },
        
        {
            template: '<hr />'
        },
        
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
