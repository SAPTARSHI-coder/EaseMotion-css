# Floating Inspector Panel Motion Example

## 1. What does this do?

This example demonstrates a floating inspector panel that smoothly repositions, scales, and fades to stay in sync with whichever object is currently selected in a design workspace, using only HTML and CSS.

---

## 2. How is it used?

Example:

```html
<div class="floating-inspector-demo">...</div>
```

Developers can reuse this pattern by pairing a group of selectable elements (radio inputs and labels, or `:target` links) with a set of panel content blocks. Each content block is shown or hidden using sibling selectors tied to the active selection, while `transition` and `transform` handle the repositioning, scaling, and fading between states.

---

## 3. Why is it useful?

This example reflects the EaseMotion CSS philosophy of CSS-first, reusable motion: it is framework agnostic, lightweight, and fully developer friendly, requiring no JavaScript. The selection-driven panel pattern is production-inspired, mirroring the continuity found in modern design tool UIs, and remains composable enough to adapt to modals, sidebars, or any other selection-based interface.
