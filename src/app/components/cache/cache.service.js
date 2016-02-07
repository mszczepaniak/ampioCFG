(function(){
    'use strict';
    
    angular.module('ampio')
    .factory('cache', function($sacheFactory) {
       var cache = $sacheFactory('myCache');
       return cache; 
    });
})();