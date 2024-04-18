const filterToggler = document.querySelector('.catalog-actions__filter');
const catalogFilter = document.querySelector('.filter-catalog');

filterToggler.addEventListener('click', () => {
  catalogFilter.classList.add('show');
});
