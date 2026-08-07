# Animated Notification Bell (`ease-notification-bell-xyz`)

A zero-dependency, CSS-only animated notification bell component designed for the **EaseMotion CSS** framework. Perfect for modern web applications with smooth bell animations, badge pulses, dropdown panels, and notification item transitions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using checkbox hack for toggle functionality.
- **Animation-First**: Smooth bell ring animation, badge pop/pulse, panel slide-in, and notification item stagger using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Bell Animation**: Rings when clicked for satisfying feedback.
- **Badge Counter**: Animated badge with optional pulse effect for urgency.
- **Dropdown Panel**: Smooth scale and fade animation on open/close.
- **Notification Items**: Staggered slide-in animations for each notification.
- **Unread Indicators**: Visual distinction for unread notifications with pulsing dots.
- **Avatar Support**: Gradient avatars for user notifications.
- **Icon Circles**: Colored icon circles for system notifications.
- **Empty State**: Beautiful empty state when no notifications exist.
- **Mark All Read**: Quick action button in header.
- **View All Link**: Footer link to notification center.
- **Accessible**: Proper label associations and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Notification Bell
```html
<div class="ease-notification-xyz">
  <input type="checkbox" id="notification-toggle" class="ease-notification-xyz-toggle">
  <label for="notification-toggle" class="ease-notification-xyz-bell">
    <span class="ease-notification-xyz-icon">🔔</span>
    <span class="ease-notification-xyz-badge">5</span>
  </label>
  
  <div class="ease-notification-xyz-panel">
    <div class="ease-notification-xyz-header">
      <h3 class="ease-notification-xyz-title">Notifications</h3>
      <button class="ease-notification-xyz-mark-all">Mark all as read</button>
    </div>
    
    <div class="ease-notification-xyz-list">
      <!-- Notification items go here -->
    </div>
    
    <div class="ease-notification-xyz-footer">
      <a href="#" class="ease-notification-xyz-view-all">View all notifications</a>
    </div>
  </div>
</div>