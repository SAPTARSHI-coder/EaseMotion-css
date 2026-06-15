const searchButton = document.querySelector(".expand-search button");
const searchInput = document.querySelector(".expand-search input");

searchButton.addEventListener("click", () => {
  searchInput.focus();
});