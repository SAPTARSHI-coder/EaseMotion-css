# View Transition CSS Utility

CSS View Transitions API demonstrations including named element transitions (slide, fade, scale) and root page transitions. Uses EaseMotion timing tokens for smooth, consistent animation curves.

## Features

- Demonstrates view transition css utility using EaseMotion CSS design tokens
- Multiple variants showing different states and configurations
- Dark mode support using CSS `prefers-color-scheme` media query
- Reduced motion support using CSS `prefers-reduced-motion` media query
- Responsive design using EaseMotion spacing and typography tokens
- Realistic, interactive demo with hover states and transitions
- Uses `--ease-color-*`, `--ease-space-*`, `--ease-radius-*`, and `--ease-shadow-*` tokens
- CSS animations and transitions use `--ease-ease`, `--ease-speed-*` timing tokens

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Apply the utility classes to your HTML elements:

```html
<!-- Example from this submission -->
<div class="card">...</div>
```

## Why is it useful?

This submission demonstrates view transition css utility in a real-world context, integrated with the EaseMotion CSS design token system. By using `--ease-*` CSS custom properties for colors, spacing, and timing, the demo maintains visual consistency with the rest of the EaseMotion framework and provides a clear reference for contributors looking to implement similar patterns.

The utility classes are designed to be composable and follow the established naming conventions of the EaseMotion ecosystem.
