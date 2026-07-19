# Slide-Up Neumorphic Popover

## What does this do?
A pure CSS popover with a soft, embossed neumorphic ("soft UI") look that slides up smoothly on open.

## How is it used?
```html
<div class="neu-popover-wrap">
  <button class="neu-popover-trigger" id="neuBtn" aria-expanded="false" aria-controls="neuBox">
    Open Panel
  </button>

  <div class="neu-popover-box" id="neuBox" role="dialog" aria-labelledby="neuBoxTitle" aria-hidden="true">
    <h3 id="neuBoxTitle">Title</h3>
    <p>Content goes here.</p>
    <button class="neu-popover-close" id="neuCloseBtn">Close</button>
  </div>
</div>
```
Toggle `is-open` on `.neu-popover-box` (with `aria-hidden`/`aria-expanded` updates, handled in the demo script) to trigger the slide-up transition. Customize via `--neu-offset`, `--neu-duration`, `--neu-easing`.

## Why is it useful?
It brings the neumorphic design trend — soft embossed shadows, low-contrast tactile surfaces — into EaseMotion's examples, combined with a smooth CSS-only slide-up motion. Keyboard support (Escape, click-outside close), ARIA dialog semantics, and `prefers-reduced-motion` handling keep it accessible despite the low-contrast aesthetic, fitting EaseMotion's lightweight, animation-first philosophy.