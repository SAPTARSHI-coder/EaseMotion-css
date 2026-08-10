# Carousel Print Optimization

**What does this do?**
Strips heavy background colors, text colors, and box-shadows from the carousel component when printed, reducing ink usage.

**How is it used?**
Just include the CSS as-is; the `@media print` block automatically activates when the page is printed or previewed for printing.

```html
<div class="carousel">
  <div class="carousel-slide">Content</div>
</div>
```

**Why is it useful?**
Printing a carousel with dark backgrounds and shadows wastes significant ink. This ensures the component degrades gracefully to a clean, ink-friendly layout in print contexts, matching EaseMotion's focus on practical, polished UI behavior.
