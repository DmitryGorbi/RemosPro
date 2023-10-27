// Close/Open burger

const mainNav = document.querySelector('.navigation');
const burgerMenu = mainNav.querySelector('.toggler');
const userActionsNav = document.querySelector('.user-actions');

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

const subMenu = mainNav.querySelectorAll('.main-nav__submenu');
const subMenuButtonIcon = mainNav.querySelectorAll('.main-nav__item-icon');

const mainNavLinks = mainNav.querySelectorAll('.main-nav__item-link span');
// console.log(mainNavLinks.style.color = 'red')

const subMenuButtons = mainNav.querySelectorAll('.main-nav__toggler');

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
const userNavButton = document.querySelector('.user-nav__button-profile');
console.log(userNavButton);
const userNavList = document.querySelector('.user-nav__item-list');

const userMenuToggler = (evt) => {
  evt.preventDefault();
  userNavList.classList.toggle('user-nav__item-list--disabled');
  console.log('click');
};

userNavButton.addEventListener('click', userMenuToggler);
