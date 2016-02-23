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
        url: '/polowy6?pomieszczenie&kolor&szablon',
        params: {'pomieszczenie': null, 'kolor': null, 'szablon': null},
        templateUrl: 'app/components/6polowy/6polowy.html',
        controller: 'Szablon6Controller',
        controllerAs: 'polowy6'
      })
      .state('polowy9', {
        url: '/polowy9',
        params: {'pomieszczenie': null, 'kolor': null, 'szablon': null},
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
      .state('summary', { 
          url: '/summary',
          templateUrl: 'app/components/summary/summary.html',
          controller: 'SummaryController',
          controllerAs: 'summary'  
      })
      .state('personalData', { 
          url: '/personalData',
          templateUrl: 'app/components/personalData/personalData.html',
          controller: 'PersonalDataController',
          controllerAs: 'personalData'  
      })
      .state('podziekowanie', {
          url: '/podziekowanie',
          params: {'test': null},
          templateUrl: 'app/components/podziekowanie/podziekowanie.html',
          controller: 'PodziekowanieController',
          controllerAs: 'podziekowanie'  
      });

    $urlRouterProvider.otherwise('/');
  }

})();
