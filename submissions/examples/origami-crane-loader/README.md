# Sandbox Showcase: CSS Origami Crane Loader

## Overview
A lightweight, pure CSS/HTML 3D origami paper crane loading indicator designed for agency portfolios, Japanese aesthetic landing pages, gaming cockpits, and modern web applications. It combines CSS 3D perspective planes (`perspective: 800px`) with 3D rotational wing flapping keyframes (`@keyframes flapWingLeft`), vertical body hovering, and ambient drop shadows without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 3D origami crane loader.
* `style.css` — Scoped layout modifier specifying 3D perspective viewports, wing flap keyframes, hover bobbing, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for left wing and neck |
| `--neon-magenta` | `#ff0055` | Secondary magenta glow color for right wing and tail |
| `--neon-cyan-glow` | `rgba(0, 243, 255, 0.35)` | Ambient glowing shadow for crane body |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for stage |
| `--crane-speed` | `1.2s` | Keyframe duration for 3D wing flapping and flight bobbing |
| `--crane-ease` | `ease-in-out` | Easing function for natural flight aerodynamics |

## 🛠️ How It Works

1. **Pure CSS 3D Wing Flapping:** `@keyframes flapWingLeft` and `flapWingRight` animate 3D rotational angles (`rotateY(-35deg) rotateZ(10deg)` $\rightarrow$ `rotateY(50deg) rotateZ(-15deg)`).
2. **Synchronized Body Bobbing:** `@keyframes craneBob` translates the crane assembly vertically (`translate3d(0, -16px, 0)`), while the ground shadow scales in tandem (`scale(0.65)`).
3. **GPU-Accelerated Performance:** Uses `perspective: 800px` on the viewport container with `will-change: transform` to ensure silky 60 FPS flight passes without layout reflows.
4. **Accessibility Built-In:** Includes explicit ARIA status semantics (`role="status"`, `aria-label="Loading, please wait"`), visually hidden screen-reader text (`.sr-only`), hides decorative 3D facets from screen readers (`aria-hidden="true"`), and gracefully halts animations when `@media (prefers-reduced-motion: reduce)` is enabled.
