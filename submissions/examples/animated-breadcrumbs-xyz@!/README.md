# Animated Breadcrumbs (`ease-breadcrumbs-xyz`)

A zero-dependency, CSS-only animated breadcrumbs component designed for the **EaseMotion CSS** framework. Perfect for hierarchical navigation with smooth hover effects and separator animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using semantic HTML `<nav>` and `<ol>` elements.
- **Animation-First**: Smooth hover effects on links and separators using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Separator Styles**: Includes default slash, arrow (›), and dot (•) separators.
- **Background Variant**: Optional background container for visual emphasis.
- **Icon Support**: Easily add icons to breadcrumb items.
- **Accessible**: Built on semantic HTML with proper ARIA labels and `aria-current` for the current page.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

1. Create a `<nav>` element with the `ease-breadcrumbs-xyz` class and `aria-label="Breadcrumb"`.
2. Add an `<ol>` with the `ease-breadcrumbs-xyz-list` class.
3. Add `<li>` items with the `ease-breadcrumbs-xyz-item` class.
4. Use `<a>` tags with the `ease-breadcrumbs-xyz-link` class for clickable items.
5. Add `ease-breadcrumbs-xyz-current` and `aria-current="page"` to the last item.

```html
<nav class="ease-breadcrumbs-xyz" aria-label="Breadcrumb">
  <ol class="ease-breadcrumbs-xyz-list">
    <li class="ease-breadcrumbs-xyz-item">
      <a href="#" class="ease-breadcrumbs-xyz-link">
        <span class="ease-breadcrumbs-xyz-icon">🏠</span>
        Home
      </a>
    </li>
    <li class="ease-breadcrumbs-xyz-item">
      <a href="#" class="ease-breadcrumbs-xyz-link">Products</a>
    </li>
    <li class="ease-breadcrumbs-xyz-item ease-breadcrumbs-xyz-current" aria-current="page">
      Current Page
    </li>
  </ol>
</nav>