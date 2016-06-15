(function() {
  'use strict';

  angular
    .module('yoGulp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true        
      })

      // DESKTOP STATES

      .state('root.desktop', {
        abstract: true
      })
      .state('root.desktop.home', {
        url: '/',
        views: {
          '@': {
            controller: 'DesktopHomeController',
            controllerAs: 'home',
            templateUrl: 'app/desktop/home/desktop.home.html'
          }
        },
        resolve: {
          isMobile: ['$window', function isMobile($window) {
            return $window.document.body.clientWidth <= 767;
          }]
        },
        onEnter: ['$state', 'isMobile', function onEnter($state, isMobile) {
          console.log('isMobile: ' + isMobile);
          if (isMobile) {
            $state.go('root.mobile.home');
          }
        }]      
      })


      // MOBILE STATES

      .state('root.mobile', {
        abstract: true,
        url: '/mobile'
      })
      .state('root.mobile.home', {
        url: '/home',
        views: {
          '@': {
            controller: 'MobileHomeController',
            controllerAs: 'mobileHome',
            templateUrl: 'app/mobile/home/mobile.home.html'
          }
        }        
      });
      /*.state('gallery', {
        url: '/Galerie',
        views: {
          '@': {

          }
        },

      });*/
    $urlRouterProvider.otherwise('/');
  }

})();
