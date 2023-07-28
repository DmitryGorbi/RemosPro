// Close/Open burger

const burgerMenu = document.querySelector('.toggler');
const mainNav = document.querySelector('.navigation');

const onButtonClick = (evt) => {
  evt.preventDefault();
  mainNav.classList.toggle('navigation--closed');
  mainNav.classList.toggle('navigation--open');
};

burgerMenu.addEventListener('click', onButtonClick);

// Active main navigation link

const mainNavLinks = document.querySelectorAll('.navigation__item-link');

// mainNavLinks.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     item.classList.add('navigation__item-link--active');
//   });
//   item.addEventListener('mouseleave', () => {
//     item.classList.remove('navigation__item-link--active');
//   });
// });

const subMenu = document.querySelectorAll('.navigation__submenu');

// Закрывает сабменю в моильной версии и на планшете

const activeLinks = mainNavLinks;

activeLinks.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    item.classList.toggle('navigation__item-link--closed');
  });
});
