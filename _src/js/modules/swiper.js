
import Swiper from 'swiper';
const advantages_inner = document.querySelector(`.advantages__inner`);
const cases_inner = document.querySelector(`.cases__inner`);

export const createAdvantagesSlider = () => {

  if (advantages_inner) {
    const advantages_swiper = new Swiper('.advantages__inner', {
      loop: true,
      spaceBetween: 20,
      autoHeight: true,
      navigation: {
        nextEl: '.advantages__next',
        prevEl: '.advantages__prev',
      }
    });
  }


};

export const createCasesSlider = () => {
  if (cases_inner) {
    const cases_swiper = new Swiper('.cases__inner', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        320: {
          slidesPerView: `auto`,
          spaceBetween: 20
        }
      }
    });
  }

};
