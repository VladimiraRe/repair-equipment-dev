import Swiper from './swiper-bundle.min2';

var isActive = false;
var swiper;

function swiperActivation() {
  if (window.innerWidth < 768 && !isActive) {
    isActive = true;

    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      spaceBetween: 16,
      slidesPerView: 1.185,
      roundLengths: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        360: {
          slidesPerView: 1.35,
        },
        480: {
          slidesPerView: 1.7,
        },
        576: {
          slidesPerView: 2.3,
        },
        640: {
          slidesPerView: 2.5,
        },
      }
    });
    } else if (isActive && window.innerWidth >= 768) {
      swiper.destroy();
      isActive = false;
  }
}

swiperActivation();

window.addEventListener('resize', swiperActivation);

