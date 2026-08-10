# SCSS Utility: Fluid Typography & Clamp Mixin System (#28411)

An advanced mathematical SCSS module for the EaseMotion CSS framework that dynamically calculates viewport-width based fluid typography using the CSS `clamp()` function. This enables text to scale seamlessly between a minimum and maximum size without abrupt media query breakpoints.

## 📦 What's included?

- `_fluid-typography-clamp-mixin-system.scss`: The SCSS partial containing the mathematical equation mixins.
- `style.css`: The raw compiled CSS utility classes outputting the calculated `clamp()` rules.
- `demo.html`: A self-contained demo page demonstrating the fluid scaling behavior.

## 🛠 Usage via SCSS Mixins

Import the partial into your project. You can apply the mixin directly to specific heading tags or component classes to define custom boundaries.

```scss
@import 'fluid-typography-clamp-mixin-system';

// @include fluid-type($min-font-size, $max-font-size, $min-vw (optional), $max-vw (optional));

.hero-title {
  // Scales smoothly from 32px (on mobile) to 80px (on desktop)
  @include fluid-type(32px, 80px);
}

.article-body {
  // Scales from 16px to 20px
  @include fluid-type(16px, 20px);
}
```

*Note: The mixin automatically converts all pixel inputs into accessible `rem` units within the final `clamp()` output.*

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can use the default utility classes immediately in your markup.

```html
<!-- Scales from 32px -> 72px -->
<h1 class="ease-fluid-text-xl">Massive Headline</h1>

<!-- Scales from 24px -> 48px -->
<h2 class="ease-fluid-text-lg">Section Title</h2>

<!-- Scales from 16px -> 24px -->
<p class="ease-fluid-text-md">Introductory lead paragraph</p>

<!-- Scales from 14px -> 18px -->
<p class="ease-fluid-text-sm">Standard body copy</p>
```

## 🚀 Why this fits EaseMotion

Fluid typography eliminates the need for maintaining dozens of `@media` query breakpoints just to resize headings. However, writing the mathematical slope equation (`y = mx + b`) for a `clamp()` function manually is virtually impossible for a developer to do on the fly. This SCSS module fully automates the math, outputting accessible `rem`-based `clamp()` strings, keeping layouts robust and animations completely free of sudden text-resizing layout shifts.
