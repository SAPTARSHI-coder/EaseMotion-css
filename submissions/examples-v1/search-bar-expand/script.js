const box = document.getElementById("searchBox");
const input = document.getElementById("searchInput");

box.addEventListener("click", () => {
  box.classList.add("open");
  input.focus();
});

input.addEventListener("blur", () => {
  if (!input.value) box.classList.remove("open");
});
