# Ease Back to Top

## What does this do?

Displays an animated floating "back to top" button that springs into view after the user scrolls past 200 px, and smoothly disappears when back at the top — available in three visual variants: a classic circle, a scroll-progress ring, and an expanding pill label.

## How is it used?

**1. Add the anchor at the page top:**

```html
<div id="top"></div>
```

**2. Pick a variant and add it before `</body>`:**

### Variant A — Classic Circle

```html
<a href="#top" class="btt-btn is-visible" aria-label="Back to top of page">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       stroke-width="2.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
</a>
```

### Variant B — Scroll Progress Ring

Wrap the button in `.btt-progress-wrap` with an SVG ring overlay. The JS scroll listener updates `stroke-dashoffset` on `#btt-ring-bar` to reflect page progress.

### Variant C — Expanding Pill

```html
<a href="#top" class="btt-pill" aria-label="Back to top of page">
  <!-- arrow svg -->
  <span class="btt-pill-label" aria-hidden="true">Top</span>
</a>
```

Hover expands the pill to reveal the "Top" label.

**3. Add the scroll trigger script (vanilla JS, no dependencies):**

```html
<script>
  var THRESHOLD = 200;
  var btn = document.getElementById('btt-circle');

  window.addEventListener('scroll', function () {
    btn.classList.toggle('is-visible', window.scrollY > THRESHOLD);
  }, { passive: true });
</script>
```

See `demo.html` for the complete multi-variant implementation including progress ring logic.

## Why is it useful?

EaseMotion CSS is built on the idea that motion should be composable, readable, and expressive. A "back to top" button is one of the most universally needed UI patterns on long-content pages, and this submission extends EaseMotion's motion language to it with:

- **Elastic spring entrance** using `cubic-bezier(0.34, 1.56, 0.64, 1)` — the same easing curve used across EaseMotion's hover and entrance classes.
- **Three distinct variants** (circle, progress ring, pill) that map cleanly to future `ease-btt`, `ease-btt-ring`, and `ease-btt-pill` utility classes, demonstrating composable modifier thinking.
- **Scroll-progress ring** gives instant visual feedback on reading depth — a common UX pattern in modern editorial and documentation sites.
- **Keyboard + screen reader accessible** — `aria-label`, `:focus-visible` ring, and `prefers-reduced-motion` all handled.
- **Opens directly in the browser** — `demo.html` requires no server, no build step, and no CDN beyond an optional Google Font.

Once curated, the maintainer can standardise class names to `ease-back-to-top`, `ease-btt-ring`, `ease-btt-pill` and integrate the keyframe/transition tokens into `core/animations.css`.
