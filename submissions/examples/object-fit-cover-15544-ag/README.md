# CSS Object-Fit Gallery Example

This submission demonstrates the implementation of responsive gallery grids using the CSS `object-fit` and `object-position` properties.

---

## What is Object-Fit?

The `object-fit` property specifies how an `<img>` or `<video>` element should scale and resize to fit its content box.

- **`cover`** — Fills the container box while preserving the image's aspect ratio, cropping content along edges if ratios do not match. Perfect for uniform card elements.
- **`contain`** — Fits the entire image within the container box while maintaining the aspect ratio, leaving border pads (letterboxing) if aspect ratios differ.
- **`fill`** — Resizes the image to occupy all container box space, stretching or squishing content if aspects differ.

---

## Smooth Hover Zoom Animation

A common design pattern is scaling the image slightly on card hover. Combining `object-fit: cover` with an `overflow: hidden` wrapper allows you to scale the image cleanly without expanding its container bounds:

```css
.zoom-wrapper {
  overflow: hidden;
}
.zoom-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.zoom-card:hover .zoom-img {
  transform: scale(1.08);
}
```

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. View the comparison grid under "Native Form Controls":
   - **`object-fit: cover`** — Image should crop cleanly without stretching.
   - **`object-fit: contain`** — Image fits entirely with dark bars on either side.
   - **`object-fit: fill`** — Image stretches to fit bounds.
3. Scroll to "Hover Zoom Integration" and hover over cards.
4. Verify that images scale up smoothly within their bounding borders.
