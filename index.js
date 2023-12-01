import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { initializeNavButtons } from "./components/NavButton/NavButton.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

// ==========================================
// TODO: activate search bar (see README.md)
// ==========================================

const navigation = document.querySelector('[data-js="navigation"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchQuery = "";

// ==========================================

let page = 1;

async function fetchMaxPages() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await response.json();
  return json.info.pages;
}

const maxPage = await fetchMaxPages();

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

const { prevButton, nextButton } = initializeNavButtons(
  page,
  maxPage,
  renderCharacters
);
