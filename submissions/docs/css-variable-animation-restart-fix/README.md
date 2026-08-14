# Fix: CSS Variable Update Does Not Restart Keyframe Animations

Relates to bug report **#40951**.

## 1. What does this do?

This demo documents and fixes a browser limitation: when a CSS custom property
used inside an `animation` shorthand is updated at runtime, the browser does
**not** automatically restart or recompute the animation. The element keeps
running the old animation with its previously computed values.

## 2. How is it used?

Add this tiny helper function wherever you need to change an animation-related
CSS variable at runtime:

```js
function restartAnimation(el) {
  el.style.animation = 'none'; // pause the animation
  void el.offsetWidth;         // force a browser reflow (style flush)
  el.style.animation = '';     // restore — browser re-reads the variable
}
```

Then call it immediately after setting the new variable value:

```js
element.style.setProperty('--ease-speed-medium', '2s');
restartAnimation(element); // picks up the new value instantly
```

## 3. Why is it useful?

EaseMotion CSS is built around CSS custom properties (`--ease-speed-*`,
`--ease-color-*`, etc.) for theming and token-based design. When developers
toggle themes or change token values dynamically (e.g., switching between a
fast and slow motion mode), the animation must restart to reflect the new values.

Without this fix, animations are "frozen" with the old computed values, breaking
dynamic theming entirely. This helper is minimal (3 lines), zero-dependency,
and works in all modern browsers.

## Root Cause

Browsers compute `animation-duration` once when the animation first starts.
CSS variables are resolved at **computed value time**, not at **used value time**
for running animations. The browser only re-evaluates the animation when it
detects a style change on the element itself — and the internal variable
re-resolution doesn't count as one. Reading `offsetWidth` forces a synchronous
reflow, which causes the browser to flush all pending style calculations and
treat the animation as newly applied.
