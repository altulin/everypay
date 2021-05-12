/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



// import { createListenerModal } from './modules/modal.js';





const width = window.innerWidth;
const tabletWidth = 768;

const handlerListener = () => {
  Object(_modules_swiper_js__WEBPACK_IMPORTED_MODULE_1__["createCasesSlider"])();
  MicroModal.init();

  Object(_modules_forms_js__WEBPACK_IMPORTED_MODULE_2__["submitForm"])();

  if (width <= tabletWidth) {
    Object(_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__["makeMenu"])();
    Object(_modules_swiper_js__WEBPACK_IMPORTED_MODULE_1__["createAdvantagesSlider"])();

  }

};

const makeListener = addEventListener(`DOMContentLoaded`, handlerListener)


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMenu", function() { return makeMenu; });
const header_nav = document.querySelector("#header-nav");
const link_open = document.querySelector(`.header__link--open`);
const link_close = document.querySelector(`.header__link--close`);
const links_menu = document.querySelectorAll(`.nav-top__link`)


const makeMenu = () => {
  if (header_nav) {
    const menu = new MmenuLight(
      header_nav,
      "(max-width: 768px)"
    );

    const navigator = menu.navigation({
      title: ``
    });

    const drawer = menu.offcanvas();

    link_open.addEventListener("click", (e) => {
      e.preventDefault();
      drawer.open();
      link_open.classList.add(`hidden-link`)
      link_close.classList.remove(`hidden-link`)
    });


    link_close.addEventListener("click", (e) => {
      e.preventDefault();
      drawer.close();
      link_close.classList.add(`hidden-link`)
      link_open.classList.remove(`hidden-link`)
    });

    for (const item of links_menu) {
      item.addEventListener(`click`, () => {
        drawer.close();
        link_close.classList.add(`hidden-link`)
        link_open.classList.remove(`hidden-link`)
      })
    }






  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAdvantagesSlider", function() { return createAdvantagesSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCasesSlider", function() { return createCasesSlider; });
const advantages_inner = document.querySelector(`.advantages__inner`);
const cases_inner = document.querySelector(`.cases__inner`);

const createAdvantagesSlider = () => {

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

const createCasesSlider = () => {
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetErr", function() { return resetErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitForm", function() { return submitForm; });
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

const validateEmail = (email) => {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
};
const formList = Array.from(document.querySelectorAll(`.valid`));
const elems = Array.from(document.querySelectorAll(`.val-elem`));
const form_big_el = Array.from(document.querySelector(`.form-big`).querySelectorAll(`.val-elem`))


const validate = (e) => {
  let valid_flag = false;

  let email_flag = false;
  let name_flag = false;
  let text_flag = false;
  e.preventDefault();
  const form = e.target;
  const val_elems = Array.from(form.querySelectorAll(`.val-elem`))

  if (form.matches(`.form-simple`)) {
    val_elems.map((item) => {
      if (item.matches(`.val-elem--email`)) {
        const email = item.value

        if (validateEmail(email)) {
          valid_flag = true
        }
      }

      if (valid_flag) {
        sendForm(form);
      } else {
        form.classList.add(`not-valid`)
      }
    });
  }


  if (form.matches(`.form-big`)) {
    val_elems.map((item) => {
      if (item.matches(`.val-elem--email`)) {
        if (validateEmail(item.value)) {
          email_flag = true
        } else {
          item.classList.add(`not-val`)
        }
      }

      if (item.matches(`.val-elem--name`)) {
        // console.log(item.value.length)
        if (item.value.length > 0) {
          name_flag = true
        } else {
          item.classList.add(`not-val`)
        }
      }

      if (item.matches(`.val-elem--textarea`)) {
        if (item.value.length > 0) {
          text_flag = true
        } else {
          item.classList.add(`not-val`)
        }
      }

      if (email_flag && name_flag && text_flag) {
        sendForm(form);
      } else {
        form.classList.add(`not-valid`)
      }
    })
  }
};

const success = (form) => {
  try {
    form.querySelector(`.form-simple__banner`).classList.add(`success`)
  } catch { }

  if (form.matches(`.form-big`)) {
    Object(_modal_js__WEBPACK_IMPORTED_MODULE_0__["createListenerModal"])()
    MicroModal.show('modal-1');

  }
};

const sendForm = (form) => {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://httpbin.org/anything', true);
  request.addEventListener('readystatechange', function () {
    if ((request.readyState == 4) && (request.status == 200)) {
      success(form);
    }
  });
  request.send();
};


// reset err
const resetErr = (formList) => {
  elems.map((item) => {
    item.addEventListener(`click`, () => {
      formList.map((elem) => elem.classList.remove(`not-valid`))
    })
  })

  // const val_el = form_big.querySelector
  form_big_el.map((el) => {
    el.addEventListener(`click`, () => {
      form_big_el.map((n) => n.classList.remove(`not-val`))
    })
  })
};


const submitForm = () => {
  if (formList.length > 0) {
    resetErr(formList)
    formList.map((item) => {
      item.addEventListener(`submit`, (e) => {
        validate(e);
      })
    })
  }
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListenerModal", function() { return createListenerModal; });
const createListenerModal = () => document.querySelector(`.success-modal__btn`).addEventListener(`click`, () => {
  MicroModal.close('modal-1');
})


/***/ })
/******/ ]);