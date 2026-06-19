function animateCounter(el, target, duration) {
  const start = performance.now();
  const initial = 0;
  function tick(now) {
    const pct = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - pct, 3);
    const val = Math.floor(initial + (target - initial) * eased);
    el.textContent = val.toLocaleString();
    if (pct < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

animateCounter(document.getElementById("odometer1"), 12483, 2000);
animateCounter(document.getElementById("odometer2"), 8750, 2500);
animateCounter(document.getElementById("odometer3"), 3201, 1500);
