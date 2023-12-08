const errorMessage = document.querySelector('[data-js="error-message"]');

export function DisplayErrorMessage() {
  errorMessage.textContent = "no match! please try again...";
  errorMessage.classList.add("error-message");
}

export function ClearErrorMessage() {
  errorMessage.textContent = "";
  errorMessage.classList.remove("error-message");
}
