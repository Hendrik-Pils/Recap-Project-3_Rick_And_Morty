import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { initializeNavButtons } from "./components/NavButton/NavButton.js";

const navigation = document.querySelector('[data-js="navigation"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

let page = 1;
let searchQuery = "";

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

renderCharacters(page);

// ================CODE FIX ABOVE==========================

// ==========================================
// TODO: activate search bar (see README.md)
// ==========================================

const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');
const searchBarButton = document.querySelector('[data-js="search-bar-button"]');

function handleSearch() {
  searchQuery = searchBarInput.value;
  console.log(searchQuery);
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the form from submitting (if it's inside a form)
    handleSearch();
  }
}

searchBarButton.addEventListener("click", handleSearch);
searchBar.addEventListener("submit", handleSearch); // This is optional, it handles form submission
searchBarInput.addEventListener("keydown", handleEnterKey);
