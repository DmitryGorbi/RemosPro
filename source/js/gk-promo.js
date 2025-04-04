import { isEscEvent, onTogglerClick } from "./util.js";

const gkPromoModal = document.querySelector(".modal--promo");
const modalButtonClose = gkPromoModal.querySelector(".button-close");
const promoButtons = document.querySelectorAll(".card-promo button");

const promoGkItems = gkPromoModal.querySelectorAll(".modal-promo__item");

const onEscKeyDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideGkPromo();
  }
};

const showGkPromo = () => {
  promoButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
      gkPromoModal.classList.add("show");
      promoGkItems[index].classList.add("show");
      modalButtonClose.addEventListener("click", onCancelButtonClick);
      document.addEventListener("keydown", onEscKeyDown);
    });
  });
};

const hideGkPromo = () => {
  gkPromoModal.classList.remove("show");

  promoGkItems.forEach((element) => {
    element.classList.remove("show");
  });

  modalButtonClose.removeEventListener("click", onCancelButtonClick);
  document.removeEventListener("keydown", onEscKeyDown);
};

const onCancelButtonClick = () => {
  hideGkPromo();
};

showGkPromo();
