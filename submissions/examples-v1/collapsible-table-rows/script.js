document.querySelectorAll(".ctr-parent").forEach((row) => {
  row.addEventListener("click", () => {
    const targetId = row.dataset.target;
    const detail = document.getElementById(targetId);
    if (!detail) return;
    detail.classList.toggle("hidden");
    row.classList.toggle("open");
    const arrow = row.cells[0];
    if (arrow.textContent.startsWith("▶")) {
      arrow.textContent = arrow.textContent.replace(
        "▶",
        detail.classList.contains("hidden") ? "▶" : "▼"
      );
    }
  });
});
