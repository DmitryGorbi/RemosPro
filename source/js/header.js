'use strict';

const mainNav = document.querySelector('.navigation');
const burgerToggler = mainNav.querySelector('.toggler');
const userActionsNav = document.querySelector('.user-actions');

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const onTogglerClick = (item, evt) => {
  evt.preventDefault();
  const isOpen = item.getAttribute('aria-expanded') === 'false';
  item.setAttribute('aria-expanded', isOpen);
  console.log('click');
};

const clickBurgerToggler = onTogglerClick.bind(null, burgerToggler);

burgerToggler.addEventListener('click', clickBurgerToggler);

mainNav.addEventListener('keyup', (evt) => {
  if (evt.code === 'Escape') {
    burgerToggler.setAttribute('aria-expanded', false);
    burgerToggler.focus();
  }
});

const mediaQuery = window.matchMedia('(min-width: 1240px)');
if (mediaQuery.matches) {
  document.removeEventListener('click', clickBurgerToggler);
}

const subMenu = mainNav.querySelectorAll('.submenu');
const subMenuButtonIcon = mainNav.querySelectorAll('.nav__icon');
console.log(subMenuButtonIcon);

const mainNavLinks = mainNav.querySelectorAll('.nav__link span');
// console.log(mainNavLinks.style.color = 'red')

const subMenuButtons = mainNav.querySelectorAll('.nav__toggler');

subMenuButtons.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const isOpen = item.getAttribute('aria-expanded') === 'false';
    subMenuButtons.forEach((el, ind) => {
      if (isOpen) {
        el.setAttribute('aria-expanded', false);
        mainNavLinks[ind].style.color = 'inherit';
        subMenuButtonIcon[ind].style.transform = 'rotate(0deg)';
        subMenuButtonIcon[ind].style.fill = 'inherit';
      } else {
        item.setAttribute('aria-expanded', isOpen);
      }
    });
    item.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      mainNavLinks[index].style.color = '#20a052';
      subMenuButtonIcon[index].style.transform = 'rotate(180deg)';
      subMenuButtonIcon[index].style.fill = '#20a052';
    } else {
      mainNavLinks[index].style.color = 'inherit';
      subMenuButtonIcon[index].style.transform = 'rotate(0deg)';
      subMenuButtonIcon[index].style.fill = 'inherit';
    }
  });
});

const userNav = document.querySelector('.user-nav');
const userNavToggler = userNav.querySelector('.user-nav__toggler');

const clickProfileToggler = onTogglerClick.bind(null, userNavToggler);

userNavToggler.addEventListener('click', clickProfileToggler);

// Модальные окна с регистрацией

const buttonLogIn = userNav.querySelector('.user-nav__button');
const modalLogin = document.querySelector('.modal--login');
const modalReg = document.querySelector('.modal--reg');
const buttonModalClose = document.querySelector('.modal__button-close');
const inputMail = document.getElementById('userEmail');
const regModalLink = modalLogin.querySelector('.auth__form-link');

const onButtonClose = (evt) => {
  let target = evt.target;
  if (target === buttonModalClose) {
    modalLogin.classList.remove('modal--show');
  }
};

const onEscClose = (evt) => {
  if (isEscEvent(evt)) {
    modalLogin.classList.remove('modal--show');
  }
};

buttonLogIn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalLogin.classList.toggle('modal--show');
  modalLogin.addEventListener('click', onButtonClose);
  inputMail.focus();

  if (!modalLogin.classList.contains('modal--show')) {
    modalLogin.removeEventListener('click', onButtonClose);
    document.removeEventListener('keydown', onEscClose);
  } else {
    document.addEventListener('keydown', onEscClose);
    regModalLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalLogin.classList.remove('modal--show');
      modalReg.classList.add('modal--show');
    });
  }
});

//
let inputSearch = document.querySelectorAll('.input--modal');
let popupLocation = document.querySelectorAll('.modal-search');

inputSearch[0].addEventListener('input', () => {
  popupLocation[0].style.display = 'block';
});

document.addEventListener('keydown', () => {
  if (isEscEvent) {
    popupLocation[0].style.display = 'none';
    inputSearch[0].texContent = '';
  }
});

inputSearch[1].addEventListener('input', () => {
  popupLocation[1].style.display = 'block';
  console.dir(inputSearch[1]);
});

document.addEventListener('keydown', () => {
  if (isEscEvent) {
    popupLocation[1].style.display = 'none';
    // inputSearch[1].value = '';
  }
});

const buttonLocation = document.querySelector('.button-location');
const modalLocation = document.querySelector('.modal-location');

buttonLocation.addEventListener('click', () => {
  modalLocation.classList.toggle('modal-location--show');
});
