# Documentation: Interactive Notification Badge - Basic Usage (#65912)

Comprehensive documentation guide, copy-paste HTML markup examples, CSS class naming conventions, custom CSS variable overrides, and accessibility/keyboard navigation notes for the EaseMotion **Interactive Notification Badge (Basic Usage)** component (`#65912`), fully addressing issue `#81617`.

## 🚀 Overview & Features

- **Basic Badge Layout:** Combines an icon, label, and an animated gradient count indicator in a sleek glassmorphic container.
- **Accessibility & ARIA Setup:** Built with semantic status roles (`role="status"`, `aria-live="polite"`) for real-time announcement updates.
- **Keyboard Navigation Setup:** Clear `:focus-visible` high-contrast outlines and full tab support.

## 🛠️ Copy-Paste HTML Markup Example

```html
<div class="ease-notification-badge em-badge-basic" role="status" aria-label="Unread Notifications Count" tabindex="0" autofocus>
    <span class="em-badge-icon" aria-hidden="true">🔔</span>
    <span class="em-badge-label">Updates</span>
    <span class="em-badge-count" aria-live="polite">3</span>
</div>
