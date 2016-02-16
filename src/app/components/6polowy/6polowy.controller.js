(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('Szablon6Controller', Szablon6Controller);

  /** @ngInject */
  function Szablon6Controller($timeout, $state, $stateParams, AppState) {
      
    var vm = this;
    vm.AppState = AppState.getAppState();
    
    console.log('APP STATE')
    console.log(vm.AppState)
    
    
    vm.AppState.template6.elements[0].label='nazwa(opcjonalnie)';
    vm.label2='nazwa(opcjonalnie)';
    vm.AppState.template6.elements[2].label='nazwa(opcjonalnie)';
    vm.AppState.template6.elements[3].label='nazwa(opcjonalnie)';
    vm.label5='nazwa(opcjonalnie)';
    vm.label6='nazwa(opcjonalnie)';
    
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.room = '';
    vm.creationDate = 1451913357644;
    
    vm.goToThankYouPage = goToThankYouPage;
    vm.goToKrok1Kolor = goToKrok1Kolor;
    
    
    
    vm.dropped = '';
    
    vm.changeClass = function(title) {
        if(title === '')
           return vm.draggedTitle;   
    }
    
    vm.elem1 = [{'name': 'elem1'}];
    vm.elem2 = [{'name': 'elem2'}];
    vm.elem3 = [{'name': 'elem3'}];
    vm.elem4 = [{'name': 'elem4'}];
    vm.elem5 = [{'name': 'elem5'}];
    vm.elem6 = [{'name': 'elem6'}];
    
    vm.startCallback = function(event, ui, title) {
    console.log('You started draggin: ' + title.title);
    
    vm.draggedTitle = title.title;
    };

    vm.stopCallback = function(event, ui) {
        console.log('Why did you stop draggin me?');
    };

    vm.dragCallback = function(event, ui) {
        console.log('hey, look I`m flying');
    };
    
    var checkElements = function() {
        // elem1
        if(vm.elem1[0].title && vm.elem1[0].title === vm.draggedTitle)
            vm.dropped1 = vm.draggedTitle;
        if(vm.elem2[0].title && vm.elem2[0].title === vm.draggedTitle)
            vm.dropped2 = vm.draggedTitle;
        if(vm.elem3[0].title && vm.elem3[0].title === vm.draggedTitle)
            vm.dropped3 = vm.draggedTitle;
        if(vm.elem4[0].title && vm.elem4[0].title === vm.draggedTitle)
            vm.dropped4 = vm.draggedTitle;
        if(vm.elem5[0].title && vm.elem5[0].title === vm.draggedTitle)
            vm.dropped5 = vm.draggedTitle;
        if(vm.elem6[0].title && vm.elem6[0].title === vm.draggedTitle)
            vm.dropped6 = vm.draggedTitle;
    }

    vm.dropCallback = function(event, ui) {
        console.log('hey, you dumped me :-(' , vm.draggedTitle);
        checkElements();
        // vm.dropped = vm.draggedTitle;
        // sprawdzic wszystkie elementy
        
        // console.log(vm.dropped)
    };

    vm.overCallback = function(event, ui) {
        console.log('Look, I`m over you');
    };

    vm.outCallback = function(event, ui) {
        console.log('I`m not, hehe');
    };
    
    function goToThankYouPage() {
        // Tutaj musze wywolac serwis wysylajacy JSONA pod dany adres 
        
        // stworzenie obiektu do wyslania
        
        var jsonDoWyslania = new Object();
    
        jsonDoWyslania.room = vm.AppState.common.room;
        jsonDoWyslania.color = vm.AppState.common.chosenColor.color;
        jsonDoWyslania.template = vm.AppState.common.chosenTemplate;
        jsonDoWyslania.elements = [
            {name: 'elem1', label: vm.AppState.template6.elements[0].label, value: vm.elem1[0].title},
            {name: 'elem2', label: vm.AppState.template6.elements[1].label, value: vm.elem2[0].title},
            {name: 'elem3', label: vm.AppState.template6.elements[2].label, value: vm.elem3[0].title},
            {name: 'elem4', label: vm.AppState.template6.elements[3].label, value: vm.elem4[0].title},
            {name: 'elem5', label: vm.AppState.template6.elements[4].label, value: vm.elem5[0].title},
            {name: 'elem6', label: vm.AppState.template6.elements[5].label, value: vm.elem6[0].title},
        ];
        console.log('JSON do wyslania: ')
        console.log(jsonDoWyslania)
        console.log(JSON.stringify(jsonDoWyslania))
        JSON.stringify(jsonDoWyslania);
        // tutaj trzeba zrobic ngresource HTTP POSTA
        alert("Wyslany JSON: " + JSON.stringify(jsonDoWyslania))
        console.log('Wysylam na serwer... ')        
        
        $state.go('podziekowanie');
    }
    
    function goToKrok1Kolor() {
        $state.go('krok1kolor');
    }
    
    // Cyfry
    vm.cyfry = false;
    vm.showDigits = function () {
        vm.cyfry = !vm.cyfry;
    };
    
    // Lampy
    vm.lampy = false;
    vm.showLamps = function () {
        vm.lampy = !vm.lampy;
    };
    
    // Led
    vm.led = false;
    vm.showLeds = function () {
        vm.led = !vm.led;
    };
    
    //Oswietlenie
    vm.oswietlenie = false;
    vm.showOswietlenie = function () {
        vm.oswietlenie = !vm.oswietlenie;
    };
    
    //Rolety
    vm.rolety = false;
    vm.showRolety = function () {
        vm.rolety = !vm.rolety;
    };
    
    // ELEMENTY - TODO do osobnego serwisu dac
    
    vm.cyf1 = [
        { 'title': 'cyf1', 'drag': true }
    ];
    
    vm.cyf2 = [
        { 'title': 'cyf2', 'drag': true }
    ];
    
    vm.cyf3 = [
        { 'title': 'cyf3', 'drag': true }
    ];
    
    vm.la1 = [
        { 'title': 'la1', 'drag': true }
    ];
    
    vm.la2 = [
        { 'title': 'la2', 'drag': true }
    ];
    
    vm.la3 = [
        { 'title': 'la3', 'drag': true }
    ];
    
    vm.la4 = [
        { 'title': 'la4', 'drag': true }
    ];
    
    vm.la5 = [
        { 'title': 'la5', 'drag': true }
    ];
    
    vm.la8 = [
        { 'title': 'la8', 'drag': true }
    ];
    
    vm.led1 = [
        { 'title': 'led1', 'drag': true }
    ];
    
    vm.led2 = [
        { 'title': 'led2', 'drag': true }
    ];
    
    vm.os1 = [
        { 'title': 'os1', 'drag': true }
    ];
    
    vm.os2 = [
        { 'title': 'os2', 'drag': true }
    ];
    
    vm.os3 = [
        { 'title': 'os3', 'drag': true }
    ];
    
    vm.os4 = [
        { 'title': 'os4', 'drag': true }
    ];
    
    vm.os5 = [
        { 'title': 'os5', 'drag': true }
    ];
    
    vm.r1 = [
        { 'title': 'r1', 'drag': true }
    ];
    
    vm.r3 = [
        { 'title': 'r3', 'drag': true }
    ];
    
    vm.r9 = [
        { 'title': 'r9', 'drag': true }
    ];
    
    vm.r11 = [
        { 'title': 'r11', 'drag': true }
    ];
    
    vm.r13 = [
        { 'title': 'r13', 'drag': true }
    ];
    
  }
})();
