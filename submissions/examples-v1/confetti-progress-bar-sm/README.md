# Confetti Progress Bar

A pure CSS progress component for celebratory portfolio and onboarding moments.
It pairs a smooth animated fill with a small confetti burst at the leading edge
of the progress bar.

Resolves Issue: #42622

## Features

- Pure CSS implementation with no JavaScript.
- Uses `ease-*` class names plus `ease-confetti-*` custom properties and
  keyframes.
- Configurable progress through `--ease-confetti-value` on each progress track.
- Accessible `role="progressbar"` markup with `aria-valuemin`, `aria-valuemax`,
  and `aria-valuenow`.
- Responsive layout for narrow screens.
- Reduced-motion support that disables fill, shine, and confetti animations.

## Usage

```html
<div
  class="ease-confetti-track"
  role="progressbar"
  aria-label="Launch checklist progress"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="96"
  style="--ease-confetti-value: 96%"
>
  <span class="ease-confetti-fill">
    <span class="ease-confetti-burst" aria-hidden="true"></span>
  </span>
</div>
```

Theme the component by overriding the CSS variables:

```css
:root {
  --ease-confetti-primary: #ff6b35;
  --ease-confetti-secondary: #ffd166;
  --ease-confetti-accent: #06d6a0;
  --ease-confetti-duration: 1150ms;
}
```

## Files

- `demo.html` - self-contained browser demo with three progress examples.
- `style.css` - animation tokens, progress bar styles, responsive rules, and
  reduced-motion handling.
- `README.md` - usage, feature, and accessibility notes.

## Accessibility

Each track uses native progressbar ARIA attributes so assistive technologies can
read the current percentage. The decorative confetti burst is hidden from the
accessibility tree with `aria-hidden="true"`.
