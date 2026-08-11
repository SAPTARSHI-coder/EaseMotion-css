const badge = document.getElementById("counterBadge");
const resetBtn = document.getElementById("resetBtn");
let count = 0;

function increment() {
  count++;
  badge.textContent = count;
  badge.classList.remove("bump");
  requestAnimationFrame(() => badge.classList.add("bump"));
}

resetBtn.addEventListener("click", () => {
  count = 0;
  badge.textContent = "0";
  badge.classList.remove("bump");
});

setInterval(increment, 2000);
badge.addEventListener("click", increment);
