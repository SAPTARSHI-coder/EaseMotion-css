# SCSS Utility: Truncate Multi-Line Clamp Utilities (#28410)

A lightweight SCSS module for the EaseMotion CSS framework that dynamically generates `line-clamp` utility classes. This allows developers to gracefully truncate text that spans multiple lines, appending an ellipsis `...` at the exact cut-off point.

## 📦 What's included?

- `_truncate-multi-line-clamp-utility-classes.scss`: The SCSS partial containing the clamp mixins.
- `style.css`: The raw compiled CSS utility classes (`.ease-line-clamp-1` through `6`).
- `demo.html`: A self-contained demo page demonstrating the truncation behavior.

## 🛠 Usage via SCSS Mixins

Import the partial into your project. You can either apply the clamp mixin directly to a specific selector, or generate your own custom set of utility classes.

```scss
@import 'truncate-multi-line-clamp-utility-classes';

// 1. Apply directly to a specific class
.blog-post-excerpt {
  @include ease-line-clamp(3); // Truncates after 3 lines
}

// 2. Generate a custom range of utility classes (e.g. .my-clamp-1 to .my-clamp-10)
@include generate-line-clamp-utilities(10);
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can use the default utility classes (`.ease-line-clamp-1` through `6`) immediately in your markup.

```html
<!-- Single line truncation (Standard text-overflow) -->
<h2 class="ease-line-clamp-1">Extremely long title that needs to fit on one line</h2>

<!-- Multi-line truncation -->
<p class="ease-line-clamp-3">
  This is a very long paragraph that serves as a preview for an article. 
  Instead of taking up massive vertical space, it will smoothly cut off 
  after exactly three lines, leaving an ellipsis to indicate more content...
</p>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy focuses on creating clean, predictable user interfaces. When dealing with dynamic content (like blog excerpts or user reviews), inconsistent text lengths can ruin grid layouts and disrupt animation flows (especially height-based animations). By providing an effortless multi-line clamp utility, developers can enforce strict typographical boundaries, ensuring that card heights remain uniform and entrance animations remain perfectly staggered.
