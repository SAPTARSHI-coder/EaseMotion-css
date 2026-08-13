# Sandbox Showcase: Holographic Glitch Card

## Overview
A lightweight, pure CSS/HTML card component designed for web3 platforms, creative agency portfolios, gaming cockpits, and dark-mode web applications. It combines multi-color iridescence light sweeps (`background-position: -200% 0` $\rightarrow$ `200% 0`) with RGB-split chromatic aberration glitch animations (`text-shadow`), GPU-accelerated spatial transforms, and glassmorphism without JavaScript.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting an interactive holographic glitch card.
* `style.css` — Scoped layout modifier specifying iridescent gradient sweeps, glitch jitter keyframes, glow filters, and dark cyberpunk themes.

## ⚙️ CSS Custom Properties

Customize the component's visual theme easily by altering these root CSS variables in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--holo-cyan` | `#00f3ff` | Primary cyan accent color |
| `--holo-magenta` | `#ff0055` | Secondary magenta glow color for glitch split |
| `--holo-yellow` | `#f59e0b` | Tertiary yellow spectrum color |
| `--holo-cyan-glow` | `rgba(0, 243, 255, 0.4)` | Ambient glowing shadow for active card |
| `--cyber-bg` | `#030712` | Stage container background color |
| `--cyber-card-bg` | `rgba(15, 23, 42, 0.88)` | Glassmorphic surface color for card body |
| `--holo-speed` | `1.5s` | Keyframe duration for iridescent light sweeps |
| `--holo-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Decelerating cubic-bezier easing curve |

## 🛠️ How It Works

1. **Iridescent Rainbow Sheen:** A pseudo-element overlay (`::before`) applies an angled multi-stop gradient and sweeps `background-position` on `:hover` or `:focus-within`.
2. **Chromatic Aberration Glitch:** Hovering or focusing the card triggers `@keyframes glitchJitter` on `.alm-holo-title`, shifting text coordinates rapidly alongside offset RGB `text-shadow` colors.
3. **Glassmorphic Surface:** Places card content over a frosted glass panel (`backdrop-filter: blur(16px)`).
4. **Accessibility Built-In:** Supports native keyboard navigation (`tabindex="0"` focusability), explicit `:focus-visible` rings, `role="region"` semantics, and gracefully halts motion when `@media (prefers-reduced-motion: reduce)` is enabled.
