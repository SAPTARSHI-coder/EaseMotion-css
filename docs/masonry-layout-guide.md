# Masonry Layout Utilities

Create flexible Pinterest-style masonry grids with EaseMotion CSS. Perfect for portfolios, image galleries, blog cards, and responsive content layouts.

## Overview

The masonry utilities use CSS columns to create natural, flowing layouts where items of varying heights fit together seamlessly. This approach is:

- **Lightweight**: Pure CSS, no JavaScript required
- **Responsive**: Mobile-first breakpoints built-in
- **Accessible**: Respects reduced motion preferences
- **Composable**: Works with existing EaseMotion utilities like `ease-card` and `ease-gap-*`

## Base Masonry Class

The base `ease-masonry` class sets up default masonry behavior with 2 columns on desktop, collapsing to 1 column on mobile.

```html
<div class="ease-masonry">
  <div class="ease-card">Item 1</div>
  <div class="ease-card">Item 2</div>
  <div class="ease-card">Item 3</div>
  <div class="ease-card">Item 4</div>
</div>
```

### Features

- Default 2-column layout on desktop
- 1 column on mobile (< 640px)
- 4px gap between items (configurable)
- All child elements prevent column breaks

---

## 2-Column Layout

Use `ease-masonry-2` for a dedicated 2-column grid.

```html
<div class="ease-masonry-2">
  <img src="portfolio-1.jpg" alt="Portfolio item 1" />
  <img src="portfolio-2.jpg" alt="Portfolio item 2" />
  <img src="portfolio-3.jpg" alt="Portfolio item 3" />
  <img src="portfolio-4.jpg" alt="Portfolio item 4" />
</div>
```

### Responsive Behavior

| Device            | Columns |
| ----------------- | ------- |
| Mobile (< 640px)  | 1       |
| Tablet+ (≥ 640px) | 2       |

---

## 3-Column Layout

Use `ease-masonry-3` for progressive 3-column layouts with intermediate tablet support.

```html
<div class="ease-masonry-3">
  <article class="ease-card ease-card-hover">
    <h3 class="ease-card-title">Blog Post 1</h3>
    <p class="ease-card-subtitle">January 15, 2024</p>
    <div class="ease-card-body">
      <p>Article summary and preview text...</p>
    </div>
  </article>
  <!-- More articles... -->
</div>
```

### Responsive Behavior

| Device              | Columns |
| ------------------- | ------- |
| Mobile (< 640px)    | 1       |
| Tablet (640–1023px) | 2       |
| Desktop (≥ 1024px)  | 3       |

---

## 4-Column Layout

Use `ease-masonry-4` for dense, full-featured grids with maximum responsiveness.

```html
<div class="ease-masonry-4">
  <img src="gallery-1.jpg" alt="Gallery item 1" />
  <img src="gallery-2.jpg" alt="Gallery item 2" />
  <img src="gallery-3.jpg" alt="Gallery item 3" />
  <!-- Many more items... -->
</div>
```

### Responsive Behavior

| Device                      | Columns |
| --------------------------- | ------- |
| Mobile (< 640px)            | 1       |
| Tablet (640–1023px)         | 2       |
| Small Desktop (1024–1279px) | 3       |
| Large Desktop (≥ 1280px)    | 4       |

---

## Customizing Gaps

Combine masonry classes with `ease-gap-*` utilities to adjust spacing.

### Available Gap Sizes

```html
<!-- Tight spacing (4px) -->
<div class="ease-masonry-3 ease-gap-1">...</div>

<!-- Relaxed spacing (8px) -->
<div class="ease-masonry-3 ease-gap-2">...</div>

<!-- Comfortable spacing (12px) -->
<div class="ease-masonry-3 ease-gap-3">...</div>

<!-- Wide spacing (24px) -->
<div class="ease-masonry-3 ease-gap-6">...</div>

<!-- Extra wide spacing (32px) -->
<div class="ease-masonry-3 ease-gap-8">...</div>
```

---

## Integration Examples

### With Cards

```html
<div class="ease-masonry-3 ease-gap-4">
  <article class="ease-card ease-card-shadow ease-card-hover">
    <div class="ease-card-header">
      <span class="ease-badge ease-badge-primary">Featured</span>
    </div>
    <h3 class="ease-card-title">Project Title</h3>
    <p class="ease-card-subtitle">By Author Name</p>
    <div class="ease-card-body">
      <p>Brief description of the project or article...</p>
    </div>
    <div class="ease-card-footer">
      <button class="ease-btn ease-btn-primary ease-btn-sm">Read More</button>
    </div>
  </article>
  <!-- Repeat for more cards -->
</div>
```

### With Images

```html
<div class="ease-masonry-4 ease-gap-3">
  <figure>
    <img src="image-1.jpg" alt="Gallery image 1" />
    <figcaption>Image caption</figcaption>
  </figure>
  <!-- More figures -->
</div>
```

### With Custom Content

```html
<div class="ease-masonry-3 ease-gap-4">
  <div class="ease-card">
    <div class="ease-card-body">
      <h4>Testimonial</h4>
      <p>"Amazing product and service!"</p>
      <footer>— Jane Doe</footer>
    </div>
  </div>
  <!-- More testimonials -->
</div>
```

---

## Accessibility

### Reduced Motion Support

All masonry layouts automatically respect the `prefers-reduced-motion` media query. Animations and transitions are disabled for users who prefer minimal motion.

```css
/* Automatically applied if user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .ease-masonry > *,
  .ease-masonry-2 > *,
  .ease-masonry-3 > *,
  .ease-masonry-4 > * {
    transition: none !important;
  }
}
```

### Semantic HTML

Always use semantic HTML within masonry items:

```html
<!-- Good: Semantic structure -->
<div class="ease-masonry-3">
  <article class="ease-card">
    <h2>Article Title</h2>
    <p>Content...</p>
  </article>
</div>

<!-- Avoid: Non-semantic divs -->
<div class="ease-masonry-3">
  <div>
    <div>Article Title</div>
    <div>Content...</div>
  </div>
</div>
```

---

## Browser Support

The masonry utilities use CSS Columns, which is supported in all modern browsers:

| Browser | Version |
| ------- | ------- |
| Chrome  | 50+     |
| Firefox | 52+     |
| Safari  | 9+      |
| Edge    | 12+     |
| Opera   | 37+     |

For older browsers, content will render as a single column (graceful degradation).

---

## Performance Tips

1. **Limit column count**: More columns = more layout calculations
   - Use `ease-masonry-2` or `ease-masonry-3` for best performance
   - Avoid `ease-masonry-4` on mobile or with 100+ items

2. **Optimize images**: Use responsive images with `srcset` for better performance

   ```html
   <img
     src="image-400.jpg"
     srcset="image-400.jpg 400w, image-800.jpg 800w"
     alt="Description"
   />
   ```

3. **Batch rendering**: If adding items dynamically, batch DOM updates
   ```javascript
   const fragment = document.createDocumentFragment();
   items.forEach((item) => fragment.appendChild(item));
   container.appendChild(fragment);
   ```

---

## Common Use Cases

### Portfolio Grid

```html
<section class="ease-container">
  <h2>My Work</h2>
  <div class="ease-masonry-3 ease-gap-6">
    <!-- Portfolio items -->
  </div>
</section>
```

### Blog Feed

```html
<section class="ease-container">
  <h2>Latest Articles</h2>
  <div class="ease-masonry-3">
    <!-- Blog cards -->
  </div>
</section>
```

### Image Gallery

```html
<section class="ease-container">
  <h2>Photo Collection</h2>
  <div class="ease-masonry-4 ease-gap-3">
    <!-- Images -->
  </div>
</section>
```

### Testimonial Wall

```html
<section class="ease-container">
  <h2>Client Testimonials</h2>
  <div class="ease-masonry-2 ease-gap-4">
    <!-- Testimonial cards -->
  </div>
</section>
```

---

## Troubleshooting

### Items Not Breaking Properly

**Problem**: Long items span multiple columns unexpectedly.

**Solution**: Ensure parent container has sufficient width or use `ease-masonry-2` for simpler layouts.

### Images Distorting

**Problem**: Images are stretching or shrinking unevenly.

**Solution**: The masonry utilities set `width: 100%` and `height: auto` on images. Check your image aspect ratio or use `object-fit`:

```css
img {
  object-fit: cover;
  aspect-ratio: 1 / 1; /* or your desired ratio */
}
```

### Mobile Layout Issues

**Problem**: Content appears in wrong column order on mobile.

**Solution**: Columns naturally reflow to single column on mobile. If items appear out of order, ensure DOM order matches visual order.

---

## Migration Guide

### From CSS Grid

If migrating from `ease-grid` utilities:

**Before** (Fixed columns):

```html
<div class="ease-grid ease-grid-cols-3 ease-gap-4">
  <!-- Items must be ordered in rows -->
</div>
```

**After** (Masonry):

```html
<div class="ease-masonry-3 ease-gap-4">
  <!-- Items fill columns naturally -->
</div>
```

### From Flexbox

If migrating from `ease-flex` utilities:

**Before** (Complex wrapping):

```html
<div class="ease-flex ease-flex-wrap ease-gap-4">
  <!-- Hard to maintain equal-height columns -->
</div>
```

**After** (Masonry):

```html
<div class="ease-masonry-3 ease-gap-4">
  <!-- Automatic column balancing -->
</div>
```

---

## Advanced Techniques

### Custom Column Counts

Use CSS custom properties to create utility variants:

```css
.ease-masonry-5 {
  columns: 5;
  column-gap: var(--ease-space-4);
}

@media (max-width: 1535px) {
  .ease-masonry-5 {
    columns: 4;
  }
}
```

### Varying Item Heights

Masonry naturally handles items of different heights:

```html
<div class="ease-masonry-3">
  <div class="ease-card">
    <h3>Short Item</h3>
  </div>
  <div class="ease-card">
    <h3>Longer Item</h3>
    <p>With more content that naturally flows...</p>
  </div>
  <div class="ease-card">
    <h3>Medium Item</h3>
    <p>Somewhere in between</p>
  </div>
</div>
```

---

## Related Utilities

- `ease-grid-*`: Fixed-column grids for more structured layouts
- `ease-flex`: Flexible layouts with wrapping
- `ease-gap-*`: Spacing between flex/grid items
- `ease-card`: Card component for content containers
- `ease-container`: Max-width constraint wrapper
