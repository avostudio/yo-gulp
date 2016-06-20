(function() {
  'use strict';

  angular.module('yoGulp.PhotoSwipe', []).
  directive('photoSwipe', photoSwipe);

  function photoSwipe() {
    return {
      restrict: 'A',
      scope: true, 
      controller: photoSwipeController,
      templateUrl: 'app/components/PhotoSwipe/photoSwipe.html'
    };
  }

  photoSwipeController.$inject = ['$scope'];
  function photoSwipeController($scope) {
  	$scope.$on('initPhotoSwipe', initPhotoSwipe);

  	function initPhotoSwipe() {
  		var galleryElements = document.querySelectorAll('.photoswipe-gallery');

  		for(var i = 0, l = galleryElements.length; i < l; i++) {
  		  galleryElements[i].setAttribute('data-pswp-uid', i+1);
  		  galleryElements[i].onclick = onThumbnailsClick;
  		}
  	}

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items;

      items = parseThumbnailElements(galleryElement);

      // define options (if needed)
      options = {

          // define gallery index (for URL)
          index: parseInt(index, 10),
          history: false,

          getThumbBoundsFn: function(index) {
              // See Options -> getThumbBoundsFn section of documentation for more info
              var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                  pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect(); 

              return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
          }

      };

      // exit if index not found
      if( isNaN(options.index) ) {
          return;
      }

      if(disableAnimation) {
          options.showAnimationDuration = 0;
      }

      // Pass data to PhotoSwipe and initialize it
      gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
  	};

  	var onThumbnailsClick = function(e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;

      var eTarget = e.target || e.srcElement;

      // find root element of slide
      var clickedListItem = closest(eTarget, function(el) {
          return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
      });

      if(!clickedListItem) {
          return;
      }

      // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute
      var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for (var i = 0; i < numChildNodes; i++) {
          if(childNodes[i].nodeType !== 1) { 
              continue; 
          }

          if(childNodes[i] === clickedListItem) {
              index = nodeIndex;
              break;
          }
          nodeIndex++;
      }



      if(index >= 0) {
          // open PhotoSwipe if valid index found
          openPhotoSwipe( index, clickedGallery );
      }
      return false;
  	};

  	var parseThumbnailElements = function(el) {
      var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item;

      for(var i = 0; i < numNodes; i++) {

          figureEl = thumbElements[i]; // <figure> element

          // include only element nodes 
          if(figureEl.nodeType !== 1) {
              continue;
          }

          linkEl = figureEl.children[0]; // <a> element

          size = linkEl.getAttribute('data-size') && linkEl.getAttribute('data-size').split('x');
          // create slide object
          item = {
              src: linkEl.getAttribute('href'),
              w: size? parseInt(size[0], 10): (linkEl.firstElementChild? linkEl.firstElementChild.naturalWidth: 600),
              h: size? parseInt(size[1], 10): (linkEl.firstElementChild? linkEl.firstElementChild.naturalHeight: 400)
          };

          if(figureEl.children.length > 1) {
              // <figcaption> content
              item.title = figureEl.children[1].innerHTML; 
          }

          if(linkEl.children.length > 0) {
              // <img> thumbnail element, retrieving thumbnail url
              item.msrc = linkEl.children[0].getAttribute('src');
          } 

          item.el = figureEl; // save link to element for getThumbBoundsFn
          items.push(item);
      }

      return items;
  	};

  	var closest = function closest(el, fn) {
      return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

  }

})();