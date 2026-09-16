# 3D Dropdown Usage Documentation

## What does this do?
The 3D Dropdown component delivers a smooth 3D `rotateX()` perspective flip animation for interactive action menus and dropdown toolbars using pure CSS without requiring JavaScript.

## How is it used?
Wrap a trigger button and floating menu panel inside `.ease-3d-dropdown-wrapper`. Trigger the dropdown reveal on hover or keyboard focus (`:focus-within`):

```html
<div class="ease-3d-dropdown-wrapper">
  <button class="ease-dropdown-btn" type="button" aria-expanded="false" aria-haspopup="true">
    <span>⚡ Quick Actions</span>
    <span class="ease-btn-chevron" aria-hidden="true">▼</span>
  </button>

  <div class="ease-dropdown-panel" role="menu">
    <a href="#analytics" class="ease-dropdown-link" role="menuitem">
      <span>📊 Analytics Dashboard</span>
      <span class="ease-link-tag">Live</span>
    </a>
    <a href="#settings" class="ease-dropdown-link" role="menuitem">
      <span>⚙️ System Preferences</span>
    </a>
    <a href="#security" class="ease-dropdown-link" role="menuitem">
      <span>🔒 Security Audit</span>
    </a>
  </div>
</div>
```

## Why is it useful?
It provides a high-performance, GPU-accelerated 3D transition with zero JavaScript runtime overhead, full keyboard focus accessibility (`:focus-within`, `:focus-visible`), and full `@media (prefers-reduced-motion)` support, perfectly aligning with EaseMotion CSS's philosophy of pure, lightweight, accessible UI animations.

---

## 🎨 Custom CSS Variables

Customize the dropdown appearance and timing tokens using these root CSS variables:

| Custom Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-3d-cyan` | `#00f3ff` | Primary cyan highlight and border color |
| `--ease-3d-magenta` | `#ff0055` | Secondary accent indicator color |
| `--ease-3d-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient shadow glow for trigger and panel |
| `--ease-3d-panel-bg` | `rgba(15, 23, 42, 0.94)` | Glassmorphic background for the menu panel |
| `--ease-3d-speed` | `400ms` | Transition duration for 3D flip animation |
| `--ease-3d-curve` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing function |

---

## ♿ Accessibility & Micro-Interactions

* **Keyboard Navigation:** Uses `:focus-within` and `:focus-visible` to allow seamless tab navigation into menu items.
* **ARIA Standard Roles:** Includes `role="menu"`, `role="menuitem"`, `aria-haspopup="true"`, and `aria-expanded` attributes.
* **Reduced Motion:** Gracefully disables 3D rotations and falls back to simple opacity fades when `@media (prefers-reduced-motion: reduce)` is preferred.
