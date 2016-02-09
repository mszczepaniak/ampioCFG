(function() {
    'use strict';
    
    angular.module('ampio')
        .service('AppState', AppState);
        
    /** @ngInject */
    
    function AppState(Cache){
        
        var key = "appState";
        var appState = "test";
        
        var palantir = {
            name: "Palantir",
            quote: "Any fool can write code"
        }
        
        this.list = [palantir];
        
        var service = {
            
        }
        
        return service;
               
        function getAppState() {
          // get from cache, if not, create default 
          var appState = Cache.get(key) || createDefaultAppState();
          return appState; 
        };
        
        function setAppState(appState) {
            Cache.put(key, appState);
        };
        
        function createDefaultAppState() {
            var appState = undefined;
            return appState;
        };
    }
    
    
})();