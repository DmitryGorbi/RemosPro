'use strict';

const svgMap = document.querySelector('.genPlan__buildingsLayer');
const ableLayers = svgMap.querySelectorAll('.able');
const mapTagPopups = document.querySelectorAll('.mapTag__offer');

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

const buttonShowTel = document.querySelector('.gk__preview-contacts .button-main:first-of-type');
const buttonCallBack = document.querySelector('.gk__preview-contacts .button-main:last-of-type');
const modalContact = document.querySelector('.modal--contacts');
const modalCallBack = document.querySelector('.callBack');

buttonShowTel.addEventListener('click', () => {
  if (!modalContact.classList.contains('modal--show')) {
    modalContact.classList.add('modal--show');
  }
});

buttonCallBack.addEventListener('click', () => {
  if (!modalCallBack.classList.contains('modal--show')) {
    modalCallBack.classList.add('modal--show');
  }
});

const buttonShowTel2 = document.querySelector('.survey__contacts .button-main');
const tel = document.querySelector('.survey__contacts a');

buttonShowTel2.addEventListener('click', () => {
  buttonShowTel2.style.display = 'none';
  tel.style.display = 'block';
});

const buttonShowTel3 = document.querySelector('.gkPromotion .button-main');
buttonShowTel3.addEventListener('click', () => {
  if (!modalContact.classList.contains('modal--show')) {
    modalContact.classList.add('modal--show');
  }
});

const buttonCallBack2 = document.querySelector('.gkMortgage .button-main:last-of-type');
buttonCallBack2.addEventListener('click', () => {
  if (!modalCallBack.classList.contains('modal--show')) {
    modalCallBack.classList.add('modal--show');
  }
});
