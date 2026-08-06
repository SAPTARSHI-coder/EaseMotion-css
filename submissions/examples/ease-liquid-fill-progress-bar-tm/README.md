# Add CSS Liquid Fill Progress Bar for Web Layouts

**Issue:** #61246
**Category:** CSS Animation Component
**Tech Stack:** Pure HTML + CSS (zero JavaScript)

---

## Overview

A progress bar that mimics liquid filling up using animated SVG-like wave clip paths in pure CSS. Built entirely in CSS with no JavaScript,
using CSS custom properties for theming and keyframe animations for motion.
Designed to integrate seamlessly with the EaseMotion CSS design system.

## Design tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--liquid-fill-progress-duration-base` | 380ms | Default animation timing |
| `--liquid-fill-progress-easing-spring` | cubic-bezier(0.34,1.56,0.64,1) | Spring-like overshoot |
| `--liquid-fill-progress-easing-smooth` | cubic-bezier(0.22,1,0.36,1) | Smooth ease-out |
| `--liquid-fill-progress-primary` | #f97316 | Brand accent color |
| `--liquid-fill-progress-secondary` | #6366f1 | Secondary accent |
| `--liquid-fill-progress-radius-md` | 10px | Border radius |

## Features

- Fully responsive layout that adapts to any container width
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Customizable via CSS custom properties
- Zero JavaScript — pure CSS animation

## Files

```
ease-liquid-fill-progress-bar-tm/
  demo.html   — Interactive showcase
  style.css   — Component styles and animations
  README.md   — This documentation
```

## Contributing

See [CONTRIBUTING.md](https://github.com/SAPTARSHI-coder/EaseMotion-css/blob/main/CONTRIBUTING.md)
for submission guidelines and coding standards.
