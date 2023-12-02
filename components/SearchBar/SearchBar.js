const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');

let searchQuery = "";

export function handleSearchBar() {
  searchBar.addEventListener("submit", handleSearchInput); // This is optional, it handles form submission
  searchBar.addEventListener("keydown", handleSearchEnterKey);
  searchBar.addEventListener("click", handleSearchButton);
}

function handleSearchInput() {
  searchQuery = searchBarInput.value;
  console.log(searchQuery);
}

function handleSearchEnterKey(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the form from submitting (if it's inside a form)
    handleSearchInput();
  }
}

function handleSearchButton(event) {
  event.preventDefault(); // Prevent the form from submitting (if it's inside a form)
  handleSearchInput();
}
