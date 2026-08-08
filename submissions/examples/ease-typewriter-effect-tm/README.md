# Add CSS Typewriter Effect for Web Layouts

**Issue:** #61251
**Category:** CSS Animation Component
**Tech Stack:** Pure HTML + CSS (zero JavaScript)

---

## Overview

A pure CSS typewriter animation using steps() timing function to reveal text character by character. Built entirely in CSS with no JavaScript,
using CSS custom properties for theming and keyframe animations for motion.
Designed to integrate seamlessly with the EaseMotion CSS design system.

## Design tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--typewriter-effect-duration-base` | 380ms | Default animation timing |
| `--typewriter-effect-easing-spring` | cubic-bezier(0.34,1.56,0.64,1) | Spring-like overshoot |
| `--typewriter-effect-easing-smooth` | cubic-bezier(0.22,1,0.36,1) | Smooth ease-out |
| `--typewriter-effect-primary` | #f97316 | Brand accent color |
| `--typewriter-effect-secondary` | #6366f1 | Secondary accent |
| `--typewriter-effect-radius-md` | 10px | Border radius |

## Features

- Fully responsive layout that adapts to any container width
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Customizable via CSS custom properties
- Zero JavaScript — pure CSS animation

## Files

```
ease-typewriter-effect-tm/
  demo.html   — Interactive showcase
  style.css   — Component styles and animations
  README.md   — This documentation
```

## Contributing

See [CONTRIBUTING.md](https://github.com/SAPTARSHI-coder/EaseMotion-css/blob/main/CONTRIBUTING.md)
for submission guidelines and coding standards.
