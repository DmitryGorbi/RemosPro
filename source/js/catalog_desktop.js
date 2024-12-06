let subscribeControl = document.querySelector('.catalog-list__subscribe');
let subscribeModal = document.querySelector('.modal--subscribe');

subscribeControl.addEventListener('click', () => {
  subscribeModal.classList.toggle('show');
});

let sortControl = document.querySelector('.catalog-list__button-sort');
let sortModal = document.querySelector('.sort__list');

sortControl.addEventListener('click', () => {
  sortModal.classList.add('show');
});
