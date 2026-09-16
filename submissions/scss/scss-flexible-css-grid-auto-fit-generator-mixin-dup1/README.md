# SCSS Utility: Flexible CSS Grid Auto-Fit Generator (#28412)

A lightweight SCSS module for the EaseMotion CSS framework that dynamically generates responsive CSS Grid layouts using `auto-fit` and `minmax()`. This allows developers to create perfect, self-wrapping masonry-style card grids without writing any `@media` queries.

## 📦 What's included?

- `_flexible-css-grid-auto-fit-generator-mixin.scss`: The SCSS partial containing the grid generator mixins.
- `style.css`: The raw compiled CSS utility classes (`.ease-grid-auto-sm` through `xl`).
- `demo.html`: A self-contained demo page demonstrating the responsive grid behaviors.

## 🛠 Usage via SCSS Mixins

Import the partial into your project. You can apply the mixin directly to a specific container, passing in the minimum width you want child items to shrink to before they wrap to a new line.

```scss
@import 'flexible-css-grid-auto-fit-generator-mixin';

// @include ease-grid-auto-fit($min-width, $gap (optional));

.product-gallery {
  // Items will be at least 300px wide, stretching to fill row space, 
  // wrapping automatically, with a 2rem gap.
  @include ease-grid-auto-fit(300px, 2rem);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can use the default utility classes immediately in your markup. We also provide gap modifier utilities.

```html
<!-- Medium Grid (Children min width 280px) with Large Gap -->
<div class="ease-grid-auto-md ease-gap-lg">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
  <div class="card">Item 4</div>
</div>
```

**Available Sizing Classes:**
- `.ease-grid-auto-sm` (200px min width)
- `.ease-grid-auto-md` (280px min width)
- `.ease-grid-auto-lg` (350px min width)
- `.ease-grid-auto-xl` (450px min width)

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is about reducing boilerplate and making development intuitive. Writing media queries for grids is a tedious and error-prone process. The CSS `grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr))` pattern is the modern standard for fluid grids, but the syntax is difficult for beginners to remember. 

By abstracting this into a clean SCSS mixin (`@include ease-grid-auto-fit(280px);`), we provide developers with an instantly recognizable, highly readable API to create complex layouts that provide a perfect foundation for staggering animations.
