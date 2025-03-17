import { changeActiveClass, isEscEvent } from "./util.js";

const filter = document.querySelector(".filter");
const buttonsFilter = filter.querySelectorAll(".button-filter");
const buttonIcon = filter.querySelectorAll(".button-filter__icon");
const filterFieldset = filter.querySelectorAll(".filter__fieldset-js");
const buttonsTitle = filter.querySelectorAll(".button-filter__title");
const buttonClose = document.querySelectorAll(".button-close");
const buttonFilterDeal = filter.querySelector(".button-filter--deal");
const buttonFilterPrice = filter.querySelector(".button-filter--price");

// Показ/скрытие списка свойств для select type/price на мобиле/десктопе

// const visibilityButtons = () => {
//   const isMobile = window.innerWidth < 768;
//   buttonFilterDeal.setAttribute('aria-expanded', isMobile);
//   buttonFilterPrice.setAttribute('aria-expanded', isMobile);
// };

// document.addEventListener('DOMContentLoaded', visibilityButtons);
// window.addEventListener('resize', visibilityButtons);

const addClass = (el, selector) => {
  el.classList.add(selector);
};

// Toggle Select

const inputClickSelect = (evt) => {
  let target = evt.target;
  if (target.matches('input[type="radio"]')) {
    closeSelect(select, icon);
  }
};

const isEscKeydown = () => {
  if (isEscEvent(evt)) {
    closeSelect(select, icon);
  }
};

// document.addEventListener('keydown', isEscKeydown);
//   if (mediaQueryTablet.matches) {
//     filter.addEventListener('click', inputClickSelect);
//   }

const selectToggler = (array) => {
  array.forEach((element, index) => {
    element.addEventListener("click", () => {
      const isOpen = element.getAttribute("aria-expanded") === "false";
      array.forEach((el) => {
        el.setAttribute("aria-expanded", false);
      });

      element.setAttribute("aria-expanded", isOpen);
      // if (isOpen) {
      //   document.addEventListener('click', isEscKeydown);
      // }
      // else {
      //   window.addEventListener('click', (evt) => {
      //     element.setAttribute('aria-expanded', false);
      //   });
      // }
    });
  });
};

selectToggler(buttonsFilter);

const closeSelect = (item, icon) => {
  item.classList.remove("show");
  icon.classList.remove("rotate180");
};

// Change text in a button

// const changeButtonsTitle = (fieldset, title) => {
//   fieldset.addEventListener('click', (evt) => {
//     if (evt.target.matches('input[type="radio"]')) {
//       title.textContent = evt.target.value;
//     }
//   });
// };

// for (let i = 0; i < buttonsTitle.length; i++) {
//   changeButtonsTitle(filterFieldset[i], buttonsTitle[i]);
// }

// Close select on click outside

// const filterMobile = filter.querySelector('.main-search--adaptive');

if (document.querySelector(".catalog-menu__filter") && document.querySelector(".main-search--adaptive")) {
  const filterMobile = document.querySelector(".main-search--adaptive");
  const mobileFilterButton = document.querySelector(".catalog-menu__filter");
  console.log(filterMobile);
  mobileFilterButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    filterMobile.classList.toggle("show");
  });
}

let buttonSubway = document.querySelector(".search__button-js-metro");
let subwayModal = document.querySelector(".geo-modal--subway");

buttonSubway.addEventListener("click", () => {
  subwayModal.classList.toggle("show");
});

let buttonArea = document.querySelector(".search__button-js-area");
let areaModal = document.querySelector(".geo-modal--area");

buttonArea.addEventListener("click", () => {
  areaModal.classList.toggle("show");
});

let inputSearch = document.querySelectorAll(".input-hints");
let hintModals = document.querySelectorAll(".hints");
let inputSearchButtons = document.querySelectorAll(".search-field__control");
console.log(inputSearchButtons);

for (let i = 0; i < inputSearch.length; i++) {
  inputSearch[i].addEventListener("input", () => {
    hintModals[i].classList.add("show");
  });
}

for (let i = 0; i < inputSearchButtons.length; i++) {
  inputSearch[i].addEventListener("input", () => {
    inputSearchButtons[i].classList.add("show");
  });
}

for (let i = 0; i < inputSearchButtons.length; i++) {
  inputSearchButtons[i].addEventListener("click", () => {
    hintModals[i].classList.remove("show");
    inputSearchButtons[i].classList.remove("show");
    inputSearch[i].value = "";
  });
}
