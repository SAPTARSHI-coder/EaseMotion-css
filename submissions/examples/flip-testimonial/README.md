# Flip-Card Testimonial Carousel

A testimonial card that flips in 3D on hover to reveal a quote and rating on the back. Pure HTML and CSS — no JavaScript required.

## Features

- 🔄 Smooth 3D flip using `perspective` + `rotateY` + `backface-visibility`
- ⭐ Back face shows a quote and star rating on a gradient background
- 📱 Responsive — scene shrinks on narrow screens
- ♿ Respects `prefers-reduced-motion` (flip becomes instant)
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<div class="flip-scene">
  <div class="flip-card">
    <div class="flip-face flip-face--front">
      <!-- avatar, name, role -->
    </div>
    <div class="flip-face flip-face--back">
      <!-- quote, stars -->
    </div>
  </div>
</div>
```

Keep `.flip-scene` and `.flip-card` paired — the scene supplies `perspective`, the card does the rotation.

## Why it fits EaseMotion CSS

The flip is pure `transform: rotateY()` with `transition`, no JavaScript. Readable class names (`flip-scene`, `flip-face--front`, `flip-face--back`).

## Files

- `demo.html` — one example testimonial card
- `style.css` — all styles and the flip animation
- `README.md` — this file

## Notes

For a true "carousel" with multiple cards cycling automatically, you'd add a small JS interval to swap active cards — this submission provides the single flip-card unit and hover interaction as the reusable building block.