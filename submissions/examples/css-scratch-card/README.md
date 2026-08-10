# CSS-Only Scratch-Off Card Reveal

## Description
This submission resolves Issue #68972 by creating a fun, interactive "scratch card" effect using CSS Grid and `:hover` states. It simulates the process of scratching off a top layer to reveal a prize or text hidden underneath without relying on JavaScript event listeners for the logic.

## Features
- Pure CSS logic for the "scratching" effect.
- Uses a CSS Grid overlay (`.ease-scratch-card-mask`) filled with small blocks (`.ease-scratch-card-block`).
- As the user hovers over each block, its `opacity` drops to `0` instantly.
- Utilizes an extreme `transition-delay: 9999s` on mouseout so that once a block is "scratched", it essentially never returns, keeping the content underneath revealed.
- Customizable metallic scratch-off texture using `repeating-linear-gradient`.

## Usage
Wrap your hidden content inside `.ease-scratch-card` and `.ease-scratch-card-content`. Above the content, place the mask `.ease-scratch-card-mask` containing a grid of `.ease-scratch-card-block` elements. 

```html
<div class="ease-scratch-card">
  
  <!-- Content to Reveal -->
  <div class="ease-scratch-card-content">
    You Won $1,000!
  </div>
  
  <!-- Mask Grid (e.g. 10x10) -->
  <div class="ease-scratch-card-mask">
    <!-- Generate 100 blocks here -->
    <div class="ease-scratch-card-block"></div>
    <div class="ease-scratch-card-block"></div>
    <!-- ... -->
  </div>
  
</div>
```

The grid is defined in CSS to auto-fit the container dimensions. Adjust the number of blocks and `grid-template-columns`/`rows` in `style.css` for finer or coarser "scratch" granularity.
