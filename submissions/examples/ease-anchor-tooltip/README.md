# ease-anchor-tooltip

## What does this do?
A tooltip that natively "sticks" to its trigger button using the CSS Anchor Positioning API — no JavaScript positioning library required.

## How is it used?
```html
<button class="ease-anchor-btn">Hover me</button>
<div class="ease-anchor-tooltip">I'm natively anchored, no JS!</div>
```
The tooltip must be a sibling immediately after the trigger button in the DOM.

## Why is it useful?
Traditionally, tooltips/dropdowns that need to track a trigger element on scroll or resize require JS libraries like Floating UI or Popper.js to recalculate coordinates. The CSS Anchor Positioning API lets the browser engine handle this natively via `anchor-name` and `anchor()`, removing a runtime JS dependency entirely. This fits EaseMotion's philosophy of lightweight, CSS-first interactivity. A `@supports` fallback hides the tooltip gracefully in browsers that don't yet support the API.
