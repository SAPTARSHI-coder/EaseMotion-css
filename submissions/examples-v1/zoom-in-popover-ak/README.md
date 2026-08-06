# Zoom-In Popover

## What does this do?
A pure CSS popover component that appears with a smooth zoom-in (scale + fade) transition when triggered.

## How is it used?
```html
<div class="popover-demo-wrap">
  <button class="popover-trigger" id="popoverBtn" aria-expanded="false" aria-describedby="popoverBox">
    Click me
  </button>

  <div class="popover-box" id="popoverBox" role="tooltip">
    <h3>Title</h3>
    <p>Popover content goes here.</p>
  </div>
</div>
```
Toggle the `is-open` class on `.popover-box` (via the small inline script in `demo.html`) to trigger the zoom-in animation. Timing and scale can be customized through CSS custom properties: `--popover-scale-from`, `--popover-duration`, `--popover-easing`.

## Why is it useful?
It adds a common, modern interaction pattern (an animated popover) to the EaseMotion examples library using only CSS transitions for the animation, keeping JavaScript overhead to a minimum (just open/close state toggling). It's responsive, keyboard-dismissible (Escape key), and respects `prefers-reduced-motion` for accessibility — fitting EaseMotion's philosophy of lightweight, accessible motion.