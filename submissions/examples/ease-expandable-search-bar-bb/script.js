const searchBar = document.querySelector(".search-bar");
const toggleButton = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchForm = document.querySelector("form[role='search']");

function openSearch() {
  searchBar.classList.add("active");
  toggleButton.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => searchInput.focus());
}

function closeSearch() {
  if (searchInput.value.trim() !== "") {
    return;
  }

  searchBar.classList.remove("active");
  toggleButton.setAttribute("aria-expanded", "false");
}

toggleButton.addEventListener("click", () => {
  const isActive = searchBar.classList.contains("active");

  if (isActive) {
    closeSearch();
  } else {
    openSearch();
  }
});

searchInput.addEventListener("focus", () => {
  if (!searchBar.classList.contains("active")) {
    openSearch();
  }
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    return;
  }

  console.log("Searching:", query);
});

document.addEventListener("click", (event) => {
  const clickedInside = searchBar.contains(event.target);

  if (!clickedInside) {
    closeSearch();
  }
});