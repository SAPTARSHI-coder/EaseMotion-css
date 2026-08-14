# CSS Morph-Glow Toast System

> **Subsystem**: `submissions/examples/54161-css-morph-glow-toast`  
> **Framework**: EaseMotion-css  
> **Category**: Notification Components & Dynamic Feedback UI

---

## Overview

The **CSS Morph-Glow Toast System** is an advanced, pure CSS & HTML notification architecture built for creative portfolios, SaaS dashboards, and modern web applications. It delivers dynamic ambient radial gradient glow effects ("morph-auras") behind glassmorphism toast containers with status-aware accent borders and interactive auto-dismiss progress timers.

---

## Key Features

1. **Morphing Radial Aura**: Background ambient glow using keyframe-animated radial gradients (`@keyframes morphAuraRotate`).
2. **Glassmorphism Container**: Backdrop blur (`backdrop-filter: blur(16px)`) with status-themed linear gradient border overlays.
3. **Status-Aware Variants**: Four tailored visual presets for `success`, `info`, `warning`, and `danger` notification types.
4. **Auto-Dismiss Progress Bar**: Keyframe-animated progress bar with hover-to-pause capability (`animation-play-state: paused`).
5. **Interactive Queue Management**: Non-blocking fixed container supporting dynamic toast creation, smooth entrance elasticity, and exit transitions.
6. **Theme Responsive**: Seamless switching between dark mode and light mode via custom properties (`data-theme="light"` / `data-theme="dark"`).
7. **Accessibility-Focused**: Includes ARIA live regions (`aria-live="polite"`), high-contrast text ratios, and keyboard focus states.

---

## Quick Start

### 1. HTML Markup

```html
<article class="static-toast toast-success">
  <div class="morph-aura"></div>
  <div class="toast-border-glow"></div>
  <div class="toast-inner">
    <div class="toast-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </div>
    <div class="toast-body">
      <h3 class="toast-title">Project Deployed</h3>
      <p class="toast-message">Your creative portfolio instance has been successfully deployed to global edge locations.</p>
    </div>
    <button class="toast-dismiss" aria-label="Dismiss toast">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <div class="toast-progress-bar"></div>
</article>
```

---

## Custom Property Token Reference

| Property Name | Default (Dark) | Description |
| :--- | :--- | :--- |
| `--bg-glass` | `rgba(18, 22, 31, 0.75)` | Glassmorphism base background |
| `--glass-blur` | `blur(16px)` | Backdrop blur filter strength |
| `--color-success` | `#10b981` | Accent color for success status |
| `--color-info` | `#3b82f6` | Accent color for info status |
| `--color-warning` | `#f59e0b` | Accent color for warning status |
| `--color-danger` | `#ef4444` | Accent color for danger status |
| `--ease-elastic` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic entrance timing function |

---

## Browser Support

- Chrome / Edge 88+
- Firefox 103+
- Safari 14.1+ (Backdrop Filter support)
