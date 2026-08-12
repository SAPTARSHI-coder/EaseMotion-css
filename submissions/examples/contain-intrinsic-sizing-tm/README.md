# Contain Intrinsic Sizing: Progressive Loading And Layout Stability

Demonstrates CSS contain-intrinsic-size for progressive loading patterns, preventing layout shift in lazy-loaded content, skeleton screens, and dynamic components using EaseMotion spacing tokens.

## Features

- Demonstrates **contain-intrinsic-size** CSS property with multiple practical variants
- Uses EaseMotion design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`)
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Multiple size/style variants for real-world usage

## Usage

Apply the utility class to any element:

```html
<div class="skeleton-card">Content</div>
```

## Why is it useful?

The **contain-intrinsic-size** CSS property is part of the modern CSS specification and enables
fine-grained control over contain-intrinsic-sizing. It integrates seamlessly with EaseMotion's design token
system, making it easy to maintain consistent spacing, colors, and typography across your project.
