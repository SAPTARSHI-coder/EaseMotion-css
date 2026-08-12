# Ease Expand Button

## What does this do?

A reusable button with an animated arrow that indicates expanded and collapsed states.

---

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<button class="expand-button" aria-expanded="false">
    <span>Show details</span>
    <span class="arrow">⌄</span>
</button>
```

For the expanded state, add the `active` class:

```html
<button class="expand-button active" aria-expanded="true">
    <span>Hide details</span>
    <span class="arrow">⌄</span>
</button>
```

### Features

- Arrow rotation
- Hover animation
- Active state
- Smooth transitions
- Responsive layout
- CSS-only animation

---

## Why is it useful?

Expand buttons are commonly used with accordions, FAQs, dropdowns, and collapsible content.

This component provides a simple visual indicator for expanded and collapsed states while following the animation-first philosophy of EaseMotion CSS.