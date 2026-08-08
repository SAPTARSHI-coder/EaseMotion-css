# Add Neumorphic Soft-UI Utility for Web Layouts

**Issue:** #61029
**Category:** CSS Animation Component
**Tech Stack:** Pure HTML + CSS (zero JavaScript)

---

## Overview

A neumorphic soft-UI component using inset box shadows to create embossed/debossed surfaces. Built entirely in CSS using CSS custom properties
for theming and the checkbox-hack or sibling selectors for state management,
with no JavaScript required.

## Design tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--neu-soft-ui-bg` | #e0e5ec | Component background |
| `--neu-soft-ui-transition` | 200ms | State transition timing |
| `--neu-soft-ui-radius-lg` | 20px | Large border radius |
| `--neu-soft-ui-shadow-dark` | rgba(...) | Neumorphic dark shadow |

## Features

- Pure CSS state management (no JavaScript)
- Customizable via CSS custom properties
- Responsive layout that adapts to container width
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`

## Files

```
ease-neu-soft-ij/
  demo.html   — Interactive showcase
  style.css   — Component styles
  README.md   — This documentation
```

## Contributing

See [CONTRIBUTING.md](https://github.com/SAPTARSHI-coder/EaseMotion-css/blob/main/CONTRIBUTING.md)
for submission guidelines and coding standards.
