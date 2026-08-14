# Animated Skeleton Loading Screen

A shimmering skeleton loading placeholder for cards with avatar/thumbnail and text lines. Pure HTML and CSS — no JavaScript required.

## Features

- ✨ Smooth left-to-right shimmer animation via `background-position`
- 🧱 Reusable blocks for avatars, thumbnails, and text lines of varying widths
- 📱 Responsive — padding and gaps scale down on small screens
- ♿ Respects `prefers-reduced-motion` (shimmer freezes to a static placeholder)
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<div class="skeleton-card">
  <div class="skeleton skeleton--avatar"></div>
  <div class="skeleton-lines">
    <div class="skeleton skeleton--line skeleton--line-lg"></div>
    <div class="skeleton skeleton--line skeleton--line-md"></div>
  </div>
</div>
```

Swap `skeleton--avatar` for `skeleton--thumb` for a rounded-square thumbnail placeholder instead of a circle. Line width modifiers: `skeleton--line-lg`, `--md`, `--sm`.

## Why it fits EaseMotion CSS

The shimmer is a single `@keyframes` animating `background-position` on a gradient — no JavaScript, no extra markup. Class names are simple and readable (`skeleton`, `skeleton--avatar`, `skeleton--line-lg`).

## Files

- `demo.html` — two example skeleton cards
- `style.css` — all styles and the shimmer animation
- `README.md` — this file

## Notes

Swap the skeleton blocks for real content once your data loads — typically by toggling a `is-loaded` class or conditionally rendering, handled in your app's JavaScript.