const pagination = document.querySelector('[data-js="pagination"]');

export function navPagination(page, maxPage) {
  pagination.textContent = `${page}/${maxPage}`;
}
