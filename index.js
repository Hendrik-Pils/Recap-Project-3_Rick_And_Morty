import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { buttonPrev } from "./components/NavButton/NavButton.js";
import { buttonNext } from "./components/NavButton/NavButton.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const navigation = document.querySelector('[data-js="navigation"]');
const searchBar = document.querySelector('[data-js="search-bar"]');

// States
const searchQuery = "";

let page = 1;
let maxPage = await fetchMaxPages().pages;

console.log(maxPage);

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

async function fetchMaxPages() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const json = await response.json();
  return json.info;
}

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await response.json();
  return json.results;
}

const characters = await fetchCharacters();

characters.forEach((character) => {
  CharacterCard(character);
});

nextButton.addEventListener("click", () => {
  if (page >= maxPage) return;
  page++;
});

prevButton.addEventListener("click", () => {
  if (page <= 1) return;
  page--;
});
