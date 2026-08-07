
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("ratingValue");
const ratingMessage = document.getElementById("ratingMessage");
const progressFill = document.getElementById("progressFill");

const messages = {
  1: "Needs Improvement",
  2: "Fair",
  3: "Good",
  4: "Excellent",
  5: "Legendary ⭐"
};

let selected = 0;

function updateStars(value) {
  stars.forEach((star, index) => {
    star.classList.toggle("active", index < value);
  });

  ratingValue.textContent = `${value} / 5`;
  ratingMessage.textContent = messages[value] || "Hover over the stars to preview your rating.";
  progressFill.style.width = `${value * 20}%`;
}

stars.forEach((star) => {
  star.addEventListener("mouseenter", () => {
    updateStars(Number(star.dataset.value));
  });

  star.addEventListener("click", () => {
    selected = Number(star.dataset.value);
    updateStars(selected);
  });
});

document.querySelector(".stars").addEventListener("mouseleave", () => {
  updateStars(selected);
});

document.getElementById("submitBtn").addEventListener("click", () => {
  if (selected === 0) {
    alert("Please select a rating first!");
  } else {
    alert(`Thank you! You rated ${selected}/5`);
  }
});