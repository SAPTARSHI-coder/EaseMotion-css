# Overscroll Behavior X Y: Scroll Boundary Behaviors

Demonstrates CSS overscroll-behavior for controlling scroll boundary actions in nested scrolling containers, preventing scroll-chaining and enabling pull-to-refresh effects using EaseMotion tokens.

## Features

- Demonstrates **overscroll-behavior** CSS property with multiple practical variants
- Uses EaseMotion design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`)
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Multiple size/style variants for real-world usage

## Usage

Apply the utility class to any element:

```html
<div class="overscroll-contain">Content</div>
```

## Why is it useful?

The **overscroll-behavior** CSS property is part of the modern CSS specification and enables
fine-grained control over overscroll-behavior-x-y. It integrates seamlessly with EaseMotion's design token
system, making it easy to maintain consistent spacing, colors, and typography across your project.
