const display = document.getElementById("ctDisplay");
const startBtn = document.getElementById("ctStart");
const resetBtn = document.getElementById("ctReset");
let count = 10;
let interval = null;

function update() {
  display.textContent = count;
  if (count <= 0) {
    clearInterval(interval);
    interval = null;
    display.classList.add("done");
    startBtn.textContent = "Start";
  }
}

startBtn.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    startBtn.textContent = "Start";
    return;
  }
  if (count <= 0) { count = 10; display.classList.remove("done"); }
  startBtn.textContent = "Pause";
  interval = setInterval(() => {
    count--;
    update();
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  count = 10;
  display.classList.remove("done");
  startBtn.textContent = "Start";
  update();
});
