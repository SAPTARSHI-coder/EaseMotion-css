# Css Ligatures: Font Variant Ligatures And Font Feature Settings

Demonstrates CSS typography ligatures using font-variant-ligatures, font-feature-settings, font-variant-numeric, and related properties to control how characters combine in OpenType fonts.

## Features

- Demonstrates **font-variant-ligatures** CSS property with multiple practical variants
- Uses EaseMotion design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`)
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Multiple size/style variants for real-world usage

## Usage

Apply the utility class to any element:

```html
<div class="no-ligatures">Content</div>
```

## Why is it useful?

The **font-variant-ligatures** CSS property is part of the modern CSS specification and enables
fine-grained control over css-ligatures. It integrates seamlessly with EaseMotion's design token
system, making it easy to maintain consistent spacing, colors, and typography across your project.
