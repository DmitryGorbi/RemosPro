'use strict';

let svgMap = document.querySelector('.genPlan__buildingsLayer');
let ableLayers = svgMap.querySelectorAll('.able');
let mapTagPopups = document.querySelectorAll('.mapTag__offer');

ableLayers.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    mapTagPopups[index].classList.add('mapTag__offer--show');
  });
  item.addEventListener('mouseout', () => {
    mapTagPopups[index].classList.remove('mapTag__offer--show');
  });
});

const tableToggle = document.querySelector('.gkOffers__item button');
const gkTable = document.querySelector('.gkTable');
const gkTableBody = gkTable.querySelector('tbody');
const gkTableFooter = gkTable.querySelector('tfoot');
console.log(tableToggle);

tableToggle.addEventListener('click', () => {
  gkTable.classList.toggle('visually-hidden');
  gkTableBody.classList.toggle('visually-hidden');
  gkTableFooter.classList.toggle('visually-hidden');
});
