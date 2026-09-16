# Sandbox Showcase: CSS Mega Lightbox

## Overview
A lightweight, pure CSS/HTML full-screen image gallery and lightbox modal overlay designed for photography portfolios, product showcases, e-commerce galleries, and media dashboards. It uses URL fragment target identifiers (`:target`) to trigger GPU-accelerated modal scale/fade reveals, prev/next navigation loops, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive media showcase gallery with full-screen lightbox overlays.
* `style.css` — Scoped layout modifier specifying thumbnail grids, `:target` overlay states, modal zoom keyframe passes, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for lightbox borders and nav buttons |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for close buttons |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for open modal container |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for lightbox container |
| `--lightbox-speed` | `400ms` | Transition duration for modal zoom and fade passes |
| `--lightbox-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS `:target` State Engine:** Clicking a thumbnail link (`href="#lightbox-1"`) activates the matching overlay element via `.alm-lightbox-overlay:target`.
2. **GPU-Accelerated Modal Reveals:** `@keyframes lightboxFade` animates `opacity: 0` with `transform: scale(0.95)` to `opacity: 1` and `transform: scale(1.00)` with `will-change: transform, opacity`.
3. **Bidirectional Fragment Navigation:** Previous/Next anchor buttons cycle URL hashes (`#lightbox-2`, `#lightbox-3`) to route between lightbox items smoothly.
4. **Accessibility Built-In:** Includes explicit `:focus-visible` rings for keyboard navigation, `role="dialog"` modal semantics, and gracefully disables zoom transformations when `@media (prefers-reduced-motion: reduce)` is enabled.
