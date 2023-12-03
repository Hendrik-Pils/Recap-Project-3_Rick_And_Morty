import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { navPagination } from "./components/NavPagination/NavPagination.js";
import { initializeNavButtons } from "./components/NavButton/NavButton.js";
import { handleSearchBar } from "./components/SearchBar/SearchBar.js";

//======================================

const navigation = document.querySelector('[data-js="navigation"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const url = "https://rickandmortyapi.com/api/character";

//======================================

async function fetchMaxPages() {
  try {
    const response = await fetch(`${url}`);
    const json = await response.json();
    // console.log(json);
    return json.info.pages;
  } catch (error) {
    console.error("Error fetching max pages:", error);
  }
}
(async () => {
  const maxPage = await fetchMaxPages();
  let page = 1;
  //======================================

  async function fetchCharacters(page) {
    try {
      const response = await fetch(`${url}?page=${page}`);
      const json = await response.json();
      // console.log(json);
      return json.results;
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  }

  //======================================

  // async function renderCharacters(page) {
  //   const cardContainer = document.querySelector('[data-js="card-container"]');
  //   cardContainer.innerHTML = "";

  //   const characters = await fetchCharacters(page);

  //   characters.forEach((character) => {
  //     CharacterCard(character);
  //   });
  //   navPagination(page, maxPage);
  // }

  //======================================

  async function renderCharacters(page, searchQuery = "") {
    const cardContainer = document.querySelector('[data-js="card-container"]');
    cardContainer.innerHTML = "";

    const characters = await fetchCharacters(page);

    //==========
    const filteredCharacters = characters.filter((character) => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(searchQuery);
    });

    if (filteredCharacters.length === 0) {
      throw new Error("No characters found for search query: ${searchQuery}");
    }
    //==========

    // instead of characters.forEach...
    filteredCharacters.forEach((character) => {
      CharacterCard(character);
    });
    navPagination(page, maxPage);
  }

  //======================================

  const { prevButton, nextButton } = initializeNavButtons(
    page,
    maxPage,
    renderCharacters
  );

  //======================================

  // handleSearchBar();
  renderCharacters(page);

  handleSearchBar((searchQuery) => {
    renderCharacters(page, searchQuery);
  });
})();

// ==========================================
// TODO: throw error message line 100 to frontend
// ==========================================
