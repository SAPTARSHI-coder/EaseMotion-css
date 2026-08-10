# Animated Accordion Component (`ease-accordion-xyz`)

A zero-dependency, CSS-only animated accordion component designed for the **EaseMotion CSS** framework. Perfect for FAQs, expandable sections, and collapsible content.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using native HTML `<details>` and `<summary>` elements.
- **Animation-First**: Smooth expand/collapse animations with rotating chevron icon using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-ease`, and color tokens for seamless theming.
- **Accessible**: Built on semantic HTML with native keyboard support and screen reader compatibility.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.
- **Default Open State**: Supports the `open` attribute for items that should be expanded by default.

## 🚀 Usage

1. Use the native HTML `<details>` element with the `ease-accordion-xyz` class.
2. Add a `<summary>` element with the `ease-accordion-xyz-header` class for the clickable header.
3. Add a content container with the `ease-accordion-xyz-content` class.

```html
<details class="ease-accordion-xyz">
  <summary class="ease-accordion-xyz-header">
    <span>Your Question Here</span>
    <span class="ease-accordion-xyz-icon"></span>
  </summary>
  <div class="ease-accordion-xyz-content">
    <p>Your answer or content goes here.</p>
  </div>
</details>

<!-- Default Open State -->
<details class="ease-accordion-xyz" open>
  <summary class="ease-accordion-xyz-header">
    <span>This item is open by default</span>
    <span class="ease-accordion-xyz-icon"></span>
  </summary>
  <div class="ease-accordion-xyz-content">
    <p>This content is visible on page load.</p>
  </div>
</details>