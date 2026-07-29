let current = 1;
const total = 4;

function updateStepper() {
  document.querySelectorAll(".stepper-step").forEach((el) => {
    const s = parseInt(el.dataset.step);
    el.classList.toggle("active", s === current);
    el.classList.toggle("completed", s < current);
  });
  document.getElementById("stepPrev").disabled = current === 1;
  document.getElementById("stepNext").disabled = current === total;
}

document.getElementById("stepNext").addEventListener("click", () => {
  if (current < total) { current++; updateStepper(); }
});

document.getElementById("stepPrev").addEventListener("click", () => {
  if (current > 1) { current--; updateStepper(); }
});

updateStepper();
