(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('Szablon6Controller', Szablon6Controller);

  /** @ngInject */
  function Szablon6Controller($timeout, $state) {
    var vm = this;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.room = '';
    vm.creationDate = 1451913357644;
    
    vm.goToPodziekowanie = goToPodziekowanie;
    vm.goToKrok1Kolor = goToKrok1Kolor;
    
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
    
    vm.dropped = '';
    
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

    vm.dropCallback = function(event, ui) {
        console.log('hey, you dumped me :-(' , vm.draggedTitle);
        vm.dropped = vm.draggedTitle;
        console.log(vm.dropped)
    };

    vm.overCallback = function(event, ui) {
        console.log('Look, I`m over you');
    };

    vm.outCallback = function(event, ui) {
        console.log('I`m not, hehe');
    };
    
    function goToPodziekowanie() {
        console.log('blabla')
        $state.go('podziekowanie');
    }
    
    function goToKrok1Kolor() {
        console.log('blabla')
        
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
  }
})();
