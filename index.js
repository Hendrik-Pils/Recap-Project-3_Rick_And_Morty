import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";
import { InitializeNavButtons } from "./components/NavButton/NavButton.js";
import { HandleSearchBar } from "./components/SearchBar/SearchBar.js";
import { DisplayErrorMessage } from "./components/ErrorMessage/ErrorMessage.js";

//======================== querySelectors given by task, but not used

// const navigation = document.querySelector('[data-js="navigation"]');
// const searchBarContainer = document.querySelector(
//   '[data-js="search-bar-container"]'
// );

//======================== define url

const url = "https://rickandmortyapi.com/api/character";

//======================== pickup max pages from json.info

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
//======================== fetch and render characters

(async () => {
  const maxPage = await fetchMaxPages();
  let page = 1;

  //========================

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

  //======================== render by page or filter by searchQuery

  async function renderCharacters(page, searchQuery = "") {
    const cardContainer = document.querySelector('[data-js="card-container"]');
    cardContainer.innerHTML = "";

    const characters = await fetchCharacters(page);

    const filteredCharacters = characters.filter((character) => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(searchQuery);
    });

    if (filteredCharacters.length === 0) {
      DisplayErrorMessage();
    }

    filteredCharacters.forEach((character) => {
      CharacterCard(character);
    });

    //======================== update pagination

    NavPagination(page, maxPage);
  }
  //======================== initialize on click function of navigation

  const { prevButton, nextButton } = InitializeNavButtons(
    page,
    maxPage,
    renderCharacters
  );

  //========================

  renderCharacters(page);

  HandleSearchBar((searchQuery) => {
    renderCharacters(page, searchQuery);
  });
})();
