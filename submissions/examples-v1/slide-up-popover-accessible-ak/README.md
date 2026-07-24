# Slide-Up Accessible Popover

## What does this do?
A pure CSS popover that slides up smoothly on open, built with accessibility as the primary design constraint (focus trapping, ARIA states, keyboard support).

## How is it used?
```html
<div class="access-popover-wrap">
  <button class="access-popover-trigger" id="accessBtn" aria-expanded="false" aria-controls="accessBox">
    Show Details
  </button>

  <div class="access-popover-box" id="accessBox" role="dialog" aria-labelledby="accessBoxTitle" aria-hidden="true">
    <h3 id="accessBoxTitle">Title</h3>
    <p>Content goes here.</p>
    <button class="access-popover-close" id="accessCloseBtn">Close</button>
  </div>
</div>
```
Toggle the `is-open` class on `.access-popover-box` and update `aria-hidden`/`aria-expanded` to trigger the slide-up animation (handled in `demo.html`'s script). Customize via `--access-offset`, `--access-duration`, `--access-easing`.

## Why is it useful?
Accessibility is often an afterthought in animated components. This submission bakes in `role="dialog"`, live `aria-hidden`/`aria-expanded` state, Escape-to-close, and focus trapping/return, alongside CSS-only slide-up motion and `prefers-reduced-motion` support — directly matching EaseMotion's philosophy of accessible, human-readable, animation-first components.