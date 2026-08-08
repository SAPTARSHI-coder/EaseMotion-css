# Animated Search Bar Component (`ease-search-bar-xyz`)

A zero-dependency, CSS-only animated search bar component designed for the **EaseMotion CSS** framework. Perfect for search interfaces with smooth expand animations, focus states, and interactive filtering.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for expand/collapse.
- **Animation-First**: Smooth expand animations, icon scaling, focus transitions, and filter interactions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Basic, expandable, with filters, clearable, with keyboard shortcut, large, and compact.
- **Expandable Search**: Click-to-expand animation for space-efficient designs.
- **Filter Tags**: Interactive filter chips with active states.
- **Clear Button**: Animated clear button that appears when input has value.
- **Keyboard Shortcut Hint**: Visual indicator for keyboard shortcuts (⌘K).
- **Submit Button**: Optional search button for large search bars.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Search Bar
```html
<div class="ease-search-xyz">
  <input type="text" class="ease-search-xyz-input" placeholder="Search...">
  <span class="ease-search-xyz-icon">🔍</span>
</div>