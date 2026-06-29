# Counter-Reset — EaseMotion-css Utility

## Overview

This submission adds CSS `counter-reset` property utilities to the EaseMotion-css framework.

## Usage

```html
<link rel="stylesheet" href="https://unpkg.com/easemotion-css@latest/submissions/examples/counter-reset-tm/style.css">
```

## Classes

- `.counter-reset-section` — Section counter
- `.counter-reset-page` — Page counter
- `.counter-reset-figure-1` — Figure counter
- `.counter-reset-item` — Item counter
- `.counter-reset-step` — Step counter

## Dark Mode

All classes automatically adapt to dark mode via `prefers-color-scheme: dark` media query.

## Reduced Motion

All animations respect `prefers-reduced-motion: reduce` by collapsing transitions.

## Framework Tokens

These utilities use EaseMotion-css design tokens:
- `--ease-primary`, `--ease-secondary`, `--ease-bg`, `--ease-surface`
- `--ease-text`, `--ease-muted`, `--ease-border`
- `--ease-space-*`, `--ease-radius`, `--ease-glow`
- `--ease-transition-fast`, `--ease-transition-base`

## Accessibility

All utilities maintain WCAG 2.1 AA contrast ratios in both light and dark modes.
