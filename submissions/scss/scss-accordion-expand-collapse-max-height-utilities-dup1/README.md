# SCSS Utility: Accordion Expand/Collapse Utilities (#28427)

A highly requested SCSS utility module for the EaseMotion CSS framework that resolves the notoriously difficult problem of animating element heights (for accordions, dropdowns, and collapsible panels) without layout jumping.

## 📦 What's included?

- `_accordion-expand-collapse-max-height-utilities.scss`: The SCSS partial providing both the classic `max-height` bezier trick and the modern `grid-template-rows` solution.
- `style.css`: The compiled output.
- `demo.html`: A functional interactive accordion using the classes.

## 🛠 Usage via SCSS Mixins

Import the partial and include the mixins on your collapsible content wrapper. Note: You will need to toggle an `.is-expanded` class on the element via JavaScript.

```scss
@import 'accordion-expand-collapse-max-height-utilities';

// Approach 1: Classic Max-Height
// Requires passing a max-height larger than your content will ever be.
.my-dropdown-content {
  @include ease-accordion-content(400px, 0.4s);
}

// Approach 2: Modern CSS Grid (Recommended)
// Does not require hardcoding a height!
.my-accordion-content {
  @include ease-accordion-grid(0.4s);
}
```

## 🛠 Usage via HTML Utility Classes

```html
<button onclick="toggleExpanded()">Toggle</button>

<!-- Grid approach wrapper -->
<div class="ease-accordion-grid" id="content">
  <!-- MUST have an inner wrapper for the grid trick to work -->
  <div>
    Your dynamic content here...
  </div>
</div>
```

## 🚀 Why this fits EaseMotion

**EaseMotion** is about making complex CSS animations accessible. Animating an element from `height: 0` to `height: auto` is impossible in standard CSS, leading developers to rely on heavy JavaScript recalculations.

This module provides two elegant, CSS-only solutions:
1. **The Max-Height Trick:** Utilizing a highly specific `cubic-bezier(0, 1, 0, 1)` to eliminate the "delay" typically associated with max-height transitions when collapsing.
2. **The Grid Approach:** A modern layout trick animating `grid-template-rows` from `0fr` to `1fr`. This allows perfectly smooth, mathematically correct expansions regardless of the dynamic content height, representing the bleeding edge of modern CSS interaction design.
