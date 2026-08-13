# CSS Morph-Glow Badge System

> **Subsystem**: `submissions/examples/54162-css-morph-glow-badge`  
> **Framework**: EaseMotion-css  
> **Category**: Badge & Status Indicator Components

---

## Overview

The **CSS Morph-Glow Badge System** provides modular, high-impact status indicators and tag badges designed for dashboard applications, user profile headers, and creative portfolio layouts. Built using pure HTML and modern CSS, each badge features an ambient radial background aura (`.badge-aura`) that smoothly morphs via `@keyframes badgeAuraMorph`.

---

## Key Features

1. **Morphing Background Aura**: Smooth radial gradient rotation and scaling (`@keyframes badgeAuraMorph`) positioned behind glassmorphic container walls.
2. **5 Color Presets**: Includes status-tailored variants: `badge-emerald`, `badge-cyan`, `badge-amber`, `badge-rose`, and `badge-purple`.
3. **Shape & Behavior Modifiers**:
   - `.badge-pill`: Rounded pill boundary (`border-radius: 9999px`).
   - `.badge-glow`: Persistent outer ambient drop-shadow glow.
   - `.badge-dot`: Live status pulsing dot indicator (`.dot-indicator`).
   - `.badge-interactive`: Embedded notification counter bubbles (`.count-bubble`) with hover/focus scale feedback.
4. **Glassmorphism Base**: Backdrop blur (`backdrop-filter: blur(12px)`) with semi-transparent status background tints.
5. **Full Theme Responsiveness**: Light and dark mode support using CSS custom properties (`data-theme="dark"` / `data-theme="light"`).

---

## Quick Start Code Snippet

```html
<!-- Live Status Dot Badge -->
<span class="morph-badge badge-emerald badge-dot">
  <span class="badge-aura"></span>
  <span class="dot-indicator"></span>
  System Online
</span>

<!-- Premium Pill Badge -->
<span class="morph-badge badge-purple badge-pill badge-glow">
  <span class="badge-aura"></span>
  Pro Feature
</span>

<!-- Interactive Notification Counter Badge -->
<span class="morph-badge badge-cyan badge-interactive">
  <span class="badge-aura"></span>
  Notifications
  <span class="count-bubble">12</span>
</span>
```

---

## Custom Property Reference

| Property Name | Default (Dark) | Description |
| :--- | :--- | :--- |
| `--badge-color` | Varies per preset | Primary text and accent color |
| `--badge-glass-bg` | Semi-transparent tint | Glassmorphic background color |
| `--aura-1` & `--aura-2` | Radial gradient stops | Morphing aura color stops |
| `--glass-blur` | `blur(12px)` | Backdrop blur intensity |
| `--radius-badge` | `10px` | Standard badge corner radius |
| `--radius-pill` | `9999px` | Pill badge modifier radius |

---

## Browser Support

- Chrome / Edge 88+
- Firefox 103+
- Safari 14.1+ (Backdrop Filter support)
