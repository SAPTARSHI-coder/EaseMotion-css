# Scroll Zoom (ease-zoom-scroll)

### 1. What does this do?

This component animations an element's scale dynamically, growing it from a small layout size (`scale(0.75)`) to full size (`scale(1.0)`) as it scrolls into the center of the viewport.

### 2. How is it used?

Wrap your zoom target content inside a scroll card:

```html
<div class="ease-zoom-scroll-card observer-target" id="my-card">
  <div class="artwork-grid">
    <svg class="artwork-icon">...</svg>
  </div>
</div>
```

Bind an `IntersectionObserver` in JavaScript configured with a specific step threshold array (`[0, 0.25, 0.5, 0.75, 1]`) and map the `intersectionRatio` directly to the custom CSS variable `--ease-zoom-progress` on the target card element:

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Map visibility ratio (0, 0.25, 0.5, 0.75, 1) directly as progress custom variable
      entry.target.style.setProperty(
        "--ease-zoom-progress",
        entry.intersectionRatio
      );
    });
  },
  {
    threshold: [0, 0.25, 0.5, 0.75, 1],
  }
);

// Register targets
document.querySelectorAll(".observer-target").forEach((el) => {
  observer.observe(el);
});
```

Customize the starting scale boundaries using custom CSS variables (defaulting to 0.75):

```css
.ease-zoom-scroll-card {
  --ease-min-scale: 0.8;
}
```

### 3. Why is it useful?

It creates high-end focal zoom transitions for landing heroes, showcases, and graphic elements as they scroll into view. By leveraging CSS variable calculations for the `scale` transform properties, page layouts stay reflow-free. It also integrates media query checks (`prefers-reduced-motion: reduce`) which automatically bypass scale transforms to maintain comfortable accessibility standards.
