# Animated Breadcrumb Navigation (`ease-breadcrumb-xyz`)

A zero-dependency, CSS-only animated breadcrumb navigation component designed for the **EaseMotion CSS** framework. Perfect for hierarchical navigation with smooth hover effects and separator animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using semantic HTML `<nav>` and `<ol>` elements.
- **Animation-First**: Smooth hover effects on links and separators with subtle translations and scaling using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Separator Styles**: Default slash, arrow (›), and dot (•) separators.
- **Icon Support**: Easily add icons to breadcrumb items with hover scaling.
- **Background Variant**: Optional background container for visual emphasis.
- **Collapsed State**: Support for truncated breadcrumbs with ellipsis.
- **Accessible**: Built on semantic HTML with proper ARIA labels and `aria-current` for the current page.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Breadcrumb
```html
<nav class="ease-breadcrumb-xyz" aria-label="Breadcrumb">
  <ol class="ease-breadcrumb-xyz-list">
    <li class="ease-breadcrumb-xyz-item">
      <a href="#" class="ease-breadcrumb-xyz-link">Home</a>
    </li>
    <li class="ease-breadcrumb-xyz-item">
      <a href="#" class="ease-breadcrumb-xyz-link">Products</a>
    </li>
    <li class="ease-breadcrumb-xyz-item ease-breadcrumb-xyz-current" aria-current="page">
      Current Page
    </li>
  </ol>
</nav>