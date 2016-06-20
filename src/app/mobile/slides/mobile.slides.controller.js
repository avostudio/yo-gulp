(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('MobileSlidesController', MobileSlidesController);

  /** @ngInject */
  MobileSlidesController.$inject = ['$scope', '$http', '$timeout', 'Swiper', 'galleryNumber'];

  function MobileSlidesController($scope, $http, $timeout, Swiper, galleryNumber) {
    var slides = this;
    slides.initPhotoswipe = initPhotoswipe;
    slides.gallery = [
      {
        "thumb": "http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th1_j2015_new_053.jpg",
        "src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_053.jpg",
        "w": "320",
        "h": "177"
      },
      {
        "thumb": "http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th1_j2015_new_052.jpg",
        "src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_052.jpg",
        "w": "320",
        "h": "177"
      },
      {
        "thumb": "http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th1_j2015_new_054.jpg",
        "src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_054.jpg",
        "w": "320",
        "h": "177"
      }
    ];    
    

    function errorHandler(errorMessage) {
      console.log(errorMessage);
    }

    function initPhotoswipe() {
      $timeout($scope.$broadcast.bind($scope, 'initPhotoSwipe'));
    }
    
  }

})();
