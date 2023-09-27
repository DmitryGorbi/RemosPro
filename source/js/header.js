// Close/Open burger

const burgerMenu = document.querySelector('.toggler');
const mainNav = document.querySelector('.navigation');

const onButtonClick = (evt) => {
  evt.preventDefault();
  mainNav.classList.toggle('navigation--closed');
  mainNav.classList.toggle('navigation--open');
};

burgerMenu.addEventListener('click', onButtonClick);

// Убираем обработчик на десктопе
const mediaQuery = window.matchMedia('(min-width: 1240px)');
if (mediaQuery.matches) {
  document.removeEventListener('click', onButtonClick);
}

// Active main navigation link

// mainNavLinks.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     item.classList.add('main-nav__item-link--active');
//   });
//   item.addEventListener('mouseleave', () => {
//     item.classList.remove('main-nav__item-link--active');
//   });
// });

// Открывает/закрывает сабменю в моильной версии и на планшете,
// окрашивает ссылку в другой цвет, когда сабменю открыто.

const subMenu = mainNav.querySelectorAll('.main-nav__submenu');
const subMenuButtonIcon = mainNav.querySelectorAll('.main-nav__item-icon');

const mainNavLinks = mainNav.querySelectorAll('.main-nav__item-link span');
// console.log(mainNavLinks.style.color = 'red')

const subMenuButtons = mainNav.querySelectorAll('.main-nav__item-button');

subMenuButtons.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    subMenu[index].classList.toggle('main-nav__item-link--closed');
    if (!subMenu[index].classList.contains('main-nav__item-link--closed')) {
      mainNavLinks[index].style.color = 'rgb(0, 106, 255)';
      subMenuButtonIcon[index].style.transform = 'rotate(180deg)';
    } else {
      mainNavLinks[index].style.color = 'inherit';
      subMenuButtonIcon[index].style.transform = 'rotate(0deg)';
    }
  });
});
