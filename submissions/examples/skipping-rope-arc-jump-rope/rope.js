/* Interactive Jump Rope — submission for #77873
 * Space: jump · S: stop · R: reset · P: pause
 * Tracks successful jumps and exposes speed/jump-height controls.
 */
(function () {
  var root = document.querySelector(".ease-jumprope");
  if (!root) return;
  var rope = root.querySelector(".ease-jumprope__rope");
  var jumper = root.querySelector(".ease-jumprope__jumper");
  var countEl = document.getElementById("jr-count");
  var speed = document.getElementById("jr-speed");
  var height = document.getElementById("jr-height");
  var start = document.getElementById("jr-start");
  var stop = document.getElementById("jr-stop");
  var pause = document.getElementById("jr-pause");
  var reset = document.getElementById("jr-reset");
  var jumps = 0, running = false, paused = false;

  function applyVars() {
    root.style.setProperty("--jr-speed", speed.value);
    root.style.setProperty("--jr-height", height.value);
  }
  speed.addEventListener("input", applyVars);
  height.addEventListener("input", applyVars);

  function jump() {
    if (!running || paused) return;
    jumper.classList.remove("is-jumping");
    void jumper.offsetWidth;
    jumper.classList.add("is-jumping");
    setTimeout(function () { jumps++; countEl.textContent = "Jumps: " + jumps; }, 200);
  }

  start.addEventListener("click", function () { running = true; paused = false; rope.classList.add("is-swinging"); });
  stop.addEventListener("click", function () { running = false; paused = false; rope.classList.remove("is-swinging"); });
  pause.addEventListener("click", function () {
    if (!running) return; paused = !paused;
    rope.style.animationPlayState = paused ? "paused" : "running";
  });
  reset.addEventListener("click", function () { jumps = 0; countEl.textContent = "Jumps: 0"; running = false; paused = false; rope.classList.remove("is-swinging"); });

  document.addEventListener("keydown", function (e) {
    if (e.code === "Space") { e.preventDefault(); jump(); }
    else if (e.key === "s" || e.key === "S") stop.click();
    else if (e.key === "r" || e.key === "R") reset.click();
    else if (e.key === "p" || e.key === "P") pause.click();
  });
  applyVars();
})();
