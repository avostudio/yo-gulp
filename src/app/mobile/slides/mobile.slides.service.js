(function() {
  'use strict';

  angular.module('yoGulp').
  factory('MobileSlidesService', MobileSlidesService);

  MobileSlidesService.$inject = ['$http'];

  function MobileSlidesService($http) {
    function getGallery(num) {
    	return $http.get('http://diamant-dekowelt.de/admin/getGalleryForMobile.php?id='+num).then(successHandler, errorHandler);
    }

    function successHandler(response) {
      var data = response.data;
      return response.data;
    }

    function errorHandler(errorMessage) {
      console.log(errorMessage);
    }
    
    return {
    	getGallery: getGallery
    };
  }

})();
	