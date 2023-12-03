import { ClearErrorMessage } from "../ErrorMessage/ErrorMessage.js";

const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');

//========================

export function HandleSearchBar(callback) {
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchQuery = searchBarInput.value.toLowerCase();
    // console.log(searchQuery);

    //======================== send back searchQuery to index.js
    //======================== clear error message on change of input

    if (callback) {
      callback(searchQuery);
      searchBarInput.addEventListener("input", () => {
        ClearErrorMessage();
      });
    }
  });
}
