# Fintech Dashboard Zoom-In Badge Showcase

A lightweight, accessible, and highly responsive **CSS Zoom-In Badge** component system crafted with pure HTML5 and CSS3. Designed specifically for modern fintech applications, banking portals, investment dashboards, and web applications.

---

## Overview

The **Fintech Dashboard Zoom-In Badge** component provides visually appealing status badges (such as **Verified**, **Premium**, **Growth**, **Secure**, and **AI Powered**) enhanced with smooth entrance zoom animations, springy hover zoom micro-interactions, glassmorphism panel styling, and dark mode aesthetics.

Built with **Zero JavaScript**, it relies exclusively on pure CSS3 keyframe animations and transitions while strictly honoring user accessibility settings such as `prefers-reduced-motion`.

---

## Features

- 🚀 **Entrance Zoom-In Animation**: Fluid entrance scaling using spring cubic-bezier keyframes (`@keyframes zoomIn`).
- 🔍 **Interactive Hover Zoom**: Smooth scale boost and ambient glow shadows on cursor hover or keyboard focus.
- 💳 **Fintech Status Presets**: Pre-styled badges for **Verified**, **Premium**, **Growth**, **Secure**, and **AI Powered** statuses.
- 💎 **Glassmorphism Styling**: Backdrop blur filters, translucent background overlays, and subtle border highlights.
- 🎨 **CSS Custom Properties**: Fully themeable using clean, centralized CSS variables in `:root`.
- 📐 **Sizing Tokens**: Flexible size options including Small (`.badge-sm`), Medium (`.badge-md`), and Large (`.badge-lg`).
- ♿ **Accessibility (a11y)**: Focus-visible outline rings (`:focus-visible`), ARIA status roles (`role="status"`), and keyboard navigation support (`tabindex="0"`).
- 🎬 **Prefers Reduced Motion**: Complete animation and transition suppression when system reduced-motion is requested.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.
- ⚡ **Zero Dependencies**: Pure HTML5 and CSS3 without external frameworks or JavaScript code.

---

## Folder Structure

```text
submissions/examples/css-zoom-in-badge-59329/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Pure CSS3 stylesheet containing all zoom badge animations & tokens
└── README.md    # Documentation and usage guide
```

---

## Installation

No build step or package installation is required.

Simply copy the `style.css` file or include it directly in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css">
```

---

## Usage

Include the badge container markup within your fintech application header, user profile cards, or transaction tables.

### Basic Verified Status Badge

```html
<div class="badge badge-verified badge-zoom-entrance" tabindex="0" role="status" aria-label="Account Status: Verified">
  <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
  <span>Verified</span>
</div>
```

---

## HTML Example

Here is a full layout snippet representing a status bar within a fintech dashboard:

```html
<div class="fintech-bar-card glass-panel">
  <!-- User Profile Section -->
  <div class="user-profile">
    <div class="avatar-wrapper">AP</div>
    <div class="user-info">
      <h3>Apex Capital</h3>
      <span>#FIN-98420</span>
    </div>
  </div>

  <!-- Status Badges Group -->
  <div class="quick-badges-row">
    <!-- Verified Badge -->
    <div class="badge badge-verified badge-zoom-entrance zoom-delay-1" tabindex="0">
      <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
      <span>Verified</span>
    </div>

    <!-- Premium Badge -->
    <div class="badge badge-premium badge-zoom-entrance zoom-delay-2" tabindex="0">
      <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <span>Premium</span>
    </div>
  </div>
</div>
```

---

## CSS Variables

The component relies on clean CSS Custom Properties defined in `:root`:

```css
:root {
  /* Color Palette */
  --bg-primary: #0b0f19;
  --glass-bg: rgba(17, 24, 39, 0.7);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: 16px;

  /* Verified Status (Emerald) */
  --badge-verified-bg: rgba(16, 185, 129, 0.12);
  --badge-verified-border: rgba(16, 185, 129, 0.35);
  --badge-verified-text: #34d399;
  --badge-verified-glow: rgba(52, 211, 153, 0.25);

  /* Animation Curves */
  --zoom-curve: cubic-bezier(0.34, 1.56, 0.64, 1);
  --zoom-duration: 0.5s;
}
```

---

## Customization

### 1. Adjusting Zoom Speed & Easing
You can override the timing curve for a smoother or springier zoom effect:

```css
:root {
  --zoom-duration: 0.4s;
  --zoom-curve: cubic-bezier(0.16, 1, 0.3, 1); /* Silky smooth easing */
}
```

### 2. Creating Custom Status Badges
Add custom badge themes easily by extending the base `.badge` class:

```css
.badge-custom-alert {
  background-color: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.35);
  color: #f87171;
}

.badge-custom-alert:hover {
  box-shadow: 0 6px 20px rgba(248, 113, 113, 0.25);
  border-color: #f87171;
}
```

---

## Accessibility

This component adheres to WCAG accessibility guidelines:
- **Keyboard Focusable**: Interactive badges utilize `tabindex="0"` with clear `:focus-visible` outline rings (`outline: 2px solid #60a5fa`).
- **Semantic ARIA Roles**: Includes `role="status"` and explicit `aria-label` text for assistive technologies.
- **High Contrast Ratios**: Text and border colors meet WCAG AA contrast standards against dark glassmorphism backgrounds.
- **Motion Sensitivity**: Respects user motion preferences via `@media (prefers-reduced-motion: reduce)`.

---

## Responsive Design

- **Desktop (1024px+)**: Multi-column grid layout with spacious padding and full badge rows.
- **Tablet (768px - 1023px)**: Single column stack for account headers with scroll-friendly wrapping badge rows.
- **Mobile (<480px)**: Compact spacing, responsive typography (`clamp()`), and optimized touch targets.

---

## Browser Compatibility

- **Google Chrome**: 88+
- **Mozilla Firefox**: 85+
- **Apple Safari**: 14+
- **Microsoft Edge**: 88+

---

*Part of the EaseMotion-css open source component collection.*
