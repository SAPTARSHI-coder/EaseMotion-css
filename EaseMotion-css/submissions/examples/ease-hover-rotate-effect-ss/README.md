# Hover Rotate Effect - Issue #88147

## Abstract

This submission introduces the `.ease-hover-rotate` utility component to EaseMotion CSS. It provides a lightweight, GPU-accelerated micro-interaction that subtly rotates UI elements by 3 degrees on hover, paired with an elegant scale and color transition.

## CONTRIBUTING.md Compliance

1. **What does this do?**
   Implements a lightweight hover rotation interaction (`.ease-hover-rotate`) that smoothly rotates an element by a subtle 3 degrees using hardware-accelerated CSS transforms.

2. **How is it used?**
   Apply the `.ease-hover-rotate` class to cards, buttons, images, or any interactive UI elements requiring subtle dynamic feedback.

3. **Why is it useful?**
   Provides a composable, human-readable animation pattern without requiring custom CSS boilerplate or JavaScript event handlers.

## Transformation Architecture

- **Transform Hardware Acceleration**: Utilizes CSS 2D transforms (`rotate(3deg) scale(1.02)`) rendered via `cubic-bezier(0.16, 1, 0.3, 1)` easing for smooth, spring-like motion.
- **Accessibility & Focus States**: Includes `:focus-visible` outline for keyboard navigation accessibility and `@media (forced-colors: active)` support for Windows High Contrast mode.

## Custom CSS Properties

The component is fully customizable via local CSS custom properties:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--rot-bg` | `#030712` | Main background color |
| `--rot-surface` | `#1e293b` | Container stage surface background |
| `--rot-surface-hover` | `#334155` | Card surface background on hover |
| `--rot-border` | `rgba(255, 255, 255, 0.1)` | Subtle border color |
| `--rot-text` | `#f8fafc` | Primary text color |
| `--rot-muted` | `#94a3b8` | Muted secondary text color |
| `--rot-accent` | `#38bdf8` | Accent highlighting color on hover/focus |
