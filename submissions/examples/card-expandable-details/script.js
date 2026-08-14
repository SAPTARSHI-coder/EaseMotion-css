const toggle = document.getElementById("expToggle");
const details = document.getElementById("expDetails");

toggle.addEventListener("click", () => {
  const open = details.classList.toggle("open");
  toggle.textContent = open ? "Hide Details ↑" : "Show Details ↓";
});
