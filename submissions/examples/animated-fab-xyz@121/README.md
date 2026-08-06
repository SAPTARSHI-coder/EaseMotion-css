# Animated Floating Action Button (`ease-fab-xyz`)

A zero-dependency, CSS-only animated floating action button component designed for the **EaseMotion CSS** framework. Perfect for mobile interfaces with expanding menus, rotation animations, and staggered reveals.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth rotation, scale, staggered reveals, and backdrop fade using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and shadow tokens for seamless theming.
- **Multiple Layouts**: Vertical, horizontal, diagonal, and arc (speed dial) menu expansions.
- **Position Variants**: Bottom-right, bottom-left, top-right, and top-left positioning.
- **Rotation Animation**: Main button rotates 45° when activated.
- **Staggered Reveals**: Menu items animate in sequence with delays.
- **Backdrop Overlay**: Semi-transparent backdrop with fade animation.
- **Hover Labels**: Labels appear on hover with smooth slide-in.
- **Gradient Backgrounds**: Beautiful gradient backgrounds for visual appeal.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Vertical FAB
```html
<div class="ease-fab-xyz ease-fab-xyz-bottom-right">
  <input type="checkbox" id="fab-toggle" class="ease-fab-xyz-toggle">
  <label for="fab-toggle" class="ease-fab-xyz-main">
    <span class="ease-fab-xyz-icon">+</span>
  </label>
  
  <div class="ease-fab-xyz-menu ease-fab-xyz-vertical">
    <div class="ease-fab-xyz-item">
      <span class="ease-fab-xyz-label">Action 1</span>
      <button class="ease-fab-xyz-button">📝</button>
    </div>
    <div class="ease-fab-xyz-item">
      <span class="ease-fab-xyz-label">Action 2</span>
      <button class="ease-fab-xyz-button">📷</button>
    </div>
  </div>
</div>