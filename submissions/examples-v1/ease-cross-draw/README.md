# Cross Draw Animation

## What does this add?

An SVG X / cross-mark icon that draws itself stroke-by-stroke for error/failure states — the error-state counterpart to a checkmark-draw success animation.

## How does a developer use it?

```html
<div class="error-card" id="errorCard">
  <div class="cross-container">
    <svg class="cross-svg" viewBox="0 0 52 52">
      <circle class="cross-circle" cx="26" cy="26" r="25" fill="none" />
      <path class="cross-line cross-line--a" fill="none" d="M16 16 L36 36" />
      <path class="cross-line cross-line--b" fill="none" d="M36 16 L16 36" />
    </svg>
  </div>
</div>
```

```js
// Adding this class is what triggers the draw animation
errorCard.classList.add("error");
```

The X is built from **two separate `<path>` strokes**, each animated independently with `stroke-dasharray` / `stroke-dashoffset`. The second stroke's draw is delayed slightly behind the first (`--ease-cross-delay-line-b` vs `--ease-cross-delay-line-a`), so the two diagonal strokes visibly cross as they finish drawing, rather than appearing simultaneously.

Customize via CSS variables:

```css
:root {
  --ease-cross-color: #ef4444;
  --ease-cross-speed-circle: 0.6s;
  --ease-cross-speed-line: 0.25s;
  --ease-cross-delay-line-a: 0.5s;
  --ease-cross-delay-line-b: 0.7s;
}
```

## Why does it fit EaseMotion CSS?

Success and error states are a matched pair in almost every form, payment flow, or upload widget. This gives EaseMotion a ready-made error/failure icon animation that mirrors the visual language of a checkmark-draw success animation (same circle-then-mark drawing technique, same class-toggle trigger pattern), so the two can be dropped in side-by-side for consistent status feedback.

## Files

- demo.html
- style.css

## Usage

Open `demo.html` and click "Simulate Failure" to trigger the cross-draw animation. Click "Reset Animation" to replay it.

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Accessibility

The draw animation respects `prefers-reduced-motion: reduce` — under that preference, the X renders instantly fully drawn instead of animating.
