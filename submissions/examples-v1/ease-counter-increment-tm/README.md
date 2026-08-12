# ease-counter-increment

Counter/increment animation for EaseMotion CSS.

## Usage

```html
<div class="stat-card" data-count="5000" data-suffix="+"><span class="stat-number">0</span></div>
```

```js
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);\    const eased = progress * (2 - progress); // easeOutQuad
    el.querySelector('.stat-number').textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```
