const pagination = document.querySelector('[data-js="pagination"]');

export function NavPagination(page, maxPage) {
  pagination.textContent = `${page}/${maxPage}`;
}
