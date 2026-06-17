const dots = document.querySelectorAll(".hm-dot");
const tooltip = document.getElementById("hmTooltip");

dots.forEach((dot) => {
  dot.addEventListener("mouseenter", (e) => {
    const rect = dot.getBoundingClientRect();
    const parentRect = dot.parentElement.getBoundingClientRect();
    tooltip.textContent = dot.dataset.label;
    tooltip.style.top = `${rect.top - parentRect.top - 30}px`;
    tooltip.style.left = `${rect.left - parentRect.left + 12}px`;
    tooltip.classList.add("visible");
  });
  dot.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });
});
