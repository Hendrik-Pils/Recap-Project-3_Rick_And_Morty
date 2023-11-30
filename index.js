import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// API URL = "https://rickandmortyapi.com/api/character"

async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const json = await response.json();
  return json.results;
}
const characters = await fetchCharacters();

characters.forEach((character) => {
  CharacterCard(character);
});
