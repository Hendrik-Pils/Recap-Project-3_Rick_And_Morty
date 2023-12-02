import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { initializeNavButtons } from "./components/NavButton/NavButton.js";
import { handleSearchBar } from "./components/SearchBar/SearchBar.js";

const navigation = document.querySelector('[data-js="navigation"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

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

const { prevButton, nextButton } = initializeNavButtons(
  page,
  maxPage,
  renderCharacters
);

handleSearchBar();
renderCharacters(page);

// ==========================================
// TODO: add functions to handleSearchBar()
// search bar generally works (console.log)
// and is already outsourced to components
// ==========================================
