# Core Changes Proposal: Issue #20415

## Feature Overview
Issue #20415 requests dedicated **Scroll Reveal Animation Utility Classes** for EaseMotion CSS.
This submission proposes adding 7 reveal utility classes to `core/animations.css`:

| Class | Effect |
|-------|--------|
| `.ease-reveal-fade` | Smooth opacity fade-in |
| `.ease-reveal-up` | Fade-in with upward slide |
| `.ease-reveal-down` | Fade-in with downward slide |
| `.ease-reveal-left` | Fade-in with left-to-right slide |
| `.ease-reveal-right` | Fade-in with right-to-left slide |
| `.ease-reveal-zoom` | Fade-in with scale-up (0.8 → 1) |
| `.ease-reveal-rotate` | Fade-in with subtle 3D rotation |

## Proposed Implementation
All classes use CSS `@keyframes` with `animation-fill-mode: both` so elements stay at their final visible state after the animation completes. Developers use IntersectionObserver (or a scroll library) to trigger the animation by adding the class on scroll.

### Proposed CSS to add to `core/animations.css`

```css
/* ── Scroll Reveal Keyframes ── */
@keyframes ease-reveal-fade-kf {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes ease-reveal-up-kf {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes ease-reveal-down-kf {
  from { opacity: 0; transform: translateY(-40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes ease-reveal-left-kf {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes ease-reveal-right-kf {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes ease-reveal-zoom-kf {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes ease-reveal-rotate-kf {
  from { opacity: 0; transform: perspective(600px) rotateX(-15deg); }
  to { opacity: 1; transform: perspective(600px) rotateX(0); }
}

/* ── Scroll Reveal Utility Classes ── */
.ease-reveal-fade,
.ease-reveal-up,
.ease-reveal-down,
.ease-reveal-left,
.ease-reveal-right,
.ease-reveal-zoom,
.ease-reveal-rotate {
  opacity: 0;
  animation-fill-mode: both;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
}
.ease-reveal-fade   { animation-name: ease-reveal-fade-kf; }
.ease-reveal-up     { animation-name: ease-reveal-up-kf; }
.ease-reveal-down   { animation-name: ease-reveal-down-kf; }
.ease-reveal-left   { animation-name: ease-reveal-left-kf; }
.ease-reveal-right  { animation-name: ease-reveal-right-kf; }
.ease-reveal-zoom   { animation-name: ease-reveal-zoom-kf; }
.ease-reveal-rotate { animation-name: ease-reveal-rotate-kf; }
```

### Usage
```html
<div class="ease-reveal-up">Content slides up on scroll</div>
```
Trigger with IntersectionObserver:
```js
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.style.animationPlayState = 'running'; });
});
document.querySelectorAll('.ease-reveal-up').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
```

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  .ease-reveal-fade,
  .ease-reveal-up,
  .ease-reveal-down,
  .ease-reveal-left,
  .ease-reveal-right,
  .ease-reveal-zoom,
  .ease-reveal-rotate {
    opacity: 1 !important;
    animation: none !important;
  }
}
```

## Why this is submitted here
Per CONTRIBUTING.md policy and Core Framework Protection, this feature is proposed
as a formal submission in `submissions/` rather than modifying `core/animations.css` directly.

Fixes #20415
