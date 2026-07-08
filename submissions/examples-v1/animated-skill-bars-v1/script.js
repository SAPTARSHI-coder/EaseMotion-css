requestAnimationFrame(() => {
  document.querySelectorAll(".skill-fill").forEach((el) => {
    el.style.width = el.dataset.width + "%";
  });
});
