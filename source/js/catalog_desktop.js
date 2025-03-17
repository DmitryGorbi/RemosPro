let subscribeControl = document.querySelector(".catalog-list__subscribe");
let subscribeModal = document.querySelector(".modal--subscribe");

subscribeControl.addEventListener("click", () => {
  subscribeModal.classList.toggle("show");
});

let sortControl = document.querySelector(".sort__control");
let sortModal = document.querySelector(".sort__list");

sortControl.addEventListener("click", () => {
  const isOpen = sortControl.getAttribute("aria-expanded") === "false";
  sortControl.setAttribute("aria-expanded", isOpen);
});
