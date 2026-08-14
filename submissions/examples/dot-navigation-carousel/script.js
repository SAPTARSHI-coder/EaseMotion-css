document.querySelectorAll(".dot-nav").forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const dot = e.target.closest(".dot");
    if (!dot) return;
    nav.querySelectorAll(".dot").forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});
