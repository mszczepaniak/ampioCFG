(function() {
  'use strict';

  angular
    .module('ampio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
