import { navPagination } from "../NavPagination/NavPagination.js";

const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

export function buttonPrev() {
  prevButton.addEventListener("click", () => {
    navPagination();
  });
}

export function buttonNext() {}
