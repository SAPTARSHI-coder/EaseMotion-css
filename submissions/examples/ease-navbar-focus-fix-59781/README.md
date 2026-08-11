# Ease Navbar Focus Fix

### Overview
This example demonstrates a fix for the `ease-navbar` component where its focus outline was getting clipped by parent containers with `overflow: hidden` or `overflow: auto`. This clipping degraded the accessibility experience.

### What it does
It adds a simple `outline-offset: -2px` rule to the focus state (`:focus-visible`) of the navbar and its inner links. This ensures that the outline is pulled inwards and rendered fully within the element's bounding box, preventing any clipping from ancestor elements.

### How to use it
Incorporate the CSS fix into the component's base styles or as a utility override:

```css
.ease-navbar:focus-visible,
.nav-link:focus-visible {
    outline: 2px solid #38bdf8;
    outline-offset: -2px; /* Fix for overflow hidden */
}
```

### Why it fits EaseMotion CSS
EaseMotion prioritizes high-quality, accessible UI components. Ensuring focus rings are always clearly visible, regardless of the component's container, is a core accessibility requirement and aligns with the project's standards.
