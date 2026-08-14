# Sandbox Showcase: CSS Bounce-Pulse Pricing Table for Product Catalog Layouts

## Overview
A lightweight, pure CSS/HTML pricing table component designed for SaaS products, digital catalogs, and developer subscription plans. It combines `cubic-bezier(0.68, -0.55, 0.265, 1.55)` spring bounce scaling on card hover/focus with continuous `@keyframes neonPulse` ambient glowing shadow passes to deliver tactile interactive feedback without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 3-column responsive pricing table.
* `style.css` — Scoped layout modifier specifying grid templates, spring bounce transforms, keyframe pulse animations, featured plan highlights, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for featured plans |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for standard cards |
| `--neon-magenta-glow` | `rgba(255, 0, 85, 0.35)` | Ambient glowing shadow for featured cards |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.85)` | Glassmorphic surface color for pricing cards |
| `--card-speed` | `450ms` | Transition duration for card scale and hover effects |
| `--bounce-ease` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Spring overshoot cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Hover State Machine:** Uses CSS `:hover` and `:focus-within` selectors to trigger pricing card spring scaling and pulse keyframes.
2. **Spring Overshoot Dynamics:** `transform: scale(1.04) translate3d(0, -6px, 0)` with spring cubic-bezier easing delivers a tactile physical bounce on mouse hover or focus.
3. **Continuous Featured Pulsing:** Featured cards (`data-featured="true"`) continuously execute `@keyframes neonPulseMagenta` to draw visual attention.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `tabindex="0"` on interactive cards, and gracefully disables spring scaling and keyframe pulsing when `@media (prefers-reduced-motion: reduce)` is enabled.
