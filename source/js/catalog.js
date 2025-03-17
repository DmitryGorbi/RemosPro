import { onTogglerClick } from "./util.js";

const filterToggler = document.querySelector(".catalog-actions__filter");
const catalogFilter = document.querySelector(".filter-catalog");

// filterToggler.addEventListener('click', () => {
//   catalogFilter.classList.add('show');
// });

if (document.querySelector(".offer-controls__toggler")) {
  const offerControlsToggler = document.querySelector(".offer-controls__toggler");
  const onClickControlsToggler = onTogglerClick.bind(null, offerControlsToggler);

  offerControlsToggler.addEventListener("click", (evt) => {
    onClickControlsToggler(evt);
    if (offerControlsToggler.getAttribute("aria-expanded") === "true") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  });

  const controlItems = document.querySelectorAll(".offer-controls__item--modal");
  const controlModal = document.querySelector(".controls-modal");
  const modalButtonClose = controlModal.querySelectorAll(".button-close");
  console.log(modalButtonClose);

  const onControlClick = (a, b) => {
    a.addEventListener("click", () => {
      b.classList.add("show");
      offerControlsToggler.setAttribute("aria-expanded", false);
    });
  };

  for (let i = 0; i < controlModal.children.length; i++) {
    onControlClick(controlItems[i], controlModal.children[i]);
  }

  for (let i = 0; i < modalButtonClose.length; i++) {
    modalButtonClose[i].addEventListener("click", () => {
      controlModal.children[i].classList.remove("show");
      document.body.style.overflowY = "scroll";
    });
  }
}
