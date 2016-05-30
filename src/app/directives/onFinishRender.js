(function() {
  'use strict';

  angular
    .module('yoGulp')
    .directive('onFinishRender', onFinishRender);

  /** @ngInject */
  onFinishRender.$inject = ['$timeout'];

  function onFinishRender($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$eval(attr.onFinishRender);;
                });
            }
        }
    }     
  }
})();
