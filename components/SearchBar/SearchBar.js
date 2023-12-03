const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');

export function handleSearchBar(callback) {
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      let searchQuery = searchBarInput.value.toLowerCase();
      console.log(searchQuery);
      if (callback) {
        callback(searchQuery);
      }
    } catch (error) {
      console.error(error.message);
    }
  });
}

// ==========================================
// TODO: throw error message line 14 to frontend
// ==========================================
