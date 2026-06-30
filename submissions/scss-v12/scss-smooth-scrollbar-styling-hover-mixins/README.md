# SCSS Utility: Smooth Scrollbar Styling & Hover Mixins (#28416)

A clean SCSS module for the EaseMotion CSS framework that standardizes custom scrollbar styling across all major browsers. It replaces the clunky default Windows/Linux scrollbars with sleek, rounded, Mac OS-style floating scrollbars featuring hover interactions.

## 📦 What's included?

- `_smooth-scrollbar-styling-hover-mixins.scss`: The SCSS partial containing the scrollbar mixin supporting both WebKit prefixes and standard CSS properties.
- `style.css`: The raw compiled CSS utility classes (`.ease-scrollbar-minimal`, etc.).
- `demo.html`: A self-contained demo page with three overflow containers to demonstrate the hover effects and styling.

## 🛠 Usage via SCSS Mixins

Import the partial into your project. You can apply the mixin to a specific overflow container, or directly to the `body` tag to theme the entire website.

```scss
@import 'smooth-scrollbar-styling-hover-mixins';

// @include ease-custom-scrollbar($thumb-color, $track-color, $width, $thumb-hover-color);

body {
  // Apply a custom purple scrollbar to the entire page
  @include ease-custom-scrollbar(
    rgba(168, 85, 247, 0.6), // Thumb Color
    #f8fafc,                 // Track Color
    12px,                    // Width
    rgba(147, 51, 234, 1)    // Hover Color
  );
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can use the predefined preset classes on any container that has `overflow: auto` or `overflow: scroll`.

```html
<!-- Sleek, transparent scrollbar that darkens on hover -->
<div class="ease-scrollbar-minimal" style="overflow-y: auto; max-height: 400px;">
  ... massive content ...
</div>

<!-- Scrollbar is completely invisible, but mousewheel scrolling still works -->
<div class="ease-scrollbar-hidden" style="overflow-y: auto; max-height: 400px;">
  ... massive content ...
</div>
```

**Available Preset Classes:**
- `.ease-scrollbar-minimal`: Thin (6px), transparent track, subtle thumb that darkens on hover.
- `.ease-scrollbar-brand`: Thicker (10px), light track, bold primary-color thumb.
- `.ease-scrollbar-hidden`: Completely hides the scrollbar UI while preserving scroll functionality (perfect for horizontal carousels).

## 🚀 Why this fits EaseMotion

The **EaseMotion** design system prioritizes a premium user experience. Nothing breaks the immersion of a beautifully animated, sleek interface faster than a jarring, blocky, default OS scrollbar suddenly appearing in the middle of a modal or sidebar. By providing an easy-to-use scrollbar mixin, developers can ensure that even the browser's native UI elements feel cohesive, smooth, and intentionally designed.
