// Close/Open burger

const mainNav = document.querySelector('.navigation');
const burgerMenu = mainNav.querySelector('.toggler');
const userNav = document.querySelector('.user-nav');
console.log(userNav);

const onTogglerClick = (evt) => {
  evt.preventDefault();
  const isOpen = burgerMenu.getAttribute('aria-expanded') === 'false';
  burgerMenu.setAttribute('aria-expanded', isOpen);
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

// Открывает/закрывает сабменю в моильной версии и на планшете,
// окрашивает ссылку в другой цвет, когда сабменю открыто.

const subMenu = mainNav.querySelectorAll('.main-nav__submenu');
const subMenuButtonIcon = mainNav.querySelectorAll('.main-nav__item-icon');

const mainNavLinks = mainNav.querySelectorAll('.main-nav__item-link span');
// console.log(mainNavLinks.style.color = 'red')

const subMenuButtons = mainNav.querySelectorAll('.main-nav__toggler');

// subMenuButtons.forEach((item, index) => {
//   item.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     subMenu[index].classList.toggle('main-nav__item-link--closed');
//     if (!subMenu[index].classList.contains('main-nav__item-link--closed')) {
//       mainNavLinks[index].style.color = 'rgb(0, 106, 255)';
//       subMenuButtonIcon[index].style.transform = 'rotate(180deg)';
//     } else {
//       mainNavLinks[index].style.color = 'inherit';
//       subMenuButtonIcon[index].style.transform = 'rotate(0deg)';
//     }
//   });
// });

subMenuButtons.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const isOpen = item.getAttribute('aria-expanded') === 'false';
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

const changeActiveClass = (items, disabledSelector) => {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((el) => {
        el.classList.remove(disabledSelector);
      });
      item.classList.add(disabledSelector);
    });
  });
};
