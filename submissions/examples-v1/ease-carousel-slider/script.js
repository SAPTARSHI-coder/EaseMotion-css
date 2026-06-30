const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current >= slides.length) {
    current = 0;
  }
  showSlide(current);
});

prevBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = slides.length - 1;
  }
  showSlide(current);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    current = index;
    showSlide(current);
  });
});

setInterval(() => {
  current++;
  if (current >= slides.length) {
    current = 0;
  }
  showSlide(current);
}, 4000);

showSlide(current);
