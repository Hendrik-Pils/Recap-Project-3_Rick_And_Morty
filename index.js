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

let page = 39;
// let maxPage = 42;

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

// async function fetchCharacters() {
//   const result = await fetch(
//     `https://rickandmortyapi.com/api/character/?page=${page}`
//   );
//   const data = await result.json();
//   const maxPage = data.info.pages;
//   const characters = data.results;
// }

async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await response.json();
  return json.results;
}
async function fetchMaxPages() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const json = await response.json();
  return json.info.pages;
}

const characters = await fetchCharacters();
const maxPage = await fetchMaxPages();

characters.forEach((character) => {
  CharacterCard(character);
});

prevButton.addEventListener("click", () => {
  if (page <= 1) return;
  page--;
  console.log(page);
});

nextButton.addEventListener("click", () => {
  if (page >= maxPage) return;
  page++;
  console.log(page);
});
