import Swiper from './swiper-bundle.min2';

const sliders = document.querySelectorAll('.swiper');
var mySwipers = [];

function sliderInit() {
  sliders.forEach((slider, index) => {
    if (!slider.swiper) {
      mySwipers[index] = new Swiper('.swiper', {
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
    } else {
      return
    }
  })
}

function sliderDestroy() {
  sliders.forEach((slider, index) => {
    if (slider.swiper) {
      mySwipers[0][index].destroy(true, true);
    }
  })
}

function checker() {
  if (window.innerWidth >= 768) {
    sliderDestroy()
  } else {
    sliderInit()
  }
}

checker();

window.addEventListener('resize', () => { checker() });

