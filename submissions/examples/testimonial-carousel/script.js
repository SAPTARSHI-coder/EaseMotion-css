const slides = document.querySelectorAll(".tc-slide");
const dots = document.getElementById("dots");
const prev = document.getElementById("prevArrow");
const next = document.getElementById("nextArrow");
let current = 0;

function show(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
  document.querySelectorAll(".tc-dots button").forEach((d, i) => d.classList.toggle("active", i === index));
}

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => { current = i; show(current); });
  dots.appendChild(dot);
});

show(0);

prev.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  show(current);
});

next.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  show(current);
});
