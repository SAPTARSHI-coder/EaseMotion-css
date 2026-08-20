# Sandbox Showcase: CSS Star Wars Crawl Loader

## Overview
A lightweight, pure CSS/HTML 3D perspective opening crawl loading component designed for sci-fi landing pages, game intro sequences, developer portfolio loaders, and dark-mode web applications. It combines CSS 3D perspective planes (`perspective: 400px`) with `@keyframes crawlSequence` $Z$-axis depth and $Y$-axis translation loops (`rotateX(25deg) translate3d(...)`), fade-to-black top dissolve masks, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive 3D Star Wars opening crawl loader.
* `style.css` — Scoped layout modifier specifying 3D perspective viewports, crawl translation keyframe passes, dissolve masks, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--crawl-yellow` | `#f59e0b` | Classic Star Wars yellow accent color for headings |
| `--neon-cyan` | `#00f3ff` | Primary cyan accent color for episode tags |
| `--crawl-yellow-glow` | `rgba(245, 158, 11, 0.35)` | Ambient glowing shadow for crawl headings |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for stage |
| `--crawl-speed` | `18s` | Keyframe duration for 3D perspective text crawl passes |
| `--crawl-ease` | `linear` | Linear timing function for continuous scrolling passes |

## 🛠️ How It Works

1. **3D Perspective Viewport:** The container applies `perspective: 400px` with `perspective-origin: 50% 100%` to establish a true 3D spatial field.
2. **GPU-Accelerated 3D Crawl Translation:** `@keyframes crawlSequence` animates `transform: rotateX(25deg) translate3d(0, 100%, 0)` to `transform: rotateX(25deg) translate3d(0, -220%, -350px)` with `will-change: transform, opacity`.
3. **Dissolve Mask:** An absolute `.alm-crawl-fade-mask` applies a linear gradient to fade crawling text seamlessly into the background at the top of the viewport.
4. **Accessibility Built-In:** Includes explicit ARIA status semantics (`role="status"`, `aria-label="Star Wars style opening text crawl loading sequence"`), live region announcements (`aria-live="polite"`), visually hidden screen-reader text (`.sr-only`), and gracefully un-tilts text when `@media (prefers-reduced-motion: reduce)` is enabled.
