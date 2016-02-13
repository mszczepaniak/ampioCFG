(function(){
    'use strict';
    
    angular.module('ampio')
    .factory('Cache', function($cacheFactory) {
       var cache = $cacheFactory('myCache');
       return cache; 
    });
})();