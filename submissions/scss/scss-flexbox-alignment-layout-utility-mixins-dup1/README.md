# SCSS Utility: Flexbox Alignment & Layout Utility Mixins (#28420)

A core structural SCSS module for the EaseMotion CSS framework that abstracts away repetitive Flexbox boilerplate into clean, easy-to-read mixins and HTML utility classes.

## 📦 What's included?

- `_flexbox-alignment-layout-utility-mixins.scss`: The SCSS partial containing the mixin definitions (`ease-flex-center`, `ease-flex-between`, etc.).
- `style.css`: The raw compiled utility classes.
- `demo.html`: A visual guide demonstrating the alignment properties.

## 🛠 Usage via SCSS Mixins

Instead of writing 3-4 lines of `display`, `flex-direction`, `align-items`, and `justify-content` every single time you need to center a `<div>`, use these semantic mixins.

```scss
@import 'flexbox-alignment-layout-utility-mixins';

.nav-bar {
  // Automatically applies flex-direction: row, align: center, justify: space-between
  @include ease-flex-between(center);
}

.hero-content {
  // Perfectly centers content horizontally and vertically within the hero
  @include ease-flex-center(column);
}

.sidebar {
  @include ease-flex-col(stretch, flex-start);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can apply these layout presets directly to your wrappers.

```html
<!-- Perfect for Navigation Bars -->
<nav class="ease-flex-between">
  <div>Logo</div>
  <div>Links</div>
</nav>

<!-- Perfect for Hero Banners -->
<header class="ease-flex-center">
  <h1>Welcome</h1>
</header>

<!-- Perfect for Card Layouts -->
<div class="ease-flex-col">
  <img src="..." />
  <h3>Title</h3>
  <p>Description</p>
</div>
```

**Available Preset Classes:**
- `.ease-flex-center`
- `.ease-flex-center-col`
- `.ease-flex-between`
- `.ease-flex-around`
- `.ease-flex-col`

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is about reducing developer friction. Writing `display: flex; align-items: center; justify-content: center;` is one of the most repetitive, boilerplate-heavy tasks in modern web design. By abstracting this logic into semantic mixins (`@include ease-flex-center`), developers can make their SCSS files significantly smaller, cleaner, and easier to read. Cleaner code allows developers to focus entirely on building smooth interactions and hover states rather than debugging structural alignment issues.
