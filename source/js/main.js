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

<<<<<<< HEAD


=======
>>>>>>> 35a5b162 (some changes)
// mainNavLinks.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     item.classList.add('navigation__item-link--active');
//   });
//   item.addEventListener('mouseleave', () => {
//     item.classList.remove('navigation__item-link--active');
//   });
// });

// Закрывает сабменю в моильной версии и на планшете

const subMenu = mainNav.querySelectorAll('.navigation__submenu');

const mainNavLinks = mainNav.querySelectorAll('.navigation__item-link span');
// console.log(mainNavLinks.style.color = 'red')


const subMenuButtons = mainNav.querySelectorAll('.navigation__item-button');

subMenuButtons.forEach((item, index) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    subMenu[index].classList.toggle('navigation__item-link--closed');
    if (!subMenu[index].classList.contains('navigation__item-link--closed')) {
      mainNavLinks[index].style.color = 'red'
    }
  });
});

// окрашивает ссылку в другой цвет, когда сабменю открыто

<<<<<<< HEAD


// subMenu.forEach((item, index) => {
  
//   if (item.classList.contains('navigation__item-link--closed')) {
//     mainNavLinks[index].style.color = 'red'
//   }
// });
=======
const mainNavLinks = document.querySelectorAll('.navigation__item-link span');
console.log(mainNavLinks);

subMenu.forEach((item, index) => {
  if (item.classList.contains('navigation__item-link--closed')) {
    mainNavLinks[index];
  }
});
>>>>>>> 35a5b162 (some changes)
