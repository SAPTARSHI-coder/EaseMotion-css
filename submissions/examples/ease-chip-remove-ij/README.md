# Add Tag/Chip with Remove Button for Web Layouts

**Issue:** #60862
**Category:** CSS Animation Component
**Tech Stack:** Pure HTML + CSS (zero JavaScript)

---

## Overview

A chip/tag component with a pure CSS animated remove button that shows on hover using the checkbox hack. Built entirely in CSS using CSS custom properties
for theming and the checkbox-hack or sibling selectors for state management,
with no JavaScript required.

## Design tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--chip-remove-bg` | #e0e5ec | Component background |
| `--chip-remove-transition` | 200ms | State transition timing |
| `--chip-remove-radius-lg` | 20px | Large border radius |
| `--chip-remove-shadow-dark` | rgba(...) | Neumorphic dark shadow |

## Features

- Pure CSS state management (no JavaScript)
- Customizable via CSS custom properties
- Responsive layout that adapts to container width
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`

## Files

```
ease-chip-remove-ij/
  demo.html   — Interactive showcase
  style.css   — Component styles
  README.md   — This documentation
```

## Contributing

See [CONTRIBUTING.md](https://github.com/SAPTARSHI-coder/EaseMotion-css/blob/main/CONTRIBUTING.md)
for submission guidelines and coding standards.
