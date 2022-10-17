
export var suggestions_swiper = new Swiper('.offers-swiper-container', {
  slidesPerView: 3,
  //spaceBetween: 20,
  loop: true,
  watchOverflow: false,
  //centeredSlides: true,
  pagination: {
      //el: '.swiper-pagination',
      //clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      20: {
          slidesPerView: 1,
          spaceBetween: 20
      },
      360: {
          slidesPerView: 2,
          spaceBetween: 15
      },
      650: {
          slidesPerView: 3,
          spaceBetween: 15
      },
      850: {
          slidesPerView: 4,
          spaceBetween: 15
      },
      1000: {
          slidesPerView: 5,
          spaceBetween: 15
      }

  },
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
});
