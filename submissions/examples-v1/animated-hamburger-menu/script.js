const btn = document.getElementById("hamburger");
const state = document.getElementById("hamburgerState");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  state.textContent = btn.classList.contains("open") ? "Open" : "Closed";
});
