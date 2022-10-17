import Swiper from './swiper-bundle.min2';

var mySwipers = [];
let isActive = false;

function checker() {
  if (!isActive && window.innerWidth < 768) {
    sliderInit();
    return
  }
  if (isActive && window.innerWidth >= 768) {
    sliderDestroy();
    return
  }
}

checker();

window.addEventListener('resize', () => { checker() });

function sliderInit() {
    mySwipers = new Swiper('.section__swiper', {
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
          slidesPerView: 1.185 + 0.165,
        },
        480: {
          slidesPerView: 1.185 + 0.515,
        },
        576: {
          slidesPerView: 1.185 + 1.115,
        },
        640: {
          slidesPerView: 1.185 + 1.315,
        },
      }
    });
    mySwipers[2] = new Swiper('.section__swiper--big', {
      direction: 'horizontal',
      spaceBetween: 16,
      slidesPerView: 1.1,
      roundLengths: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        360: {
          slidesPerView: 1.1 + 0.165,
        },
        480: {
          slidesPerView: 1.1 + 0.515,
        },
        576: {
          slidesPerView: 1.1 + 1.115,
        },
        640: {
          slidesPerView: 1.1 + 1.315,
        },
      }
    });
    isActive = true;
}

function sliderDestroy() {
  mySwipers.forEach((swiper) => {
    swiper.destroy(true, true);
    isActive = false;
  })
}

