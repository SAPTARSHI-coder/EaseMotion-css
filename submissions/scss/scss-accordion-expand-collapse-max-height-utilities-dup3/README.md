# SCSS Utility: Accordion Expand/Collapse Max-Height (#28407)

A robust SCSS utility module for the EaseMotion CSS framework that abstracts the "CSS Max-Height Hack" for smoothly animating accordions, dropdowns, and collapsible panels without resorting to JavaScript-calculated pixel heights.

## 📦 What's included?

- `_accordion-expand-collapse-max-height-utilities.scss`: The SCSS partial containing the mixins.
- `style.css`: The raw compiled CSS utility classes.
- `demo.html`: A self-contained demo page demonstrating the smooth transitions using Vanilla JS to simply toggle the `.is-expanded` class.

## 🛠 Usage via SCSS

Import the partial into your project and use the `@include ease-accordion-content()` mixin on the wrapper element you want to collapse. 

```scss
@import 'accordion-expand-collapse-max-height-utilities';

.my-dropdown-menu {
  // Parameters: $duration, $easing, $max-height-expanded
  @include ease-accordion-content(0.4s, ease-in-out, 500px);
}
```

*Note: The `$max-height-expanded` value should be slightly larger than the maximum expected height of your content. If you make it too large (e.g. 9999px for a 50px item), the transition will feel noticeably delayed.*

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can use the default utility classes directly in your HTML markup based on your expected content size.

```html
<button onclick="document.getElementById('faq-1').classList.toggle('is-expanded')">
  Toggle Small FAQ
</button>

<!-- Use -sm, -md, or -lg based on content length -->
<div id="faq-1" class="ease-accordion-sm">
  <div class="inner-padding-wrapper">
    <p>Short answer here...</p>
  </div>
</div>
```

**Available Classes:**
- `.ease-accordion-sm`: 0.3s duration, max 300px height.
- `.ease-accordion-md`: 0.5s duration, max 800px height.
- `.ease-accordion-lg`: 0.8s duration, max 2000px height.

## 🚀 Why this fits EaseMotion

Animating `height: auto` directly is not supported in CSS. This limitation often forces developers to write complex JavaScript ResizeObservers to calculate exact pixel heights. This SCSS utility abstracts the standard CSS workaround (transitioning `max-height`) into a clean, human-readable format that perfectly aligns with EaseMotion's goal of making complex UI animations effortless to implement.
