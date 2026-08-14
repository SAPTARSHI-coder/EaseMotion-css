# Animated Pagination Component (`ease-pagination-xyz`)

A zero-dependency, CSS-only animated pagination component designed for the **EaseMotion CSS** framework. Perfect for navigating through pages of content with smooth transitions and hover effects.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation with smooth hover and active state animations.
- **Animation-First**: Scale animation on active page, lift effect on hover, and slide animations on prev/next buttons using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Styles**: Default, rounded, minimal (underline), and compact variants.
- **Navigation Options**: Previous/Next buttons with text labels and page number buttons.
- **Dots/Ellipsis**: Support for showing "..." when there are many pages.
- **Page Information**: Can be combined with "Showing X-Y of Z" text.
- **Accessible**: Proper ARIA labels and semantic HTML structure.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Pagination
```html
<nav class="ease-pagination-xyz" aria-label="Pagination">
  <a href="#" class="ease-pagination-xyz-prev" aria-label="Previous page">
    <span>←</span>
    <span class="ease-pagination-xyz-text">Previous</span>
  </a>
  
  <div class="ease-pagination-xyz-pages">
    <a href="#" class="ease-pagination-xyz-page">1</a>
    <a href="#" class="ease-pagination-xyz-page ease-pagination-xyz-active">2</a>
    <a href="#" class="ease-pagination-xyz-page">3</a>
  </div>
  
  <a href="#" class="ease-pagination-xyz-next" aria-label="Next page">
    <span class="ease-pagination-xyz-text">Next</span>
    <span>→</span>
  </a>
</nav>