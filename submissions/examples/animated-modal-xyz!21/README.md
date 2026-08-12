# Animated Modal Component (`ease-modal-xyz`)

A zero-dependency, CSS-only animated modal/dialog component designed for the **EaseMotion CSS** framework. Perfect for confirmations, forms, and focused content display.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using `:target` pseudo-class for open/close functionality.
- **Animation-First**: Smooth backdrop fade and content scale animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Includes basic, success, warning, error, and large size variants.
- **Accessible**: Includes close button with focus states and proper ARIA labels.
- **Responsive**: Fully responsive with mobile-optimized layouts.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

1. Create a trigger link with `href="#modal-id"`.
2. Create a modal container with matching `id` and the `ease-modal-xyz` class.
3. Include backdrop, container, and content sections.

```html
<!-- Trigger -->
<a href="#modal-basic" class="ease-btn ease-btn-primary">Open Modal</a>

<!-- Modal -->
<div id="modal-basic" class="ease-modal-xyz">
  <div class="ease-modal-xyz-backdrop"></div>
  <div class="ease-modal-xyz-container">
    <div class="ease-modal-xyz-content">
      <div class="ease-modal-xyz-header">
        <h3 class="ease-modal-xyz-title">Modal Title</h3>
        <a href="#" class="ease-modal-xyz-close" aria-label="Close">×</a>
      </div>
      <div class="ease-modal-xyz-body">
        <p>Modal content goes here.</p>
      </div>
      <div class="ease-modal-xyz-footer">
        <a href="#" class="ease-btn ease-btn-secondary">Cancel</a>
        <a href="#" class="ease-btn ease-btn-primary">Confirm</a>
      </div>
    </div>
  </div>
</div>