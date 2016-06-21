(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('MobileSlidesController', MobileSlidesController);

  /** @ngInject */
  MobileSlidesController.$inject = ['$scope', '$http', '$timeout', 'gallery'];

  function MobileSlidesController($scope, $http, $timeout, gallery) {
    var slides = this;
    slides.initPhotoswipe = initPhotoswipe;
    slides.gallery = gallery;
    /*slides.gallery = [
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
    ];*/    

    function initPhotoswipe() {
      $timeout($scope.$broadcast.bind($scope, 'initPhotoSwipe'));
    }
    
  }

})();
