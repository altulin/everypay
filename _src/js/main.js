import { makeMenu } from './modules/menu.js';
import { createAdvantagesSlider, createCasesSlider } from './modules/swiper.js';
import { submitForm } from './modules/forms.js';

const width = window.innerWidth;
const tabletWidth = 768;

const handlerListener = () => {
  createCasesSlider();

  submitForm();

  if (width <= tabletWidth) {
    makeMenu();
    createAdvantagesSlider();

  }

};

const makeListener = addEventListener(`DOMContentLoaded`, handlerListener)
