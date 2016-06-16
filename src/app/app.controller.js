(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('AppController', AppController);

  /** @ngInject */
  AppController.$inject = ['$rootScope', '$window', '$timeout', '$state'];

  function AppController($rootScope, $window, $timeout, $state) {
    var delay = 150;
    var delayed = null;
    var body = $window.document.body;
    var isMobileView;

    $rootScope.$on('$viewContentLoaded',
        function () {
            $rootScope.isMobileView = detectMobileView();
        }
    );

    onResize();

    $window.addEventListener('resize', onResize);

    function onResize() {
        if (delayed) { $timeout.cancel(delayed); }
        delayed = $timeout(function () {
            broadcastEvent();
            delayed = null;
        }, delay, true);
    }

    function broadcastEvent() {
        var isNewViewMobile = detectMobileView();
        if (isMobileView !== isNewViewMobile) {
            $rootScope.isMobileView = isMobileView = isNewViewMobile;
            switchStates();
        }
    }

    function detectMobileView() {
        var clientWidth = body.clientWidth;
        return $window.document.body <= 767;
    }

    function switchStates() {
      var stateParts = $state.current.name.split('.');
      var currentStateSuffix = stateParts[stateParts.length-1];
      if (isMobileView) {
        $state.go('root.mobile.' + currentStateSuffix);
      } else {
        $state.go('root.desktop.' + currentStateSuffix);
      }
    }  
  }      
})();
