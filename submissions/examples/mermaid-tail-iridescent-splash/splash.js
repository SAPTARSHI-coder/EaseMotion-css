/* Mermaid tail splash — submission for #76086
 * Click the tail or press Space to trigger a burst of sparkling water
 * particles. Respects prefers-reduced-motion (no burst when reduced).
 */
(function () {
  var root = document.querySelector(".ease-mti");
  if (!root) return;
  var splash = root.querySelector(".ease-mti__splash");
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function makeBubbles() {
    var b = root.querySelector(".ease-mti__bubbles");
    if (!b) return;
    for (var i = 0; i < 12; i++) {
      var s = document.createElement("span");
      s.style.setProperty("--x", (Math.random() * 100) + "%");
      s.style.animationDelay = (Math.random() * 6) + "s";
      b.appendChild(s);
    }
  }
  makeBubbles();

  function splashAt(x, y) {
    if (prefersReduced) return;
    for (var i = 0; i < 16; i++) {
      var drop = document.createElement("span");
      drop.className = "drop";
      var angle = (Math.PI * 2 * i) / 16;
      var dist = 40 + Math.random() * 60;
      drop.style.left = x + "px";
      drop.style.top = y + "px";
      drop.style.setProperty("--dx", (Math.cos(angle) * dist) + "px");
      drop.style.setProperty("--dy", (Math.sin(angle) * dist) + "px");
      drop.style.background = ["#22d3ee", "#a78bfa", "#ec4899"][i % 3];
      splash.appendChild(drop);
      setTimeout((function (d) { return function () { d.remove(); }; })(drop), 800);
    }
  }

  root.addEventListener("click", function (e) {
    var r = splash.getBoundingClientRect();
    splashAt(e.clientX - r.left, e.clientY - r.top);
  });
  document.addEventListener("keydown", function (e) {
    if (e.code === "Space" && document.activeElement === document.body) {
      e.preventDefault();
      var r = splash.getBoundingClientRect();
      splashAt(r.width / 2, r.height / 2);
    }
  });
})();
