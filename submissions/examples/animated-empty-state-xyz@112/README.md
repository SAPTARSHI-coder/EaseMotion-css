# Animated Empty State Component (`ease-empty-state-xyz`)

A zero-dependency, CSS-only animated empty state component designed for the **EaseMotion CSS** framework. Perfect for displaying engaging messages when there's no content to show, with smooth entrance animations and floating illustrations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using CSS animations and transitions.
- **Animation-First**: Smooth fade-in, floating icon, pulsing decorations, and staggered content reveals using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Standard, error state, and compact layouts.
- **Floating Icon**: Main icon with continuous floating animation.
- **Decorative Elements**: Pulsing gradient circles for visual interest.
- **Staggered Reveals**: Title, description, and actions animate in sequence.
- **Action Buttons**: Primary and secondary buttons with hover lift effects.
- **Error State**: Distinct styling for error scenarios.
- **Compact Layout**: Horizontal layout for space-constrained UIs.
- **Accessible**: Proper semantic HTML structure and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Empty State
```html
<div class="ease-empty-xyz">
  <div class="ease-empty-xyz-illustration">
    <div class="ease-empty-xyz-icon">🔍</div>
    <div class="ease-empty-xyz-decoration ease-empty-xyz-decoration-1"></div>
    <div class="ease-empty-xyz-decoration ease-empty-xyz-decoration-2"></div>
  </div>
  <h3 class="ease-empty-xyz-title">No results found</h3>
  <p class="ease-empty-xyz-description">
    We couldn't find anything matching your search.
  </p>
  <div class="ease-empty-xyz-actions">
    <button class="ease-empty-xyz-btn ease-empty-xyz-btn-primary">Clear Filters</button>
    <button class="ease-empty-xyz-btn ease-empty-xyz-btn-secondary">Browse All</button>
  </div>
</div>