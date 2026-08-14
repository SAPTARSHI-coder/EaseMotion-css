# Animated Tabs Component (`ease-tabs-xyz`)

A zero-dependency, CSS-only animated tabs component designed for the **EaseMotion CSS** framework. Perfect for organizing content into separate views with smooth transitions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using radio inputs and CSS selectors.
- **Animation-First**: Smooth underline animations and content fade/slide transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Styles**: Includes default underline style, pill style, and vertical tabs.
- **Accessible**: Built on native radio inputs with proper labels for keyboard navigation.
- **Responsive**: Vertical tabs automatically convert to horizontal on mobile devices.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

1. Create a container with the `ease-tabs-xyz` class.
2. Add radio inputs with unique names and IDs.
3. Create labels with matching `for` attributes.
4. Add content panels.

```html
<div class="ease-tabs-xyz">
  <input type="radio" name="tabs-example" id="example-1" checked>
  <input type="radio" name="tabs-example" id="example-2">
  
  <div class="ease-tabs-xyz-header">
    <label for="example-1" class="ease-tabs-xyz-label">Tab 1</label>
    <label for="example-2" class="ease-tabs-xyz-label">Tab 2</label>
  </div>
  
  <div class="ease-tabs-xyz-content">
    <div class="ease-tabs-xyz-panel">
      <h3>Content 1</h3>
      <p>First tab content.</p>
    </div>
    <div class="ease-tabs-xyz-panel">
      <h3>Content 2</h3>
      <p>Second tab content.</p>
    </div>
  </div>
</div>