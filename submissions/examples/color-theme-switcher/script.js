const body = document.getElementById("themeBody");
document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    body.className = btn.dataset.theme;
  });
});
