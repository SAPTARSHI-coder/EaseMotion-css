const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".tilt-card").forEach((card) => {
  const inner = card.querySelector(".tilt-inner");

  card.addEventListener("mousemove", (e) => {
    if (prefersReduced) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -2;
    inner.style.transform = `rotateY(${x * 15}deg) rotateX(${y * 15}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    inner.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});
