'use strict';

let svgMap = document.querySelector('.genPlan__buildingsLayer');
let ableLayers = svgMap.querySelectorAll('.able');
let mapTagPopups = document.querySelectorAll('.mapTag__offer');

ableLayers.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    mapTagPopups[index].classList.add('mapTag__offer--show')
  })
  item.addEventListener('mouseout', () => {
    mapTagPopups[index].classList.remove('mapTag__offer--show')
  })
})
