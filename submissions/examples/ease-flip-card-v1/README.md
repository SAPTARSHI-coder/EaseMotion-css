# ease-flip-card

Submission for Issue [#1] — Animated 3D Flip Card Component

## What this adds

A reusable pure-CSS 3D flip card component using `transform-style: preserve-3d`
and `rotateY`/`rotateX`, for showing front/back content such as profile
summaries, product previews, or quiz cards. Zero JavaScript required for the
default hover-trigger variant.

## How It Works

```css
.ease-flip-card-inner {
  transform-style: preserve-3d;
  transition: transform var(--ease-flip-duration) cubic-bezier(0.4, 0.2, 0.2, 1);
}
.ease-flip-card:hover .ease-flip-card-inner {
  transform: rotateY(180deg);
}
.ease-flip-card-front,
.ease-flip-card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}
.ease-flip-card-back {
  transform: rotateY(180deg);
}
```

The back face is pre-rotated 180deg and hidden via `backface-visibility`,
so only one face is visible at a time as the inner wrapper rotates.

## HTML Structure

```html
<div class="ease-flip-card">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front">Front</div>
    <div class="ease-flip-card-back">Back</div>
  </div>
</div>
```

## Click Trigger Variant

Add `ease-flip-card--click` and toggle the `is-flipped` class via JS:

```html
<div class="ease-flip-card ease-flip-card--click" id="card">
  <div class="ease-flip-card-inner">
    <div class="ease-flip-card-front">Front</div>
    <div class="ease-flip-card-back">Back</div>
  </div>
</div>
```

```js
document.getElementById('card').addEventListener('click', function () {
  this.classList.toggle('is-flipped');
});
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-flip-duration` | 0.8s | Flip transition duration |
| `--ease-flip-width` | 260px | Card width |
| `--ease-flip-height` | 340px | Card height |
| `--ease-flip-radius` | 16px | Card corner radius |
| `--ease-flip-front-bg` | #1e293b | Front face background |
| `--ease-flip-back-bg` | #334155 | Back face background |

## Classes

| Class | Description |
|---|---|
| `ease-flip-card--click` | Switches trigger from hover to click (toggle `is-flipped`) |
| `ease-flip-card--vertical` | Flips on the X axis instead of Y axis |
| `ease-flip-card--fast` | 0.4s flip duration |
| `ease-flip-card--slow` | 1.4s flip duration |
| `ease-flip-card--sm` | Smaller card size |
| `ease-flip-card--lg` | Larger card size |

## Accessibility

- Works with keyboard-focusable content since it's pure CSS transform, no
  content is removed from the DOM.
- Recommend adding `aria-pressed` on the trigger element for the click
  variant to communicate flip state to screen readers.
- Respects `prefers-reduced-motion` by disabling the flip transition.

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, and `data-theme="dark"`.
