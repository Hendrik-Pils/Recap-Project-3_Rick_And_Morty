const pagination = document.querySelector('[data-js="pagination"]');

export function navPagination() {
  const page = 1;
  const maxPage = 42;
  pagination.textContent = `${page} / ${maxPage}`;
}
