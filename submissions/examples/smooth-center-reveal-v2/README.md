# Smooth Center Reveal

A composable entrance animation utility that smoothly scales and fades elements into the center of their container.

## Overview

The **Smooth Center Reveal** effect animates a container from `scale(0.95)` + `opacity(0)` to `scale(1)` + `opacity(1)` using a fluid `cubic-bezier` easing curve. On hover, a micro-interaction lifts the card subtly to draw user focus.

## Features

- **Entry animation** — Scales up and fades in on page load or toggle
- **Micro-interaction hover** — Subtle lift with `translateY(-4px)` and `scale(1.02)`
- **Center locking** — Uses flexbox centering to keep the element perfectly centered
- **Composable** — Works with glass, solid, or bordered card themes
- **Staggerable** — Apply `delay-100` through `delay-400` classes for cascading reveals
- **Toggle support** — Toggle visibility with smooth animation via `.hidden` class

## Usage

```html
<div class="center-reveal-container">
  <div class="center-reveal-card">
    <h3>Your Content</h3>
    <p>Description here.</p>
  </div>
</div>
```

### Staggered Row

```html
<div class="stagger-row">
  <div class="center-reveal-card delay-100">...</div>
  <div class="center-reveal-card delay-200">...</div>
  <div class="center-reveal-card delay-300">...</div>
</div>
```

### Toggle Visibility

```js
card.classList.toggle('hidden');
```

## Keyframes

| Keyframe | Property | Value |
|----------|----------|-------|
| `0%` | `opacity` / `transform` | `0` / `scale(0.95)` |
| `100%` | `opacity` / `transform` | `1` / `scale(1)` |

## Card Themes

- `.card-glass` — Glassmorphism with backdrop blur
- `.card-solid` — Solid gradient background
- `.card-bordered` — Transparent with accent border

## Files

- `demo.html` — Interactive demo page with single, staggered, and toggle examples
- `style.css` — Styles, keyframes, themes, and layout utilities
- `README.md` — This file
