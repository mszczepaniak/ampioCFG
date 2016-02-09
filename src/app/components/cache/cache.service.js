(function(){
    'use strict';
    
    angular.module('ampio')
    .factory('Cache', function($sacheFactory) {
       var cache = $sacheFactory('myCache');
       return cache; 
    });
})();