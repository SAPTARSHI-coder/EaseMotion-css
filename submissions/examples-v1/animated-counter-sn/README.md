# Animated Number Counter

## Summary
Tabular-numeric stat counter. Pair with JS Intersection Observer to count up on scroll.

## JS
```js
function countUp(el) {
  const target = +el.dataset.target;
  let current = 0;
  const step = target / 60;
  const tick = () => { current = Math.min(current + step, target); el.textContent = Math.round(current); if (current < target) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
```