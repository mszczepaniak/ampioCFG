(function() {
    'use strict';
    
    angular.module('ampio')
        .service('AppState', AppState);
        
    /** @ngInject */
    
    function AppState(){
        
        var palantir = {
            name: "Palantir",
            quote: "Any fool can write code"
        }
        
        this.list = [palantir];
        
        var getAppState = function() {
          // jezeli jest to pobierz, jezeli nie ma to stworz domyslny   
        };
        
        var setAppState = function(appState) {
            
        };
        
        var createDefaultAppState = function() {
            
        };
    }
    
    
})();