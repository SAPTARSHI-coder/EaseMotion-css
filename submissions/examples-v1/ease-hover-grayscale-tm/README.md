# ease-hover-grayscale

**What does this do?**
Converts a colored element to grayscale on hover using the CSS `filter: grayscale()` property. The transition is smooth and reversible — elements return to full color when the cursor leaves.

**How is it used?**

```html
<!-- Image or card -->
<div class="grayscale-card">
  <img src="photo.jpg" alt="City skyline" />
</div>
```

```css
/* On the container for full-element effect */
.grayscale-card:hover {
  filter: grayscale(1);
  transition: filter 0.4s ease;
}

/* On the image directly */
.grayscale-img:hover {
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}
```

**Why is it useful?**
Grayscale-on-hover is commonly used in photo galleries, portfolio grids, and UI cards to create an interactive "before/after" feel without JavaScript. It is a lightweight, purely CSS solution.

**Browser support:** All modern browsers (Chrome, Firefox, Safari, Edge). Uses the CSS `filter` property.
