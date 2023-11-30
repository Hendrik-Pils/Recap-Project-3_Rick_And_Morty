import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { buttonPrev } from "./components/NavButton/NavButton.js";
import { buttonNext } from "./components/NavButton/NavButton.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');

// States
const searchQuery = "";

// ==============
// API URL = "https://rickandmortyapi.com/api/character"

// async function fetchCharacters() {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const json = await response.json();
//   return json.results;
// }

// const characters = await fetchCharacters();
// ==============

// async function fetchCharacters(pageIndex) {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character?page=${pageIndex}`
//   );
//   const json = await response.json();
//   return json.results;
// }
// ==============

async function fetchCharacters(pageIndex) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageIndex}`
  );
  const json = await response.json();
  return json.results;
}

const characters = await fetchCharacters(page);

characters.forEach((character) => {
  CharacterCard(character);
});
