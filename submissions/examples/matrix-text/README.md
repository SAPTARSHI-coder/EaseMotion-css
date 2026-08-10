# Matrix Falling Code Text Effect

## Description
This submission resolves Issue #68989 by providing a CSS-only "Digital Rain" matrix effect. It uses `writing-mode: vertical-rl;` to orient the text in columns top-to-bottom and applies a linear gradient CSS mask that animates downwards to simulate the falling, fading trails.

## Features
- **Pure CSS**: Driven entirely by CSS properties (`writing-mode`, `mask-image`, and `@keyframes`).
- **Vertical Orientation**: Naturally flows the characters downward without manual line breaks.
- **Randomized Columns**: Includes staggered `animation-delay` and `animation-duration` rules for multiple columns to create a random falling rain aesthetic.
- **Matrix Style**: Complete with a classic neon green text-shadow on a black background.

## Usage
Simply wrap columns of text in the `.ease-matrix-container` and add the `.ease-matrix-column` class to each column block.

```html
<div class="ease-matrix-container">
  <div class="ease-matrix-column">1011001011010101011100101</div>
  <div class="ease-matrix-column">ABCDEFGHIJKLMNOPQRSTUVWXY</div>
</div>
```
