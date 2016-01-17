(function() {
  'use strict';

  angular
    .module('ampio')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('polowy6', {
        url: '/polowy6',
        templateUrl: 'app/components/6polowy/6polowy.html',
        controller: 'Szablon6Controller',
        controllerAs: 'polowy6'
      })
      .state('polowy9', {
        url: '/polowy9',
        templateUrl: 'app/components/9polowy/9polowy.html',
        controller: 'Szablon9Controller',
        controllerAs: 'polowy9'
      })
      .state('krok1kolor', { 
          url: '/krok1kolor',
          templateUrl: 'app/components/krok1kolor/krok1kolor.html',
          controller: 'Krok1KolorController',
          controllerAs: 'krok1controller'  
      })
      .state('podziekowanie', {
          url: '/podziekowanie',
          templateUrl: 'app/components/podziekowanie/podziekowanie.html',
          controller: 'PodziekowanieController',
          controllerAs: 'podziekowanie'  
      })

    $urlRouterProvider.otherwise('/');
  }

})();
