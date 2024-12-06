let subscribeControl = document.querySelector('.catalog-menu__subscribe');
let subscribeModal = document.querySelector('.modal--subscribe');

subscribeControl.addEventListener('click', () => {
  subscribeModal.classList.toggle('show');
});

let sortControl = document.querySelector('.catalog-list__button-sort');
let sortModal = document.querySelector('.sort__list');

sortControl.addEventListener('click', () => {
  sortModal.classList.toggle('show');
});

let geoControl = document.querySelector('.search__button-js-geo');
let geoObjectModal = document.querySelector('.geo-modal--object');

geoControl.addEventListener('click', () => {
  geoObjectModal.classList.toggle('show');
});
