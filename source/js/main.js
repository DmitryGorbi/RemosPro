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

// Нужно убрать обработчик

// const buttonDeal = filter.querySelector('.button-filter');
// const buttonArrow = buttonDeal.querySelector('.button-filter__icon');

// const dealSelectToggler = () => {
//   buttonArrow.classList.toggle('button-filter__icon--rotate');
//   dealSelect.classList.toggle('filter__select-deal--disabled');

//   if (isEscEvent(evt)) {
//     evt.preventDefault();
//     dealSelect.classList.add('filter__select-deal--disabled');
//     buttonArrow.classList.remove('button-filter__icon--rotate');
//   }
// };

// document.addEventListener('keydown', dealSelectToggler);
// buttonDeal.addEventListener('click', dealSelectToggler);

// // Замена текста в кнопке по выбранному значению input
// const buttonDealText = filter.querySelector('.button-filter__text');
// const selectedDeal = (evt) => {
//   buttonDealText.textContent = evt.target.value;
// };

// filter.addEventListener('change', selectedDeal);

// // Скрытие списка и удаление класса у иконки
// const dealSelectToggleDesktop = (evt) => {
//   let target = evt.target;

//   if (target.matches('input[type="radio"]')) {
//     dealSelect.classList.add('filter__select-deal--disabled');
//     buttonArrow.classList.remove('button-filter__icon--rotate');
//   }
// };

// filter.addEventListener('click', dealSelectToggleDesktop);
