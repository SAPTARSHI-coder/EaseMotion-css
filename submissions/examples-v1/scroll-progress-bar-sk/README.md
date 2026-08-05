# Scroll-Driven Progress Bar with Percentage Label

## What does this do?
A fixed reading progress bar that fills as the user scrolls, powered by CSS Scroll-Driven Animations (`animation-timeline: scroll()`). Includes a percentage label badge that fades in after the first 5% of scroll. No JavaScript required for the animation itself.

## How is it used?

```html
<!-- Add to <body> — works automatically via CSS scroll-timeline -->
<div class="scroll-progress">
  <div class="scroll-progress__bar"></div>
</div>

<!-- Optional percentage label (update text via JS for display) -->
<div class="scroll-progress__label" id="pct">0%</div>

<!-- Glow variant -->
<div class="scroll-progress scroll-progress--glow">…</div>

<!-- Thick variant -->
<div class="scroll-progress scroll-progress--thick">…</div>
```

JS to update the label text only (animation itself is CSS):
```js
window.addEventListener('scroll', () => {
  const pct = Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
  document.getElementById('pct').textContent = pct + '%';
});
```

## Why is it useful?
CSS Scroll-Driven Animations (`animation-timeline: scroll()`) eliminate the need for JavaScript scroll handlers entirely for this pattern. The animation runs on the compositor thread for 60/120fps smoothness. `prefers-reduced-motion` falls back to a CSS custom property driven by JS for environments that don't support scroll-driven animations yet.
