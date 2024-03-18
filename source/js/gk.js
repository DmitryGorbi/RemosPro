'use strict';

let svgMap = document.querySelector('.genPlan__buildingsLayer');
let ableLayer = svgMap.querySelectorAll('.able');
let mapTagPopups = document.querySelectorAll('.mapTag__offer');
console.log(svgMap);

console.log(mapTagPopups);

svgMap.addEventListener('mouseover', (evt) => {
  let target = evt.target;

  if (target.classList.contains('able')) {
    item.style.display = 'block';
    console.log('sms');
  } else {
    item.style.display = 'none';
  }
});

// svgMap.addEventListener('mouseover', (evt) => {
//   let target = evt.target;
//   mapTagPopups.forEach((item) => {
//     if (target.classList.contains('able')) {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// });
