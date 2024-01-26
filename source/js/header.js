// Close/Open burger

const mainNav = document.querySelector('.navigation');
const burgerMenu = mainNav.querySelector('.toggler');
const userActionsNav = document.querySelector('.user-actions');

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

// Открываю меню бургера и привязываю это событие к показу навигации личного кабинета

const onTogglerClick = (evt) => {
  evt.preventDefault();
  const isOpen = burgerMenu.getAttribute('aria-expanded') === 'false';
  burgerMenu.setAttribute('aria-expanded', isOpen);
  console.log('click');
};

burgerMenu.addEventListener('click', onTogglerClick);

mainNav.addEventListener('keyup', (e) => {
  if (e.code === 'Escape') {
    burgerMenu.setAttribute('aria-expanded', false);
    burgerMenu.focus();
  }
});

// Убираем обработчик на десктопе
const mediaQuery = window.matchMedia('(min-width: 1240px)');
if (mediaQuery.matches) {
  document.removeEventListener('click', onTogglerClick);
}

// Открывает/закрывает сабменю в мобильной версии и на планшете,
// окрашивает ссылку в другой цвет, когда сабменю открыто.

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
      } else {
        item.setAttribute('aria-expanded', isOpen);
      }
    });
    item.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      mainNavLinks[index].style.color = 'rgb(0, 106, 255)';
      subMenuButtonIcon[index].style.transform = 'rotate(180deg)';
    } else {
      mainNavLinks[index].style.color = 'inherit';
      subMenuButtonIcon[index].style.transform = 'rotate(0deg)';
    }
  });
});

// Обработчик на показ окна с навигацией личного ккабинета
const userNav = document.querySelector('.user-nav');
const userNavButton = userNav.querySelector('.user-nav__button-profile');
console.log(userNavButton);
const userNavList = userNav.querySelector('.user-nav__item-list');

const userMenuToggler = (evt) => {
  evt.preventDefault();
  userNavList.classList.toggle('user-nav__item-list--disabled');
  console.log('click');
};

userNavButton.addEventListener('click', userMenuToggler);

// Модальные окна с регистрацией

const buttonLogIn = userNav.querySelector('.user-nav__button-login');
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
