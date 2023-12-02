const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');

export function handleSearchBar(callback) {
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchQuery = searchBarInput.value;
    console.log(searchQuery);
    if (callback) {
      callback(searchQuery);
    }
  });
}
