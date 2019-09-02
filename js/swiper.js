$(document).ready(function (){
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 0,
      slidesPerView: 'auto',
      centeredSlides: true,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      loop:true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      breakpoints: {
        940: {
          slidesPerView: 1,
        },
    }
    });
});
