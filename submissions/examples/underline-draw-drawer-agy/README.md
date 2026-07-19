# SaaS Underline Draw Drawer Component

A side-sliding settings drawer component inspired by SaaS Dashboard design patterns, featuring animated underline draw accents underneath headers and link menu items.

---

## 💡 Quick Overview

### 1. What does this do?

This component provides a side panel (Drawer) sliding in from the right edge of the screen, which triggers staggered, smooth underline draw animations underneath headers and menu links as it opens.

### 2. How is it used?

Incorporate the state checkbox and drawer layout in your markup:

```html
<!-- 1. Pure CSS State Trigger -->
<input type="checkbox" id="drawer-state-toggle" class="drawer-state-checkbox" />

<!-- 2. Main Page Layout (dashboard button) -->
<label for="drawer-state-toggle" class="trigger-drawer-btn" tabindex="0">
  Open Drawer Settings
</label>

<!-- 3. Drawer Overlay and Panel -->
<label for="drawer-state-toggle" class="drawer-overlay"></label>

<div class="drawer-panel">
  <!-- Drawer Header -->
  <div class="drawer-header">
    <h2 class="drawer-header-title">Workspace Settings</h2>
    <label for="drawer-state-toggle" class="drawer-close-btn" tabindex="0"
      >Close</label
    >
  </div>

  <!-- Drawer Body -->
  <div class="drawer-body">
    <div class="drawer-section">
      <h3 class="drawer-section-title">Telemetry Preferences</h3>
      <!-- Preference options lists... -->
    </div>
  </div>
</div>
```

### 3. Why is it useful?

Side drawers are key navigation and configuration panels in dashboard layouts. This component uses CSS transition delays to draw header and category underlines only _after_ the panel slides into view, directing focus to options sequentially. It operates without JavaScript, prevents rendering blocking, and supports high-fidelity micro-interactions suitable for cloud consoles.

---

## 🎨 Theme & Customization Guide

Override these variables in your root element to adjust styling colors and transition delays:

```css
:root {
  /* Theme Colors */
  --saas-canvas: #f8fafc; /* Background canvas */
  --saas-surface: #ffffff; /* Side panel cards and buttons background */
  --saas-border: #e2e8f0; /* Thin boundaries and divider lines */
  --saas-primary: #3b82f6; /* Drawing highlight primary branding accent */
  --saas-text: #0f172a; /* Main text and titles color */

  /* Timing Customizations */
  --ease-slide-duration: 0.45s; /* Duration of the sliding drawer animation */
  --ease-draw-duration: 0.5s; /* Duration of the underline drawing animation */
}
```

Staggered delay timings can be customized inside the state selectors:

```css
.drawer-state-checkbox:checked ~ .drawer-panel .drawer-header-title::after {
  transition-delay: 0.3s; /* Triggered shortly after slide-in begins */
}
```

---

## ♿ Accessibility Specifications

1. **Focus Outline**: Includes custom focus outlines on active triggers for keyboard users.
2. **Keyboard Handlers**: Active buttons/labels have script mappings translating Space and Enter presses into click inputs. Toggling the `Escape` key closes the active drawer automatically.
3. **Motion settings**: Full support for users with motion sensitivity, disabling all sliding and scaling keyframes when `@media (prefers-reduced-motion: reduce)` matches.
