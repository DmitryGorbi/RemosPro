"use strict";
import { isEscEvent, onTogglerClick } from "./util.js";

const mainNav = document.querySelector(".navigation");
const burgerToggler = mainNav.querySelector(".toggler");
const userActionsNav = document.querySelector(".user-actions");

const clickBurgerToggler = onTogglerClick.bind(null, burgerToggler);
// burgerToggler.addEventListener('click', clickBurgerToggler);

burgerToggler.addEventListener("click", (evt) => {
  clickBurgerToggler(evt);
  if (burgerToggler.getAttribute("aria-expanded") === "true") {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
});

mainNav.addEventListener("keyup", (evt) => {
  if (evt.code === "Escape") {
    burgerToggler.setAttribute("aria-expanded", false);
    burgerToggler.focus();
  }
});

const mediaQuery = window.matchMedia("(min-width: 1240px)");
if (mediaQuery.matches) {
  document.removeEventListener("click", clickBurgerToggler);
}

const subMenuButtonIcon = mainNav.querySelectorAll(".nav__icon");

const mainNavLinks = mainNav.querySelectorAll(".nav__link span");

const subMenuButtons = mainNav.querySelectorAll(".nav__toggler");

const subMenuToggler = (array) => {
  array.forEach((item, index) => {
    item.addEventListener("click", (evt) => {
      evt.preventDefault();
      const isOpen = item.getAttribute("aria-expanded") === "false";

      array.forEach((el, ind) => {
        if (isOpen) {
          el.setAttribute("aria-expanded", false);
          mainNavLinks[ind].classList.remove("change-color");
          subMenuButtonIcon[ind].classList.remove("rotate");
        }
      });

      item.setAttribute("aria-expanded", isOpen);
      if (isOpen) {
        mainNavLinks[index].classList.add("change-color");
        subMenuButtonIcon[index].classList.add("rotate");
      } else {
        mainNavLinks[index].classList.remove("change-color");
        subMenuButtonIcon[index].classList.remove("rotate");
      }
    });
  });
};

subMenuToggler(subMenuButtons);

const userNav = document.querySelector(".user-nav");
const userNavToggler = userNav.querySelector(".user-nav__toggler");

const clickProfileToggler = onTogglerClick.bind(null, userNavToggler);
userNavToggler.addEventListener("click", clickProfileToggler);

// Модальные окна с регистрацией

const buttonLogIn = userNav.querySelector(".user-nav__button");
const modalLogin = document.querySelector(".modal--login");
const modalReg = document.querySelector(".modal--reg");
const buttonModalClose = document.querySelector(".modal__button-close");
const inputMail = document.getElementById("userEmail");
// const regModalLink = modalLogin.querySelector('.user-nav__button');
// console.log(regModalLink);

const onButtonClose = (evt) => {
  let target = evt.target;
  if (target === buttonModalClose) {
    modalLogin.classList.remove("show");
  }
};

const onEscClose = (evt) => {
  if (isEscEvent(evt)) {
    modalLogin.classList.remove("show");
  }
};

buttonLogIn.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalLogin.classList.toggle("show");
  modalLogin.addEventListener("click", onButtonClose);
  inputMail.focus();

  if (!modalLogin.classList.contains("show")) {
    modalLogin.removeEventListener("click", onButtonClose);
    document.removeEventListener("keydown", onEscClose);
  } else {
    document.addEventListener("keydown", onEscClose);
    regModalLink.addEventListener("click", (evt) => {
      evt.preventDefault();
      modalLogin.classList.remove("show");
      modalReg.classList.add("show");
    });
  }
});

//
let inputSearch = document.querySelectorAll(".input--modal");
let popupLocation = document.querySelectorAll(".modal-search");
console.log(inputSearch);

const buttonLocation = document.querySelector(".button-location");
const modalLocation = document.querySelector(".modal-location");

buttonLocation.addEventListener("click", () => {
  console.log("click");
  modalLocation.classList.toggle("show");
});

// inputSearch[0].addEventListener('input', () => {
//   popupLocation[0].style.display = 'block';
// });

// document.addEventListener('keydown', () => {
//   if (isEscEvent) {
//     popupLocation[0].style.display = 'none';
//     inputSearch[0].texContent = '';
//   }
// });

// inputSearch[1].addEventListener('input', () => {
//   popupLocation[1].style.display = 'block';
// });

// document.addEventListener('keydown', () => {
//   if (isEscEvent) {
//     popupLocation[1].style.display = 'none';
//     inputSearch[1].textContent = '';
//   }
// });
