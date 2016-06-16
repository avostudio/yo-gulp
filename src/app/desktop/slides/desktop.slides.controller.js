(function() {
  'use strict';

  angular
    .module('yoGulp')
    .controller('DesktopSlidesController', DesktopSlidesController)
    .animation('.slide-animation', SlideAnimation);

  /** @ngInject */
  DesktopSlidesController.$inject = ['$http', '$timeout', '$interval', 'Swiper', 'galleryNumber'];

  function DesktopSlidesController($http, $timeout, $interval, Swiper, galleryNumber) {
    var slides = this;
    $timeout(function() {
      //slides.gallery = [{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_053.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_052.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_054.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_051.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_050.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_049.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_048.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_047.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_046.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_045.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_043.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_042.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_040.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_038.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_037.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_036.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_034.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_033.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_032.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_031.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_001_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_002.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_003.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_005.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_006.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_007.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_008.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_011.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_013.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_014.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_015.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_017.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_018.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_020.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_021.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_022.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_023_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_024.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_025.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_026.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_027.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_028.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_029.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_492.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_883.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_1028.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_817.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_973.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_964.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_953.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_914.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_902.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_857.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_831.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_812.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_785.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_783.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_776.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_1035.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_751.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_750.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_738.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_670.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_666.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_659.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_651.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_567.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_543.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_521.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_462.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_417.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_365.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_343.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_295.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_286.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_136.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_111.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_106.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_030.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_089.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_743.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_1257_1280_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_DSCN1082_bearb_1280_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_001.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_002.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_003.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_004.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_005.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_006.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_007.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_008.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_010.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_011.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_019.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_013.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_014.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_016.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_017.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_018.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_021.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_022.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_023.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_024.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_025.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_026.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_027.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_028.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_030.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_032.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_033.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_035.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_036.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_037.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_038.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_039.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_040.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_041.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_042.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_043.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_044.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_045.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_046.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_049.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_050.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_052.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_053.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_054.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_055.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_056.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_057.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_063.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_065.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_067.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_068.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_069.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_070.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_071.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_073.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_075.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_080.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_081.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_gallerie_082.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_IMG_0921_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_IMG_1126_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_IMG_1132_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_IMG_1201_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_IMG_1227_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_IMG_1232_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_IMG_1233_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_IMG_1234_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_violett1366_.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_538.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_hochzeiten_691.jpg"}];    
      slides.gallery = [{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/j2015_new_053.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/j2015_new_052.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/j2015_new_054.jpg"}];
    }, 400);
    //slides.slides = [{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_053.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_052.jpg"},{"src":"http:\/\/diamant-dekowelt.de\/admin\/uploads\/album_16\/th3_j2015_new_054.jpg"}];
    slides.currentIndex = 0;

    slides.setCurrentSlideIndex = function (index) {
        slides.currentIndex = index;
    };

    slides.isCurrentSlideIndex = function (index) {
        return slides.currentIndex === index;
    };

    slides.prevSlide = function () {
        slides.currentIndex = (slides.currentIndex < slides.slides.length - 1) ? ++slides.currentIndex : 0;
    };

    slides.nextSlide = function () {
        slides.currentIndex = (slides.currentIndex > 0) ? --slides.currentIndex : slides.gallery.length - 1;
    };

    $interval(slides.nextSlide, 3000);    
    
    /*$http.get('http://diamant-dekowelt.de/admin/getGallery.php?id=' + galleryNumber).then(function (response) {
      $timeout(function() {
        slides.gallery = response;  
      });      
      return response;
    }, errorHandler);*/

    function errorHandler(errorMessage) {
      console.log(errorMessage);
    }
  }

  function SlideAnimation() {
    return {
        addClass: function (element, className, done) {
            if (className == 'ng-hide') {
                TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                TweenMax.set(element, { left: element.parent().width() });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done });
            }
            else {
                done();
            }
        }
    };
  }     
})();
    ;
