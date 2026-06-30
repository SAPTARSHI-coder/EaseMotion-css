const compare = document.getElementById("compare");
const before = document.getElementById("compareBefore");
const handle = document.getElementById("compareHandle");
let dragging = false;

handle.addEventListener("mousedown", () => dragging = true);
document.addEventListener("mouseup", () => dragging = false);
document.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  const rect = compare.getBoundingClientRect();
  let x = ((e.clientX - rect.left) / rect.width) * 100;
  x = Math.max(5, Math.min(95, x));
  before.style.width = x + "%";
  handle.style.left = x + "%";
});
