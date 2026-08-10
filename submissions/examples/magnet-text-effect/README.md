# Sandbox Showcase: CSS Magnet Text Effect

## Overview
A lightweight, pure CSS/HTML interactive typography component designed for cyberpunk headers, hero banners, and high-impact landing titles. It uses CSS sibling selectors and the `:has()` relational pseudo-class to shift adjacent characters away from the active cursor hover target, creating a repelling wave effect without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting interactive magnet text typography.
* `style.css` — Scoped layout modifier specifying character translate transforms, `:has()` relational rules, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for active character |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for repelled adjacent characters |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for active letter |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for text container |
| `--magnet-speed` | `300ms` | Transition duration for character translate passes |
| `--magnet-ease` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Elastic spring return cubic-bezier curve |

## 🛠️ How It Works

1. **Active Target Elevation:** `.alm-char:hover` scales up (`scale(1.35)`) and translates upward (`translate3d(0, -18px, 0)`).
2. **Right Sibling Repulsion:** `.alm-char:hover + .alm-char` shifts adjacent right characters right and down (`translate3d(12px, 8px, 0)`).
3. **Left Sibling Repulsion (`:has` Relational Selection):** `.alm-char:has(+ .alm-char:hover)` shifts adjacent left characters left and down (`translate3d(-12px, 8px, 0)`).
4. **Accessibility Built-In:** Preserves screen reader usability via `aria-label="CYBERNETIC"` on the wrapper while hiding decorative individual spans with `aria-hidden="true"`, and gracefully disables character movement when `@media (prefers-reduced-motion: reduce)` is enabled.
