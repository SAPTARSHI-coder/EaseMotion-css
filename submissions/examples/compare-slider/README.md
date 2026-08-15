# Before/After Image Comparison Slider

A draggable before/after comparison slider with a styled center handle. Built primarily with HTML and CSS.

## Features

- ↔️ Draggable divider using a native `<input type="range">` for accessible, built-in drag behavior
- 🎯 Styled center handle with a hover scale effect
- 🏷️ "Before" / "After" labels
- 📱 Responsive — maintains a 16:10 aspect ratio at any width
- ♿ Uses a native range input, so it's keyboard-operable and screen-reader friendly out of the box
- 🧩 HTML + CSS drives the visuals; a single line of JS is needed to fully sync the divider position dynamically (see note below)

## Usage

```html
<div class="compare">
  <div class="compare-after">
    <div class="compare-label compare-label--after">After</div>
  </div>

  <div class="compare-before">
    <div class="compare-label compare-label--before">Before</div>
  </div>

  <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Comparison slider" />
  <div class="compare-handle"></div>
</div>
```

Replace the gradient backgrounds on `.compare-before`/`.compare-after` with your own `background-image` (before/after photos).

## Important implementation note

CSS alone cannot read a live `<input>` value into another element's `clip-path` — there's no CSS-only way to bind them. This submission ships a fully styled, accessible slider with a working native range input and a correctly positioned default divider at 50%, but keeping the visual clip in sync as the user drags requires one line of JavaScript:

```js
const range = document.querySelector('.compare-range');
const before = document.querySelector('.compare-before');
range.addEventListener('input', () => {
  before.style.clipPath = `inset(0 ${100 - range.value}% 0 0)`;
});
```

This keeps the component's structure and animation entirely CSS-driven while being transparent that live dragging needs this small script, consistent with the issue's request for a comparison *slider* interaction.

## Files

- `demo.html` — live example with a default 50/50 split
- `style.css` — all styles, layout, and hover animation
- `README.md` — this file

## Notes

The hover scale on the handle icon is pure CSS `transition`; only the drag-to-reveal behavior needs the one-line JS listener above.