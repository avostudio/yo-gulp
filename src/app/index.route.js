(function() {
  'use strict';

  angular
    .module('yoGulp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true ,
        views: {
          '@': {
            controller: 'AppController',
            templateUrl: 'app/index.html'
          }  
        }             
      })

      // DESKTOP STATES

      .state('root.desktop', {
        abstract: true,
        views: {
          'app@root': {
            templateUrl: 'app/desktop/desktop.content.html'
          },
          'menu@root.desktop': {
            controller: 'DesktopMenuController',
            controllerAs: 'menu',
            templateUrl: 'app/desktop/menu/desktop.menu.html'
          },
          'logo@root.desktop': {
            templateUrl: 'app/desktop/logo/desktop.logo.html'
          }
        }
      })
      .state('root.desktop.home', {
        url: '/',
        views: {
          'content@root.desktop': {
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
          if (isMobile) {
            $state.go('root.mobile.home');
          }
        }]      
      })
      .state('root.desktop.galerie', {
        url: '/galerie',
        views: {
          'content@root.desktop': {
            controller: 'GalerieController',
            controllerAs: 'galerie',
            templateUrl: 'app/desktop/home/desktop.home.html'
          }
        }      
      })
      .state('root.desktop.floristik', {
        url: '/floristik',
        views: {
          'content@root.desktop': {
            controller: 'DesktopSlidesController',
            controllerAs: 'slides',
            templateUrl: 'app/desktop/slides/desktop.slides.html'
          }
        },
        resolve: {
          galleryNumber: [function () {
            return 13;
          }]
        },     
      })
      .state('root.desktop.dekoration', {
        url: '/dekoration',
        views: {
          'content@root.desktop': {
            controller: 'DesktopSlidesController',
            controllerAs: 'slides',
            templateUrl: 'app/desktop/slides/desktop.slides.html'
          }
        },
        resolve: {
          galleryNumber: [function () {
            return 16;
          }]
        }     
      })
      .state('root.desktop.verleih', {
        url: '/verleihroot.desktop',
        views: {
          'content@root.desktop': {
            controller: 'DesktopSlidesController',
            controllerAs: 'slides',
            templateUrl: 'app/desktop/slides/desktop.slides.html'
          },
          'textOverlay@root.desktop': {
            templateUrl: 'app/desktop/verleih/desktop.verleih.html'
          } 
        },
        resolve: {
          galleryNumber: [function () {
            return 16;
          }]
        }  
      })
      .state('root.desktop.kontakt', {
        url: '/kontakt',
        views: {
          'content@root.desktop': {
            controller: 'DesktopSlidesController',
            controllerAs: 'slides',
            templateUrl: 'app/desktop/slides/desktop.slides.html'
          },
          'textOverlay@root.desktop': {
            templateUrl: 'app/desktop/kontakt/desktop.kontakt.html'
          } 
        },
        resolve: {
          galleryNumber: [function () {
            return 13;
          }]
        }  
      })
      .state('root.desktop.impressum', {
        url: '/impressum',
        views: {
          'content@root.desktop': {
            controller: 'DesktopSlidesController',
            controllerAs: 'slides',
            templateUrl: 'app/desktop/slides/desktop.slides.html'
          },
          'textOverlay@root.desktop': {
            templateUrl: 'app/desktop/impressum/desktop.impressum.html'
          } 
        },
        resolve: {
          galleryNumber: [function () {
            return 16;
          }]
        }  
      })

      // MOBILE STATES

      .state('root.mobile', {
        abstract: true,
        url: '/mobile'
      })
      .state('root.mobile.home', {
        url: '/home',
        views: {
          '@root.mobile.home': {
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
