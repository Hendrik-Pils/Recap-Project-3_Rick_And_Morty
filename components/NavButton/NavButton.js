const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

export function InitializeNavButtons(page, maxPage, renderCharacters) {
  prevButton.addEventListener("click", () => {
    if (page <= 1) return;
    page--;
    renderCharacters(page);
  });

  nextButton.addEventListener("click", () => {
    if (page >= maxPage) return;
    page++;
    renderCharacters(page);
  });

  return { prevButton, nextButton };
}
