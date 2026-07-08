document.addEventListener("DOMContentLoaded", () => {
  const rulerTop = document.getElementById("rulerTop");
  const rulerLeft = document.getElementById("rulerLeft");
  const toggleBtn = document.getElementById("toggleRulers");
  const resetBtn = document.getElementById("resetRulers");
  const measureLines = document.querySelectorAll(".measure-line");
  let rulersVisible = false;

  const showRulers = (show) => {
    rulerTop.classList.toggle("active", show);
    rulerLeft.classList.toggle("active", show);
    rulersVisible = show;
  };

  const showMeasureLines = (show) => {
    measureLines.forEach((line) => line.classList.toggle("visible", show));
  };

  toggleBtn.addEventListener("click", () => {
    const next = !rulersVisible;
    showRulers(next);
    showMeasureLines(next);
  });

  resetBtn.addEventListener("click", () => {
    showRulers(false);
    showMeasureLines(false);
  });

  showRulers(true);
  showMeasureLines(true);
});
