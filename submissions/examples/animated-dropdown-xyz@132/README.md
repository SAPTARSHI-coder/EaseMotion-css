# Animated Dropdown Menu (`ease-dropdown-xyz`)

A zero-dependency, CSS-only animated dropdown menu component designed for the **EaseMotion CSS** framework. Perfect for action menus, context menus, and selection lists with smooth animations and nested submenus.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth scale/fade animations, staggered item reveals, and nested submenu transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Triggers**: Click-to-toggle (default) and hover-triggered options.
- **Position Variants**: Bottom-left, bottom-right, top-left, and top-right positioning.
- **Nested Submenus**: Support for multi-level dropdown menus.
- **Icon Support**: Optional icons for menu items.
- **Divider Support**: Visual separators between menu item groups.
- **Danger Items**: Red-colored items for destructive actions.
- **Search Filter**: Optional search input within dropdown.
- **Staggered Animations**: Menu items animate in sequence for polished feel.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Dropdown (Click to Open)
```html
<div class="ease-dropdown-xyz">
  <input type="checkbox" id="dropdown-1" class="ease-dropdown-xyz-toggle">
  <label for="dropdown-1" class="ease-dropdown-xyz-trigger">
    <span>Options</span>
    <span class="ease-dropdown-xyz-arrow">▼</span>
  </label>
  <div class="ease-dropdown-xyz-menu">
    <a href="#" class="ease-dropdown-xyz-item">
      <span class="ease-dropdown-xyz-icon">👤</span>
      <span>Profile</span>
    </a>
    <a href="#" class="ease-dropdown-xyz-item">
      <span class="ease-dropdown-xyz-icon">⚙️</span>
      <span>Settings</span>
    </a>
  </div>
</div>