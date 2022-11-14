import Swiper from './swiper-bundle.min2';

var mySwipers;
var isActive = false;

checker();

window.addEventListener('resize', () => {
    checker();
});

function checker() {
    if (!isActive && window.innerWidth < 768) {
        sliderInit();
        return;
    }
    if (isActive && window.innerWidth >= 768) {
        sliderDestroy(mySwipers);
        return;
    }
}

function sliderInit() {
    mySwipers = [
        newSwiper('.section__swiper', 1.185, [1.35, 1.7, 2.3, 2.5]),
        newSwiper('.section__swiper--big', 1.1, [1.3, 1.6, 2, 2.2])
    ];
    isActive = true;
}

function sliderDestroy(mySwipers) {
    mySwipers.forEach((swiper) => {
        Array.isArray(swiper)
            ? sliderDestroy(swiper)
            : swiper.destroy(true, true);
    });
    isActive = false;
}

function newSwiper(className, slidesPerView, breakpoints) {
    return new Swiper(className, {
        direction: 'horizontal',
        spaceBetween: 16,
        slidesPerView: slidesPerView,
        roundLengths: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            360: {
                slidesPerView: breakpoints[0]
            },
            480: {
                slidesPerView: breakpoints[1]
            },
            576: {
                slidesPerView: breakpoints[2]
            },
            640: {
                slidesPerView: breakpoints[3]
            }
        }
    });
}
