const toggle = document.getElementById("dmToggle");
const body = document.getElementById("dmBody");
const label = document.getElementById("dmLabel");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark", toggle.checked);
  label.textContent = toggle.checked ? "Dark Mode" : "Light Mode";
});
