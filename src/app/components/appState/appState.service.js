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
            var appState = {
                // sekcja ogolna
                common: {
                    room : 'a',
                    chosenColor : {
                        name: 'a',
                        color: 'b',
                    },
                    chosenTemplate : 'c'
                },
                // 6 polowy
                template6 : {},
                //9 polowy
                template9: {},
                //15 polowy
                template15: {},
                //18 polowy
                template18: {}
            };
            
            return appState;
        };
    }
    
    
})();