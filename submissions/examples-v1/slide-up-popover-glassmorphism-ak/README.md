# Slide-Up Glassmorphism Popover

## What does this do?
A pure CSS popover with a frosted-glass (glassmorphism) look — translucent background, blur, and subtle border — that slides up smoothly on open.

## How is it used?
```html
<div class="glass-popover-wrap">
  <button class="glass-popover-trigger" id="glassBtn" aria-expanded="false" aria-controls="glassBox">
    Show Info
  </button>

  <div class="glass-popover-box" id="glassBox" role="dialog" aria-labelledby="glassBoxTitle" aria-hidden="true">
    <h3 id="glassBoxTitle">Title</h3>
    <p>Content goes here.</p>
    <button class="glass-popover-close" id="glassCloseBtn">Close</button>
  </div>
</div>
```
Toggle `is-open` on `.glass-popover-box` (with `aria-hidden`/`aria-expanded` updates, handled in the demo script) to trigger the slide-up transition. Customize via `--glass-offset`, `--glass-duration`, `--glass-easing`.

## Why is it useful?
It brings the popular glassmorphism aesthetic — `backdrop-filter` blur, translucent tint, soft borders — into EaseMotion's examples, paired with smooth CSS-only slide-up motion. Keyboard support (Escape, click-outside close), ARIA dialog semantics, and `prefers-reduced-motion` handling keep it accessible, in line with EaseMotion's lightweight animation-first philosophy.