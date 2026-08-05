# Slide-Up Minimal Tech Popover

## What does this do?
A pure CSS popover styled for minimalist tech interfaces, sliding up smoothly from its trigger with a compact, dark, low-noise design.

## How is it used?
```html
<div class="tsu-popover-wrap">
  <button class="tsu-popover-trigger" id="tsuBtn" aria-expanded="false" aria-controls="tsuBox">
    Configure
  </button>

  <div class="tsu-popover-box" id="tsuBox" role="dialog" aria-labelledby="tsuBoxTitle" aria-hidden="true">
    <span class="tsu-popover-label">Settings</span>
    <h3 id="tsuBoxTitle">Title</h3>
    <p>Content goes here.</p>
    <button class="tsu-popover-close" id="tsuCloseBtn">Close</button>
  </div>
</div>
```
Toggle `is-open` on `.tsu-popover-box` (with `aria-hidden`/`aria-expanded` updates, handled in the demo script) to trigger the slide-up transition. Customize via `--tsu-offset`, `--tsu-duration`, `--tsu-easing`.

## Why is it useful?
It offers a snappy, dark-themed slide-up popover suited to minimalist tech UIs (settings panels, config popovers) — CSS-only animation, minimal JS for state, keyboard accessible (Escape, click-outside close), and respects `prefers-reduced-motion`, matching EaseMotion's lightweight, animation-first philosophy.