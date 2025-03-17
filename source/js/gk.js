"use strict";

const svgMap = document.querySelector(".gen-plan__layer");
const ableLayers = svgMap.querySelectorAll(".able");
const mapTagPopups = document.querySelectorAll(".map-tag__offer");

ableLayers.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    mapTagPopups[index].classList.add("map-tag__offer--show");
  });
  item.addEventListener("mouseout", () => {
    mapTagPopups[index].classList.remove("map-tag__offer--show");
  });
});

const tableToggle = document.querySelector(".gk-offers__item button");
const gkTable = document.querySelector(".gk-table");
const gkTableBody = gkTable.querySelector("tbody");
const gkTableFooter = gkTable.querySelector("tfoot");
console.log(tableToggle);

tableToggle.addEventListener("click", () => {
  gkTable.classList.toggle("visually-hidden");
  gkTableBody.classList.toggle("visually-hidden");
  gkTableFooter.classList.toggle("visually-hidden");
});

const buttonShowTel = document.querySelector(".gk__preview-contacts .button-main:first-of-type");
const buttonCallBack = document.querySelector(".gk__preview-contacts .button-main:last-of-type");
const modalContact = document.querySelector(".modal--contacts");
const modalCallBack = document.querySelector(".callBack");

buttonShowTel.addEventListener("click", () => {
  if (!modalContact.classList.contains("show")) {
    modalContact.classList.add("show");
  }
});

buttonCallBack.addEventListener("click", () => {
  if (!modalCallBack.classList.contains("show")) {
    modalCallBack.classList.add("show");
  }
});

const buttonShowTel2 = document.querySelector(".survey__contacts .button-main");
const tel = document.querySelector(".survey__contacts a");

buttonShowTel2.addEventListener("click", () => {
  buttonShowTel2.style.display = "none";
  tel.style.display = "block";
});

const buttonShowTel3 = document.querySelector(".gk-promotion .button-main");
buttonShowTel3.addEventListener("click", () => {
  if (!modalContact.classList.contains("show")) {
    modalContact.classList.add("show");
  }
});

const buttonCallBack2 = document.querySelector(".gk-mortgage .button-main:last-of-type");
buttonCallBack2.addEventListener("click", () => {
  if (!modalCallBack.classList.contains("show")) {
    modalCallBack.classList.add("show");
  }
});
