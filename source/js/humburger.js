const nav = document.querySelector("nav");
const logo = nav.querySelector(".page-header__logo");

const burgerClone = document.querySelector("#burger-template").content.cloneNode(true);

const button = burgerClone.querySelector("button");

button.addEventListener("click", () => {
  const isOpen = button.getAttribute("aria-expanded") === "false";
  button.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("keyup", (e) => {
  if (e.code == "Escape") {
    button.setAttribute("aria-expanded", false);
    button.focus();
  }
});

nav.insertBefore(burgerClone, logo);
