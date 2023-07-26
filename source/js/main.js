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
console.log(mainNavLinks);

mainNavLinks.addEventListener('mouseover', (event) => {
  if (mainNavLinks.contains('navigation__item-link--active')) {
    mainNavLinks.remove('navigation__item-link--active');
  }
});
