(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('MobileHomeController', MobileHomeController);

  /** @ngInject */
  MobileHomeController.$inject = ['$timeout', 'Swiper'];

  function MobileHomeController($timeout, Swiper) {
    var mobileHome = this;
    mobileHome.initSwiper = initSwiper;
    mobileHome.gallery = [
      {
        src: 'http://diamant-dekowelt.de/admin/uploads/album_16/th3_j2015_new_053.jpg'
      },
      {
        src: 'http://diamant-dekowelt.de/admin/uploads/album_16/th3_j2015_new_053.jpg'
      },
      {
        src: 'http://diamant-dekowelt.de/admin/uploads/album_16/th3_j2015_new_053.jpg'
      }
    ];

    //$timeout(initSwiper, 2000);

    function initSwiper() {
       mobileHome.swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoHeight: false,
        setWrapperSize: false,
        spaceBetween: 100,
        slidesPerView: 'auto',
        loopedSlides: 10,
        centeredSlides: true
      });  
    }

   
  }
})();
