document.querySelectorAll(".sidebar-header").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".sidebar-section").classList.toggle("open");
  });
});
