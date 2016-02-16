(function() {
    'use strict';
    
    angular.module('ampio')
        .service('AppState', AppState);
        
    /** @ngInject */
    
    function AppState(Cache){
        
        var key = "appState";
        
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
                    room : 'sypialnia',
                    chosenColor : {
                        name: 'Light blue',
                        color: 'rgb(0, 137, 182)',
                    },
                    chosenTemplate : 'template6'
                },
                // 6 polowy
                template6 : {
                    elements : [
                                    {name: 'elem1', label: 'labelka1', value: 'cyf1'},
                                    {name: 'elem2', label: 'lab2', value: 'cyf3'},
                                    {name: 'elem3', label: 'przyklad', value: 'la2'},
                                    {name: 'elem4', label: 'palantir', value: 'led2'},
                                    {name: 'elem5', label: 'test', value: 'os4'},
                                    {name: 'elem6', label: 'kruszek', value: 'r13'},
                                ]
                },
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