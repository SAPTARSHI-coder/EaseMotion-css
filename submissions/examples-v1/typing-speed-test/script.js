const promptEl = document.getElementById("tsPrompt");
const area = document.getElementById("tsArea");
const timeEl = document.getElementById("tsTime");
const wpmEl = document.getElementById("tsWpm");
const accEl = document.getElementById("tsAcc");
const startBtn = document.getElementById("tsStart");
const resetBtn = document.getElementById("tsReset");

const prompt = promptEl.textContent.trim();
let startTime = null;
let timer = null;
let running = false;

startBtn.addEventListener("click", () => {
  if (running) return;
  area.disabled = false;
  area.focus();
  running = true;
  startBtn.textContent = "Running...";
  startTime = Date.now();
  timer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeEl.textContent = elapsed;
    const typed = area.value.trim();
    if (typed.length > 0) {
      const words = typed.split(/\s+/).length;
      const mins = elapsed / 60;
      wpmEl.textContent = mins > 0 ? Math.round(words / mins) : 0;
      let correct = 0;
      for (let i = 0; i < typed.length && i < prompt.length; i++) {
        if (typed[i] === prompt[i]) correct++;
      }
      accEl.textContent = Math.round((correct / typed.length) * 100);
    }
    if (typed.length >= prompt.length) {
      clearInterval(timer);
      area.disabled = true;
      startBtn.textContent = "Done!";
      running = false;
    }
  }, 200);
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  running = false;
  area.value = "";
  area.disabled = true;
  timeEl.textContent = "0";
  wpmEl.textContent = "0";
  accEl.textContent = "100";
  startBtn.textContent = "Start Test";
  startTime = null;
});
