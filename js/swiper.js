$(document).ready(function (){
            
            
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                  spaceBetween: 0,
                  slidesPerView: 11,
                  freeMode: true,
                  watchSlidesVisibility: true,
                  watchSlidesProgress: true,
                });
            
                /*var galleryTop = new Swiper('.gallery-top', {
                  autoHeight: true,
                  spaceBetween: 0,
                  roundLengths: true,
                  centeredSlides: true,
                  slidesPerView: 'auto',
                  slidesPerColumnFill: 'row',
                  centerInsufficientSlides: true,
                  loop: true,
                  normalizeSlideIndex: true,
                  centerInsufficientSlides: true,
                    
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                  thumbs: {
                    swiper: galleryThumbs
                  }
                });*/
    
                var swiper = new Swiper('.swiper-container', {
                    
                  slidesPerView: 'auto',
                  centeredSlides: true,
                  loop: true,
                  spaceBetween: 0,
                  normalizeSlideIndex: true,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                   navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }
                });
         });