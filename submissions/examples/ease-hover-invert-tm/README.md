# ease-hover-invert

**What does this do?**
Inverts all colors of an element on hover using CSS `filter: invert(1)`. This creates a high-contrast, film-negative effect and is useful for interactive icon grids, stat cards, and dark-mode-compatible UI highlights.

**How is it used?**

```html
<div class="icon-box invert-icon">
  <div class="icon-circle"></div>
  <span>Label</span>
</div>
```

```css
/* Full color inversion on hover */
.invert-icon:hover {
  filter: invert(1);
  transition: filter 0.4s ease;
}

/* Partial inversion (50%) */
.invert-icon:hover {
  filter: invert(0.5);
  transition: filter 0.4s ease;
}
```

**Why is it useful?**
Color inversion on hover creates a bold, eye-catching interactive effect ideal for icon grids, dark-themed UIs, and gallery interfaces. It works without JavaScript and handles dark/light themes gracefully.

**Browser support:** All modern browsers (Chrome, Firefox, Safari, Edge). Uses the CSS `filter` property.
