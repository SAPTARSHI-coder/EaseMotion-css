# Typing Text Animation Utilities

CSS-only animations for typewriter effects, blinking cursors, and staggered text reveals. No JavaScript required.

## Features

- **Typewriter**: character-by-character reveal using CSS `steps()`
- **Blinking cursor**: standalone or attached to text
- **Fade reveal**: staggered letter-by-letter opacity animation
- **Scan reveal**: horizontal wipe using `clip-path`
- **Backspace effect**: text erases character by character
- **Loading bar**: gradient fill with typing-style motion
- **Cursor variants**: 7 colors, 3 widths
- **Dark mode and reduced motion** support

## Usage

```html
<!-- Typewriter with blinking cursor -->
<div style="display:flex; align-items:center; gap:4px;">
  <span class="typewriter" style="--type-chars: 20ch;">Hello World</span>
  <span class="cursor-blink"></span>
</div>
```

Staggered fade reveal:

```html
<div style="font-size:2rem; font-weight:700;">
  <span class="fade-reveal fade-reveal--1">H</span>
  <span class="fade-reveal fade-reveal--2">i</span>
  <span class="fade-reveal fade-reveal--3">!</span>
</div>
```

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--type-chars` | 20ch | Character count for width animation |
| `--type-duration` | 3s | Typing animation duration |
| `--reveal-duration` | 0.4s | Fade reveal duration |
| `--cursor-speed` | 0.75s | Blink interval |

## Files

- `style.css` — all typing animation utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
