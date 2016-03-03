/* global AppState */
(function() {
  'use strict';


  var app = angular.module('ampio');
  
  
   
   
   app.run(function(formlyConfig, formlyValidationMessages, formlyApiCheck) {
        formlyConfig.setWrapper({
            name: 'validation',
            types: ['input', 'customInput'],
            templateUrl: 'my-messages.html'
        });
    
        formlyValidationMessages.addStringMessage('required', 'To pole jest wymagane');
        
        formlyConfig.setType({
            name: 'customInput',
            extends: 'input',
            apiCheck: function(check) {
                return {
                    templateOptions: {
                        foo: check.string.optional
                    }
                };
            }
        });
  });

  /** @ngInject */
  app.controller('PersonalDataController', function PersonalDataController($location, $window, AppState, $state) {
    var vm = this;

    // funcation assignment
    vm.goToAmpio = goToAmpio;
    vm.goToSummary = goToSummary;
    vm.onSubmit = onSubmit;
    

    vm.AppState = AppState.getAppState();
    console.log('APP STATE personal data page')
    console.log(vm.AppState)
    
    vm.creationDate = 1452787656155;
    
    // variable assignment
    vm.model = {};
    vm.options = {};
    
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
            },
            validators: {
                ipAddress: {
                    expression: function(viewValue, modelValue) {
                        var value = modelValue || viewValue;
                        return !value || /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(value);
                    },
                    message: '$viewValue + " nie jest poprawnym adresem e-mail"'
                }
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
        if(!vm.personalDataForm.$invalid) {
            alert(JSON.stringify(vm.model), null, 2)
            $state.go('podziekowanie');    
        }
    }
    
    function goToSummary() {
        $state.go('summary');
    }
    
    function goToAmpio() {
       $window.location.href = 'http://ampio.com.pl/';
    }
    
  });
  
  
})();
