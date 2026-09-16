document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-3d");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    card.addEventListener("mouseenter", () => {
      card.classList.add("flipped");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("flipped");
    });
  });
});
