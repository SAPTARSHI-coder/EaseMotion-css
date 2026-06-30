# Badges Dark Mode Support — Issue #8561

Adds dark mode (`@media prefers-color-scheme: dark`) and reduced motion (`@media prefers-reduced-motion: reduce`) support to the badges component.

## The Problem

`components/badges.css` (69 lines) has zero dark mode or reduced motion overrides. Every other major component (cards, chip, navbar, forms, footer, sidebar) includes both.

## Features Added

- **Dark mode** — adjusted pulse glow colors for dark backgrounds (uses lighter variants)
- **Outline variant** — `.ease-badge-outline` with transparent background and colored border; adapts to dark mode
- **Reduced motion** — pulse animation is disabled when `prefers-reduced-motion: reduce` is active

## Files

- `style.css` — badges with dark mode, reduced motion, outline variant
- `demo.html` — comparison table, color/size/pulse/outline demos
- `README.md` — this file
