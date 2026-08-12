# Button Magnetic Pull Animation

## What does this do?

Enables a high-fidelity "magnetic" effect on buttons, where the button subtly pulls and shifts towards the cursor position when the cursor moves nearby (within a specific proximity threshold), not just when hovering directly over the button.

## How is it used?

1. Wrap the button in a layout wrapper and apply the magnetic button classes:

```html
<button class="btn-magnetic">
  <span class="btn-text">Explore Features</span>
</button>
```

2. Standard proximity tracking script sets `--x` and `--y` custom properties on the button element:

```javascript
const btn = document.querySelector(".btn-magnetic");
// Track cursor coordinates relative to button center and update --x and --y
```

## Why is it useful?

Magnetic buttons are a hallmark of modern premium web design (commonly used in portfolio websites, creative agencies, and SaaS platforms). They increase target acquisition sizes dynamically and offer a highly interactive, organic feel by treating buttons as physical objects with gravitational pull.

## Tech Stack

- HTML
- CSS (custom properties and transforms)
- Vanilla JavaScript (for tracking proximity coordinates)

## Preview

Open `demo.html` directly in your browser to see the effect.
