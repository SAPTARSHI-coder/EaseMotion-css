# Add Copy-to-Clipboard Button State for Web Layouts

**Issue:** #61032
**Category:** CSS Animation Component
**Tech Stack:** Pure HTML + CSS (zero JavaScript)

---

## Overview

A CSS-only copy button that transitions between default and copied states using CSS animations. Built entirely in CSS using CSS custom properties
for theming and the checkbox-hack or sibling selectors for state management,
with no JavaScript required.

## Design tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--copy-btn-state-bg` | #e0e5ec | Component background |
| `--copy-btn-state-transition` | 200ms | State transition timing |
| `--copy-btn-state-radius-lg` | 20px | Large border radius |
| `--copy-btn-state-shadow-dark` | rgba(...) | Neumorphic dark shadow |

## Features

- Pure CSS state management (no JavaScript)
- Customizable via CSS custom properties
- Responsive layout that adapts to container width
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`

## Files

```
ease-copy-btn-ij/
  demo.html   — Interactive showcase
  style.css   — Component styles
  README.md   — This documentation
```

## Contributing

See [CONTRIBUTING.md](https://github.com/SAPTARSHI-coder/EaseMotion-css/blob/main/CONTRIBUTING.md)
for submission guidelines and coding standards.
