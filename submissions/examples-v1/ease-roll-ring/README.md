# Scroll Progress Ring

## What does this add?

A circular ring, fixed at the corner of the screen, whose SVG circle fills as the user scrolls down the page — the circular counterpart to a linear reading-progress bar.

## How is it used?

```html
<div class="ease-scroll-ring">
  <svg viewBox="0 0 64 64">
    <circle class="ease-scroll-ring-track" cx="32" cy="32" r="28" />
    <circle class="ease-scroll-ring-fill" id="ringFill" cx="32" cy="32" r="28" />
  </svg>
  <span class="ease-scroll-ring-label" id="ringLabel">0%</span>
</div>
```

```js
const CIRCUMFERENCE = 2 * Math.PI * 28;
ringFill.style.strokeDasharray = `${CIRCUMFERENCE}`;

window.addEventListener("scroll", () => {
  const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  ringFill.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
}, { passive: true });
```

The ring's fill is mapped directly to `stroke-dashoffset`: at 0% scroll, the offset equals the full circumference (nothing visible); at 100%, the offset is 0 (the full ring is drawn). Color is controlled entirely through `--ease-ring-color`:

```css
.ease-scroll-ring{
  --ease-ring-color: #6c63ff;
  --ease-ring-track: rgba(255,255,255,.08);
  --ease-ring-size: 64px;
}
```

## Why does it fit EaseMotion CSS?

Reading-progress indicators are everywhere on blogs, docs, and long-form articles, and the circular variant feels less intrusive than a full-width top bar since it sits quietly in a corner. This packages the SVG math, fixed positioning, and color theming into a few reusable classes so a developer only has to wire up one scroll listener.

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and scroll down — the ring in the bottom-right corner fills as you go, with a live percentage label. Try the color swatches to retheme `--ease-ring-color`.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

The ring is marked `aria-hidden="true"` since it's a supplementary visual indicator, not essential content. The fill transition respects `prefers-reduced-motion: reduce` (the ring still updates, just without the smoothing transition between scroll ticks).
