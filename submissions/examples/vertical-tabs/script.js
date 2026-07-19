document.querySelectorAll(".vtabs-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".vtabs-tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".vtabs-panel").forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
