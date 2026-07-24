const steps = document.querySelectorAll(".timeline-step");
const fill = document.querySelector(".progress-fill");
const btn = document.getElementById("nextBtn");

let current = 2;

btn.addEventListener("click", () => {

  if(current >= steps.length) return;

  steps[current].classList.remove("current");
  steps[current].classList.add("active");
  steps[current].innerHTML = "✓";

  current++;

  if(current < steps.length){
    steps[current].classList.add("current");
  }

  fill.style.width =
    ((current) / (steps.length - 1)) * 100 + "%";
});