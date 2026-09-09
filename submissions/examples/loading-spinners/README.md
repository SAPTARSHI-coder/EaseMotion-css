# Animated Loading Spinners - Massive Collection

This submission provides an extensive collection of modern CSS-only loading spinner animations, fulfilling the issue [feat: Add animated loading spinner examples #87407](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/87407).

## Overview

Loading indicators are crucial for user experience in web applications. This directory contains a massive auto-generated collection of 100 CSS loading spinners, demonstrating different colors, sizes, and animation speeds.

## Features

- **100 Unique Variations**: Each variation has a unique color (using HSL), size, and animation duration.
- **CSS Only**: No JavaScript or external libraries are required for the animations.
- **Light/Dark Mode**: The demo includes a built-in theme toggle.

## Usage

1. Open `demo.html` in your browser.
2. Toggle between Light and Dark mode using the button at the top right.
3. Find a spinner you like, and note its variation number (e.g., Variation 42).
4. Copy the HTML from `demo.html` for that specific spinner.
5. Copy the corresponding CSS from `style.css`.

### HTML Example

```html
<div class="spinner-circular-42"></div>
<div class="spinner-bouncing-42">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
```

### CSS Example

Check `style.css` for the `.spinner-circular-X` and `.spinner-bouncing-X` classes corresponding to your chosen variation.

## Customization

You can easily customize any of the spinners by adjusting their properties in `style.css`:
- Modify `width`, `height`, and `border-width` for size.
- Adjust `border-color` and `background-color` for theming.
- Tweak the `animation` duration to make them spin or bounce faster/slower.
