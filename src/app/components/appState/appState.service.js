(function() {
    'use strict';
    
    angular.module('ampio')
        .service('AppState', AppState);
        
    /** @ngInject */
    
    function AppState(Cache){
        
        var key = "appState";
        var appState = "test";
        
        var service = {
            getAppState : getAppState,
            setAppState : setAppState
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
            var appState;
            
            // sekcja ogolna 
            var common = {
                room : undefined,
                chosenColor : undefined,
                template : undefined
            }
            
            // 6 polowy
            var polowy6 = {
                
            }
            // 9 polowy 
            
            // 15 polowy
            
            // 18 polowy 
            appState = [common];
            return appState;
        };
    }
    
    
})();