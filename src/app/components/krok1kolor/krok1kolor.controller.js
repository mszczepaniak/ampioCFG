(function() {
  'use strict';

  angular
    .module('ampio')
    .controller('Krok1KolorController', Krok1KolorController);

  /** @ngInject */
  function Krok1KolorController($timeout, $state, AppState) {
    var vm = this;
    
    console.log('APP STATE')
    console.log(AppState.getAppState())
    console.log(AppState.common)
    vm.AppState.common.room = '';
    vm.goToSzablon = goToSzablon;
    vm.ampioSign = '';
    vm.szablon = '';
    vm.chosenColor = {
        name: '',
        color: ''
    };
    
    // RAL PALETTE
    vm.color = false;
    vm.colorChange = function () {
        vm.color = !vm.color;
    };
    
     vm.assignColor = function(name, color) {
         console.log('pomieszczenie')
         console.log(vm.AppState.common.room)
         
        vm.chosenColor.name = name;
        vm.chosenColor.color = color;
        vm.color = !vm.color;
    };
    
    function goToSzablon() {
        if(vm.szablon === 'dotyk6')
            $state.go('polowy6', {'pomieszczenie': vm.pomieszczenie, 'kolor': vm.chosenColor.color, 'szablon': vm.szablon});
        if(vm.szablon === 'dotyk9')
            $state.go('polowy9');
        if(vm.szablon === 'dotyk15')
            $state.go('polowy15');
        if(vm.szablon === 'dotyk18')
            $state.go('polowy18'); 
    }

    var ralcolor = new Array();
    var ralname = new Array();


    vm.ral0 = [
      {ralcolor: 'rgb(236, 236, 231)', ralname: 'Signal white'},
        {ralcolor: 'rgb(43, 43, 44)', ralname: 'Signal black'},
        {ralcolor: 'rgb(255, 255, 0)', ralname: 'Luminous yellow'},
        {ralcolor: 'rgb(247, 181, 0)', ralname: 'Traffic yellow'},
        {ralcolor: 'rgb(255, 155, 0)', ralname: 'Melon yellow'},
        {ralcolor: 'rgb(255, 45, 33)', ralname: 'Luminous red'},
        {ralcolor: 'rgb(204, 44, 36)', ralname: 'Pure red'},
        {ralcolor: 'rgb(144, 51, 115)', ralname: 'Traffic purple'},
        {ralcolor: 'rgb(110, 99, 135)', ralname: 'Pearl violet'},
        {ralcolor: 'rgb(0, 137, 182)', ralname: 'Light blue'},
        {ralcolor: 'rgb(0, 91, 140)', ralname: 'Traffic blue'},
        {ralcolor: 'rgb(0, 181, 26)', ralname: 'Luminous green'},
        {ralcolor: 'rgb(0, 131, 81)', ralname: 'Traffic green'},
        {ralcolor: 'rgb(183, 179, 168)', ralname: 'Silk grey'},
        {ralcolor: 'rgb(116, 94, 61)', ralname: 'Khaki grey'},
        {ralcolor: 'rgb(121, 77, 62)', ralname: 'Signal brown'}  
    ];
    
    vm.ral = [
        {ralcolor: 'rgb(205, 186, 136)', ralname: 'Green beige'},
        {ralcolor: 'rgb(210, 170, 109)', ralname: 'Sand yellow'},
        {ralcolor: 'rgb(249, 168, 0)', ralname: 'Signal yellow'},
        {ralcolor: 'rgb(228, 158, 0)', ralname: 'Golden yellow'},
        {ralcolor: 'rgb(203, 142, 0)', ralname: 'Honey yellow'},
        {ralcolor: 'rgb(226, 144, 0)', ralname: 'Maize yellow'},
        {ralcolor: 'rgb(232, 140, 0)', ralname: 'Daffodil yellow'},
        {ralcolor: 'rgb(208, 176, 132)', ralname: 'Beige'},
        {ralcolor: 'rgb(175, 128, 79)', ralname: 'Brown beige'},
        {ralcolor: 'rgb(221, 175, 39)', ralname: 'Lemon yellow'},
        {ralcolor: 'rgb(227, 217, 198)', ralname: 'Oyster white'},
        {ralcolor: 'rgb(221, 196, 154)', ralname: 'Ivory'},
        {ralcolor: 'rgb(230, 210, 181)', ralname: 'Light ivory'},
        {ralcolor: 'rgb(241, 221, 56)', ralname: 'Sulfur yellow'},
        {ralcolor: 'rgb(246, 169, 80)', ralname: 'Saffron yellow'},
        {ralcolor: 'rgb(250, 202, 48)', ralname: 'Zinc yellow'},
        {ralcolor: 'rgb(160, 143, 101)', ralname: 'Olive yellow'},
        {ralcolor: 'rgb(246, 182, 0)', ralname: 'Grey beige'},
        {ralcolor: 'rgb(164, 143, 122)', ralname: 'Colza yellow'},
        {ralcolor: 'rgb(186, 143, 76)', ralname: 'Ochre yellow'},
        
        {ralcolor: 'rgb(167, 127, 14)', ralname: 'Curry'},
        
        {ralcolor: 'rgb(226, 163, 0)', ralname: 'Broom yellow'},
        {ralcolor: 'rgb(249, 154, 28)', ralname: 'Dahlia yellow'},
        {ralcolor: 'rgb(235, 156, 82)', ralname: 'Pastel yellow'},
        {ralcolor: 'rgb(144, 131, 112)', ralname: 'Pearl beige'},
        {ralcolor: 'rgb(128, 100, 63)', ralname: 'Pearl gold'},
        {ralcolor: 'rgb(240, 146, 0)', ralname: 'Sun yellow'},
        {ralcolor: 'rgb(218, 110, 0)', ralname: 'Yellow orange'},
        {ralcolor: 'rgb(186, 72, 27)', ralname: 'Red orange'},
        {ralcolor: 'rgb(191, 57, 34)', ralname: 'Vermilion'},
        {ralcolor: 'rgb(246, 120, 40)', ralname: 'Pastel orange'},
        {ralcolor: 'rgb(226, 83, 3)', ralname: 'Pure orange'},
        {ralcolor: 'rgb(255, 77, 6)', ralname: 'Luminous orange'},
        {ralcolor: 'rgb(255, 178, 0)', ralname: 'Bright orange'},
        {ralcolor: 'rgb(237, 107, 33)', ralname: 'Bright red orange'},
        {ralcolor: 'rgb(222, 83, 7)', ralname: 'Traffic orange'},
        {ralcolor: 'rgb(208, 93, 40)', ralname: 'Signal orange'},
        {ralcolor: 'rgb(226, 110, 14)', ralname: 'Deep orange'},
        {ralcolor: 'rgb(213, 101, 77)', ralname: 'Salmon orange'},
        {ralcolor: 'rgb(146, 62, 37)', ralname: 'Pearl orange'},
        {ralcolor: 'rgb(167, 41, 32)', ralname: 'Flame red'},
        {ralcolor: 'rgb(155, 36, 35)', ralname: 'Signal red'},
        {ralcolor: 'rgb(155, 35, 33)', ralname: 'Carmine red'},
        {ralcolor: 'rgb(134, 26, 34)', ralname: 'Ruby red'},
        {ralcolor: 'rgb(107, 28, 35)', ralname: 'Purple red'},
        {ralcolor: 'rgb(89, 25, 31)', ralname: 'Wine red'},
        {ralcolor: 'rgb(62, 32, 34)', ralname: 'Black red'},
        {ralcolor: 'rgb(109, 52, 45)', ralname: 'Oxide red'},
        {ralcolor: 'rgb(121, 36, 35)', ralname: 'Brown red'},
        {ralcolor: 'rgb(198, 132, 109)', ralname: 'Beige red'},
        {ralcolor: 'rgb(151, 46, 37)', ralname: 'Tomato red'},
        {ralcolor: 'rgb(203, 115, 117)', ralname: 'Antique pink'},
        {ralcolor: 'rgb(216, 160, 166)', ralname: 'Light pink'},
        {ralcolor: 'rgb(166, 61, 47)', ralname: 'Coral red'},
        {ralcolor: 'rgb(203, 85, 93)', ralname: 'Rose'},
        {ralcolor: 'rgb(199, 63, 74)', ralname: 'Strawberry red'},
        {ralcolor: 'rgb(187, 30, 16)', ralname: 'Traffic red'},
        {ralcolor: 'rgb(207, 105, 85)', ralname: 'Salmon pink'},
        {ralcolor: 'rgb(255, 42, 27)', ralname: 'Luminous bright red'},
        {ralcolor: 'rgb(171, 39, 60)', ralname: 'Raspberry red'},
        
        {ralcolor: 'rgb(166, 52, 55)', ralname: 'Orient red'},
        {ralcolor: 'rgb(112, 29, 35)', ralname: 'Pearl ruby red'},
        {ralcolor: 'rgb(165, 58, 45)', ralname: 'Pearl pink'},
        {ralcolor: 'rgb(129, 97, 131)', ralname: 'Red lilac'},
        {ralcolor: 'rgb(141, 60, 75)', ralname: 'Red violet'},
        {ralcolor: 'rgb(196, 97, 140)', ralname: 'Heather violet'},
        {ralcolor: 'rgb(101, 30, 56)', ralname: 'Claret violet'},
        {ralcolor: 'rgb(118, 104, 154)', ralname: 'Blue lilac'},
        {ralcolor: 'rgb(71, 36, 60)', ralname: 'Purple violet'},
        {ralcolor: 'rgb(132, 76, 130)', ralname: 'Signal violet'},
        {ralcolor: 'rgb(157, 134, 146)', ralname: 'Pastel violet'},
        {ralcolor: 'rgb(188, 64, 119)', ralname: 'Telemagenta'},
        {ralcolor: 'rgb(107, 107, 127)', ralname: 'Pearl blackberry'},
        {ralcolor: 'rgb(49, 79, 111)', ralname: 'Violet blue'},
        {ralcolor: 'rgb(15, 76, 100)', ralname: 'Green blue'},
        {ralcolor: 'rgb(0, 56, 123)', ralname: 'Ultramarine blue'},
        {ralcolor: 'rgb(31, 56, 85)', ralname: 'Sapphire blue'},
        {ralcolor: 'rgb(25, 30, 40)', ralname: 'Black blue'},
        {ralcolor: 'rgb(0, 83, 135)', ralname: 'Signal blue'},
        {ralcolor: 'rgb(55, 107, 140)', ralname: 'Brilliant blue'},
        {ralcolor: 'rgb(43, 58, 68)', ralname: 'Grey blue'},
        {ralcolor: 'rgb(34, 95, 120)', ralname: 'Azure blue'},
        {ralcolor: 'rgb(0, 79, 124)', ralname: 'Gentian blue'},
        {ralcolor: 'rgb(26, 43, 60)', ralname: 'Steel blue'},
        
        {ralcolor: 'rgb(25, 49, 83)', ralname: 'Cobalt blue'},
        {ralcolor: 'rgb(99, 125, 150)', ralname: 'Pigeon blue'},
        {ralcolor: 'rgb(0, 124, 176)', ralname: 'Sky blue'},
        
        {ralcolor: 'rgb(5, 139, 140)', ralname: 'Turquoise blue'},
        {ralcolor: 'rgb(0, 94, 131)', ralname: 'Capri blue'},
        {ralcolor: 'rgb(0, 65, 75)', ralname: 'Ocean blue'},
        {ralcolor: 'rgb(0, 117, 119)', ralname: 'Water blue'},
        {ralcolor: 'rgb(34, 45, 90)', ralname: 'Night blue'},
        {ralcolor: 'rgb(66, 105, 140)', ralname: 'Distant blue'},
        {ralcolor: 'rgb(96, 147, 172)', ralname: 'Pastel blue'},
        {ralcolor: 'rgb(33, 105, 124)', ralname: 'Pearl gentian blue'},
        {ralcolor: 'rgb(15, 48, 82)', ralname: 'Pearl night blue'},
        {ralcolor: 'rgb(60, 116, 96)', ralname: 'Patina green'},
        {ralcolor: 'rgb(54, 103, 53)', ralname: 'Emerald green'},
        {ralcolor: 'rgb(50, 89, 40)', ralname: 'Leaf green'},
        {ralcolor: 'rgb(80, 83, 60)', ralname: 'Olive green'},
        {ralcolor: 'rgb(2, 68, 66)', ralname: 'Blue green'},
        {ralcolor: 'rgb(17, 66, 50)', ralname: 'Moss green'},
        {ralcolor: 'rgb(60, 57, 46)', ralname: 'Grey olive'},
        {ralcolor: 'rgb(44, 50, 34)', ralname: 'Bottle green'},
        {ralcolor: 'rgb(55, 52, 42)', ralname: 'Brown green'},
        {ralcolor: 'rgb(39, 53, 42)', ralname: 'Fir green'},
        {ralcolor: 'rgb(77, 111, 57)', ralname: 'Grass green'},
        {ralcolor: 'rgb(108, 124, 89)', ralname: 'Reseda green'},
        {ralcolor: 'rgb(48, 61, 58)', ralname: 'Black green'},
        {ralcolor: 'rgb(125, 118, 90)', ralname: 'Reed green'},
        {ralcolor: 'rgb(71, 65, 53)', ralname: 'Yellow olive'},
        {ralcolor: 'rgb(61, 61, 54)', ralname: 'Black olive'},
        {ralcolor: 'rgb(0, 105, 76)', ralname: 'Turquoise green'},
        {ralcolor: 'rgb(88, 127, 64)', ralname: 'May green'},
        {ralcolor: 'rgb(97, 153, 59)', ralname: 'Yellow green'},
        {ralcolor: 'rgb(185, 206, 172)', ralname: 'Pastel green'},
        {ralcolor: 'rgb(5                                                                                                                                                                                                                                                                    5, 66, 47)', ralname: 'Chrome green'},
        {ralcolor: 'rgb(138, 153, 119)', ralname: 'Pale green'},
        {ralcolor: 'rgb(58, 51, 39)', ralname: 'Olive drab'},
        
        {ralcolor: 'rgb(94, 110, 59)', ralname: 'Fern green'},
        {ralcolor: 'rgb(0, 95, 78)', ralname: 'Opal green'},
        {ralcolor: 'rgb(126, 186, 181)', ralname: 'Light green'},
        {ralcolor: 'rgb(49, 84, 66)', ralname: 'Pine green'},
        {ralcolor: 'rgb(0, 111, 61)', ralname: 'Mint green'},
        {ralcolor: 'rgb(35, 127, 82)', ralname: 'Signal green'},
        {ralcolor: 'rgb(70, 135, 127)', ralname: 'Mint turquoise'},
        {ralcolor: 'rgb(122, 172, 172)', ralname: 'Pastel turquoise'},
        {ralcolor: 'rgb(25, 77, 37)', ralname: 'Pearl green'},
        {ralcolor: 'rgb(4, 87, 75)', ralname: 'Pearl opal green'},
        {ralcolor: 'rgb(0, 139, 41)', ralname: 'Pure green'},
        
        {ralcolor: 'rgb(122, 136, 142)', ralname: 'Squirrel grey'},
        {ralcolor: 'rgb(140, 150, 157)', ralname: 'Silver grey'},
        {ralcolor: 'rgb(129, 120, 99)', ralname: 'Olive grey'},
        {ralcolor: 'rgb(122, 118, 105)', ralname: 'Moss grey'},
        {ralcolor: 'rgb(155, 155, 155)', ralname: 'Signal grey'},
        {ralcolor: 'rgb(108, 110, 107)', ralname: 'Mouse grey'},
        {ralcolor: 'rgb(118, 106, 94)', ralname: 'Beige grey'},
        
        {ralcolor: 'rgb(93, 96, 88)', ralname: 'Green grey'},
        {ralcolor: 'rgb(88, 92, 86)', ralname: 'Tarpaulin grey'},
        {ralcolor: 'rgb(82, 89, 93)', ralname: 'Iron grey'},
        {ralcolor: 'rgb(87, 93, 94)', ralname: 'Basalt grey'},
        {ralcolor: 'rgb(87, 80, 68)', ralname: 'Brown grey'},
        {ralcolor: 'rgb(79, 83, 88)', ralname: 'Slate grey'},
        {ralcolor: 'rgb(56, 62, 66)', ralname: 'Anthracite grey'},
        {ralcolor: 'rgb(47, 50, 52)', ralname: 'Black grey'},
        {ralcolor: 'rgb(76, 74, 68)', ralname: 'Umbra grey'},
        {ralcolor: 'rgb(128, 128, 118)', ralname: 'Concrete grey'},
        {ralcolor: 'rgb(69, 73, 78)', ralname: 'Graphite grey'},
        {ralcolor: 'rgb(55, 67, 69)', ralname: 'Granite grey'},
        {ralcolor: 'rgb(146, 142, 133)', ralname: 'Stone grey'},
        {ralcolor: 'rgb(91, 104, 109)', ralname: 'Blue grey'},
        {ralcolor: 'rgb(181, 176, 161)', ralname: 'Pebble grey'},
        {ralcolor: 'rgb(127, 130, 116)', ralname: 'Cement grey'},
        {ralcolor: 'rgb(146, 136, 111)', ralname: 'Yellow grey'},
        {ralcolor: 'rgb(197, 199, 196)', ralname: 'Light grey'},
        {ralcolor: 'rgb(151, 147, 146)', ralname: 'Platinum grey'},
        {ralcolor: 'rgb(122, 123, 122)', ralname: 'Dusty grey'},
        {ralcolor: 'rgb(176, 176, 169)', ralname: 'Agate grey'},
        {ralcolor: 'rgb(107, 102, 94)', ralname: 'Quartz grey'},
        {ralcolor: 'rgb(152, 158, 161)', ralname: 'Window grey'},
        {ralcolor: 'rgb(142, 146, 145)', ralname: 'Traffic grey A'},
        {ralcolor: 'rgb(79, 82, 80)', ralname: 'Traffic grey B'},
        
        {ralcolor: 'rgb(141, 146, 149)', ralname: 'Telegrey 1'},
        {ralcolor: 'rgb(127, 134, 138)', ralname: 'Telegrey 2'},
        {ralcolor: 'rgb(200, 200, 199)', ralname: 'Telegrey 4'},
        {ralcolor: 'rgb(129, 123, 115)', ralname: 'Pearl mouse grey'},
        {ralcolor: 'rgb(137, 105, 62)', ralname: 'Green brown'},
        {ralcolor: 'rgb(157, 98, 43)', ralname: 'Ochre brown'},
        
        {ralcolor: 'rgb(126, 75, 38)', ralname: 'Clay brown'},
        {ralcolor: 'rgb(141, 73, 49)', ralname: 'Copper brown'},
        {ralcolor: 'rgb(112, 69, 42)', ralname: 'Fawn brown'},
        {ralcolor: 'rgb(114, 74, 37)', ralname: 'Olive brown'},
        {ralcolor: 'rgb(90, 56, 38)', ralname: 'Nut brown'},
        {ralcolor: 'rgb(102, 51, 43)', ralname: 'Red brown'},
        {ralcolor: 'rgb(74, 53, 38)', ralname: 'Sepia brown'},
        {ralcolor: 'rgb(94, 47, 38)', ralname: 'Chestnut brown'},
        {ralcolor: 'rgb(76, 43, 32)', ralname: 'Mahogany brown'},
        {ralcolor: 'rgb(68, 47, 41)', ralname: 'Chocolate brown'},
        {ralcolor: 'rgb(61, 54, 53)', ralname: 'Grey brown'},
        {ralcolor: 'rgb(26, 23, 24)', ralname: 'Black brown'},
        {ralcolor: 'rgb(164, 87, 41)', ralname: 'Orange brown'},
        {ralcolor: 'rgb(121, 80, 56)', ralname: 'Beige brown'},
        {ralcolor: 'rgb(117, 88, 71)', ralname: 'Pale brown'},
        {ralcolor: 'rgb(81, 58, 42)', ralname: 'Terra brown'},
        {ralcolor: 'rgb(127, 64, 49)', ralname: 'Pearl copper'},
        {ralcolor: 'rgb(233, 224, 210)', ralname: 'Cream'},
        {ralcolor: 'rgb(215, 213, 203)', ralname: 'Grey white'},
        {ralcolor: 'rgb(14, 14, 16)', ralname: 'Jet black'},
        {ralcolor: 'rgb(161, 161, 160)', ralname: 'White aluminium'},
        {ralcolor: 'rgb(135, 133, 129)', ralname: 'Grey aluminium'},
        {ralcolor: 'rgb(241, 236, 225)', ralname: 'Pure white'},
        {ralcolor: 'rgb(39, 41, 43)', ralname: 'Graphite black'},
        {ralcolor: 'rgb(241, 240, 234)', ralname: 'Traffic white'},
        {ralcolor: 'rgb(42, 41, 42)', ralname: 'Traffic black'},
        {ralcolor: 'rgb(200, 203, 196)', ralname: 'Papyrus white'},
        {ralcolor: 'rgb(133, 133, 131)', ralname: 'Pearl light grey'},
        {ralcolor: 'rgb(121, 123, 122)', ralname: 'Pearl dark grey'}
    ] 
    
  }
})();
