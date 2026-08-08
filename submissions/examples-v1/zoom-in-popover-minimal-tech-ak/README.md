# Zoom-In Minimal Tech Popover

## What does this do?
A pure CSS zoom-in animated popover styled for minimalist tech interfaces, using a compact scale-from-corner transition.

## How is it used?
```html
<div class="tech-popover-wrap">
  <button class="tech-popover-trigger" id="techBtn" aria-expanded="false" aria-describedby="techBox">
    Learn more
  </button>

  <div class="tech-popover-box" id="techBox" role="tooltip">
    <span class="tech-popover-label">Feature</span>
    <h3>Title</h3>
    <p>Description text.</p>
  </div>
</div>
```
Toggle `is-open` on `.tech-popover-box` to trigger the zoom-in from the top-left corner. Customize via `--tech-scale-from`, `--tech-duration`, `--tech-easing`.

## Why is it useful?
It provides a snappy, low-visual-noise popover suited to dark, minimalist tech UIs — dark background, monospace-friendly accent color, fast timing, CSS-only animation with minimal JS for state, keyboard support, and `prefers-reduced-motion` handling, in line with EaseMotion's lightweight philosophy.