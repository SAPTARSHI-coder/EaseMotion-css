# EaseMotion Notification Badge Component (`#86844`)

## Abstract

The **EaseMotion Notification Badge** component (`.ease-notification-wrapper`) provides a modern, high-performance, accessible notification indicator for user interfaces. Featuring an animated badge counter with a spring-bounce entrance and glowing visual highlight, it offers visual feedback whenever new notifications arrive.

---

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a Notification Badge component (`.ease-notification-wrapper`) featuring a bell icon with a bouncing, glowing badge counter that pings on new alert arrivals.

### 2. How is it used?
Wrap an icon or target element inside `.ease-notification-wrapper` along with an absolute-positioned `.ease-badge` element. Trigger the spring animation upon receiving new events by updating the counter text and toggling the `is-pinging` class (or re-triggering DOM reflow).

```html
<div class="ease-notification-wrapper" id="notification-bell" role="button" aria-label="3 Unread Notifications" tabindex="0">
  <span class="ease-bell-icon" aria-hidden="true">🔔</span>
  <span class="ease-badge" id="badge-count">3</span>
</div>
```

### 3. Why is it useful?
Provides instant, delightful visual feedback for user notifications and unread messages without requiring complex animation libraries or heavy JS runtime overhead.

---

## Badge Animation Architecture

- **Cubic Bezier Spring Curve**: Keyframe animation `easeBadgeBounce` relies on `cubic-bezier(0.34, 1.56, 0.64, 1)` to achieve a natural spring-over-shoot effect on scale.
- **Reflow Re-triggering**: Toggling `.is-pinging` with a forced layout reflow (`void element.offsetWidth`) allows re-animating the badge cleanly on every new alert.
- **Accessibility & Contrast**: Accessible via standard ARIA attributes (`role="button"`, `aria-label`, `aria-hidden`) and fully styled for `forced-colors: active` modes (High Contrast).

---

## Custom CSS Properties

The component relies on CSS custom properties defined at `:root` for theme customization and effortless overrides:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--badge-bg` | `#030712` | Main background color of the viewport/stage |
| `--badge-surface` | `#0f172a` | Container surface card background |
| `--badge-box` | `#1e293b` | Bell icon box background |
| `--badge-border` | `rgba(255, 255, 255, 0.12)` | Subtle border stroke for containers |
| `--badge-red` | `#ef4444` | Primary badge accent color for alerts |
| `--badge-red-glow` | `rgba(239, 68, 68, 0.5)` | Box-shadow radial glow emitted by badge |
| `--badge-text` | `#f8fafc` | Primary text color |
| `--badge-muted` | `#94a3b8` | Muted subtitle text color |
| `--badge-accent` | `#3b82f6` | Action button background color |
