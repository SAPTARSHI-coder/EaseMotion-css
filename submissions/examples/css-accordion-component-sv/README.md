# CSS-only Accordion Component

## What does this do?

This example creates an animated accordion component using only HTML and CSS.

The implementation relies on native `<details>` and `<summary>` elements to provide built-in accessibility, keyboard navigation, and collapsible content behavior.

Features include:

- Smooth expand/collapse animations
- Rotating chevron indicator
- Hover interactions
- Native accessibility support
- Pure CSS implementation
- Reduced-motion support

---

## How is it used?

### Accordion Structure

```html
<details class="accordion">
  <summary class="accordion-header">
    Accordion Title
  </summary>

  <div class="accordion-content">
    <p>Accordion Content</p>
  </div>
</details>
```

---

## Why is it useful?

Accordions help organize large amounts of content while keeping interfaces clean and user-friendly.

They are commonly used for:

- FAQs
- Settings panels
- Documentation sections
- Product information
- Collapsible navigation

This implementation remains lightweight, accessible, and dependency-free while aligning with EaseMotion CSS's animation-first philosophy.