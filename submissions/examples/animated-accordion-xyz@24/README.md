# Animated Accordion Component (`ease-accordion-xyz`)

A zero-dependency, CSS-only animated accordion/collapse component designed for the **EaseMotion CSS** framework. Perfect for FAQs, settings panels, and content organization with smooth expand/collapse animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth height transitions, icon rotations, and content reveals using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Single-open (default), multiple-open, and bordered layouts.
- **Icon Support**: Plus/minus icons, arrows, and large icons for different use cases.
- **Subtitle Support**: Optional subtitle text under main title.
- **Settings Integration**: Built-in styling for checkboxes and selects within accordion content.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Accordion (Single Open)
```html
<div class="ease-accordion-xyz">
  <div class="ease-accordion-xyz-item">
    <input type="checkbox" id="accordion-1" class="ease-accordion-xyz-toggle" name="accordion-group-1">
    <label for="accordion-1" class="ease-accordion-xyz-header">
      <span class="ease-accordion-xyz-title">Question 1</span>
      <span class="ease-accordion-xyz-icon">+</span>
    </label>
    <div class="ease-accordion-xyz-content">
      <div class="ease-accordion-xyz-body">
        <p>Answer content here</p>
      </div>
    </div>
  </div>
</div>