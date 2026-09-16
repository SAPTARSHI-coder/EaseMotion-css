# Animated Dropdown Menu (`ease-dropdown-xyz`)

A zero-dependency, CSS-only animated dropdown menu component designed for the **EaseMotion CSS** framework. Perfect for navigation menus, user actions, and contextual options.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using `:hover` and `:focus-within` pseudo-classes.
- **Animation-First**: Smooth fade, scale, and slide animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Includes hover-based, focus-based (keyboard accessible), right-aligned, and large menu options.
- **Accessible**: Full keyboard navigation support with focus states and `:focus-within` functionality.
- **Rich Content**: Supports icons, dividers, headers, and multi-line items.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

1. Create a container with the `ease-dropdown-xyz` class.
2. Add a trigger button with the `ease-dropdown-xyz-trigger` class.
3. Add a menu container with the `ease-dropdown-xyz-menu` class.

```html
<div class="ease-dropdown-xyz">
  <button class="ease-dropdown-xyz-trigger ease-btn ease-btn-primary">
    Menu
    <span class="ease-dropdown-xyz-arrow"></span>
  </button>
  <div class="ease-dropdown-xyz-menu">
    <a href="#" class="ease-dropdown-xyz-item">Option 1</a>
    <a href="#" class="ease-dropdown-xyz-item">Option 2</a>
    <div class="ease-dropdown-xyz-divider"></div>
    <a href="#" class="ease-dropdown-xyz-item">Option 3</a>
  </div>
</div>