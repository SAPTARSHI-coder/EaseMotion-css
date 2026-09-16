# Animated Popover Component (`ease-popover-xyz`)

A zero-dependency, CSS-only animated popover component designed for the **EaseMotion CSS** framework. Perfect for contextual information, user profiles, product details, and interactive content with smooth scale/fade animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth scale/fade animations, arrow positioning, and hover effects using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and shadow tokens for seamless theming.
- **Multiple Positions**: Top, bottom, left, and right positioning with proper arrow placement.
- **Rich Content**: Support for user profiles, product details, notifications, and forms.
- **Arrow Indicator**: Rotated arrow pointing to trigger element.
- **Interactive Triggers**: Button and avatar triggers with hover effects.
- **Form Support**: Built-in form fields with focus states.
- **Notification List**: Animated notification items with hover effects.
- **Stats Display**: Grid layout for displaying statistics.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Popover
```html
<div class="popover-wrapper">
  <input type="checkbox" id="popover-1" class="ease-popover-xyz-toggle">
  <label for="popover-1" class="ease-btn-xyz ease-btn-xyz-primary">
    Click Me
  </label>
  <div class="ease-popover-xyz ease-popover-xyz-top">
    <div class="ease-popover-xyz-arrow"></div>
    <div class="ease-popover-xyz-content">
      <h4 class="ease-popover-xyz-title">Popover Title</h4>
      <p class="ease-popover-xyz-text">Popover content here.</p>
    </div>
  </div>
</div>