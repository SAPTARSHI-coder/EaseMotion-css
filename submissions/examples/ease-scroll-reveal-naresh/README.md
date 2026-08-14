# Scroll Reveal Utility

## 1. What does this do?
This utility allows elements to animate smoothly into view as the user scrolls down a page. It sets an initial invisible, offset state and reveals the element with custom transitions once it crosses a configurable viewport threshold.

## 2. How is it used?
Add the `.ease-scroll-reveal` class and any desired direction/delay helpers to your HTML elements:

```html
<div class="ease-scroll-reveal ease-reveal--slide-up ease-delay-200">
  <h3>Scroll Revealed Card</h3>
  <p>Animates when visible.</p>
</div>
```

### Configurable CSS Variables
- `--ease-reveal-threshold`: The percentage of the element that must be visible in the viewport before animating (defaults to `0.1` or 10%).
- `--ease-reveal-duration`: Transition duration (defaults to `800ms`).
- `--ease-reveal-delay`: Delay before the transition runs (defaults to `0ms`).

### JavaScript Trigger Script (<10 lines)
Include this tiny observer script in your project to activate the scroll triggers:

```javascript
document.querySelectorAll('.ease-scroll-reveal').forEach(el => {
  const threshold = parseFloat(getComputedStyle(el).getPropertyValue('--ease-reveal-threshold')) || 0.1;
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ease-revealed');
      observer.unobserve(entry.target);
    }
  }, { threshold });
  observer.observe(el);
});
```

---

## 3. Pure CSS Alternative: `animation-timeline: view()`
For modern browsers that support scroll-driven animations natively without any JavaScript, you can achieve the exact same effect using pure CSS:

```css
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ease-scroll-reveal-css {
  animation: reveal both;
  animation-timeline: view();
  animation-range: entry 10% cover 30%;
}
```

---

## 4. Why is it useful?
Scroll-triggered reveals make long landing pages, portfolios, and product sites feel dynamic and engaging. This utility balances classic compatibility (via a tiny performance-optimized IntersectionObserver JS snippet) with modern standards (supporting native Scroll-Driven CSS timelines).
