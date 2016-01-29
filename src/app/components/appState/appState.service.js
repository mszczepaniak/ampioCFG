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
    }
})();