document.querySelectorAll(".bottom-nav-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".bottom-nav-item").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
