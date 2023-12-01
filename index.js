import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
// import { prevButton, nextButton } from "./components/NavButton/NavButton.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const navigation = document.querySelector('[data-js="navigation"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

// States
const searchQuery = "";

let page = 1;

async function fetchMaxPages() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await response.json();
  return json.info.pages;
}

const maxPage = await fetchMaxPages();

// ===========

async function fetchCharacters(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await response.json();
  return json.results;
}

async function renderCharacters(page) {
  const cardContainer = document.querySelector('[data-js="card-container"]');
  cardContainer.innerHTML = "";

  const characters = await fetchCharacters(page);

  characters.forEach((character) => {
    CharacterCard(character);
  });
  navPagination(page, maxPage);
}

renderCharacters(page);

prevButton.addEventListener("click", () => {
  if (page <= 1) return;
  page--;
  renderCharacters(page);
  return page;
});

nextButton.addEventListener("click", () => {
  if (page >= maxPage) return;
  page++;
  renderCharacters(page);
  return page;
});
