# Sandbox Showcase: CSS Swipe Confirm Input

## Overview
A lightweight, pure CSS/HTML action slider component designed for payment confirmations, security authorization popups, deployment triggers, and iOS-inspired lock screen confirmation controls. It combines native `<input type="range">` state mapping with `@keyframes shimmerSweep` instruction text passes, glowing thumb indicators, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive swipe confirmation slider.
* `style.css` — Scoped layout modifier specifying range thumb transforms, shimmer text keyframes, value state mappings, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for initial handle state |
| `--neon-emerald` | `#10b981` | Emerald accent color for confirmed state |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for slider container |
| `--neon-emerald-glow` | `rgba(16, 185, 129, 0.35)` | Glowing shadow for confirmed handle |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for slider track |
| `--swipe-speed` | `350ms` | Transition duration for handle translate passes |
| `--swipe-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Pure CSS Range Input State Machine:** Uses native `<input type="range" min="0" max="100" step="100">` controls mapped to CSS attribute selectors (`.alm-swipe-range[value="100"]`).
2. **GPU-Accelerated Thumb Translation:** Translates the custom thumb visual (`transform: translate3d(calc(380px - 56px), 0, 0)`) with `will-change: transform` to deliver smooth 60 FPS slider movement.
3. **Continuous Instruction Shimmer:** An `@keyframes shimmerSweep` loop animates a `linear-gradient` text shine across the "SLIDE TO CONFIRM" instruction label.
4. **Accessibility Built-In:** Supports standard Arrow key navigation via standard native range controls, includes explicit `:focus-visible` rings, and gracefully disables keyframe shimmer sweeps when `@media (prefers-reduced-motion: reduce)` is enabled.
