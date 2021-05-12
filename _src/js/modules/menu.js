import MmenuLight from 'mmenu-light';

const header_nav = document.querySelector("#header-nav");
const link_open = document.querySelector(`.header__link--open`);
const link_close = document.querySelector(`.header__link--close`);
const links_menu = document.querySelectorAll(`.nav-top__link`)


export const makeMenu = () => {
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
