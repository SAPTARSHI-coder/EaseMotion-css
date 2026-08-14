# Animated Sidebar Component (`ease-sidebar-xyz`)

A zero-dependency, CSS-only animated sidebar/drawer component designed for the **EaseMotion CSS** framework. Perfect for navigation menus, notification panels, and collapsible sidebars with smooth slide animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth slide-in/slide-out animations, nested menu transitions, and overlay effects using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Positions**: Left sidebar and right drawer variants.
- **Nested Menus**: Collapsible submenus with smooth expand/collapse animations.
- **Overlay Mode**: Optional backdrop overlay for drawer-style sidebars.
- **Collapsible**: Icon-only collapsed state to save space.
- **User Profile**: Footer section with user avatar and info.
- **Notifications**: Built-in notification list styling.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Left Sidebar
```html
<input type="checkbox" id="sidebar-toggle" class="ease-sidebar-xyz-toggle" checked>

<aside class="ease-sidebar-xyz ease-sidebar-xyz-left">
  <div class="ease-sidebar-xyz-header">
    <div class="ease-sidebar-xyz-logo">🚀</div>
    <h2 class="ease-sidebar-xyz-title">Dashboard</h2>
  </div>
  
  <nav class="ease-sidebar-xyz-nav">
    <ul class="ease-sidebar-xyz-menu">
      <li class="ease-sidebar-xyz-item">
        <a href="#" class="ease-sidebar-xyz-link ease-sidebar-xyz-active">
          <span class="ease-sidebar-xyz-icon">📊</span>
          <span class="ease-sidebar-xyz-text">Overview</span>
        </a>
      </li>
    </ul>
  </nav>
</aside>