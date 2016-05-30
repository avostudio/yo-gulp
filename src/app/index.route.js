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
      .state('root.mobile', {
        abstract: true
      })
      .state('root.mobile.home', {
        url: '/',
        views: {
          '@': {
            controller: 'MobileHomeController',
            controllerAs: 'mobileHome',
            templateUrl: 'app/mobile/home/home.html'
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
