# min-width-tm

## CSS CSS min-width boundary utilities

A comprehensive CSS utility class for **CSS min-width boundary utilities**. Part of the EaseMotion CSS framework — a curated collection of modern CSS utilities designed for rapid UI development.

## Usage

```html
<!-- Basic usage -->
<div class="tm-min-width-tm">
  <span>CSS min-width boundary utilities</span>
</div>

<!-- Variant 1: left-accent border -->
<div class="tm-min-width-tm tm-min-width-tm-variant-1">
  <span>Left accent variant</span>
</div>

<!-- Variant 2: outline glow -->
<div class="tm-min-width-tm tm-min-width-tm-variant-2">
  <span>Outline glow variant</span>
</div>

<!-- Variant 3: tall column -->
<div class="tm-min-width-tm tm-min-width-tm-variant-3">
  <span>Tall column variant</span>
</div>

<!-- Variant 4: shadow depth -->
<div class="tm-min-width-tm tm-min-width-tm-variant-4">
  <span>Shadow depth variant</span>
</div>
```

## CSS Custom Properties

This utility uses the EaseMotion CSS variable system:

| Variable | Default Value |
|----------|--------------|
| `--ease-bg` | Background surface color |
| `--ease-surface` | Card/surface background |
| `--ease-primary` | Primary brand color |
| `--ease-accent` | Accent highlight color |
| `--ease-text` | Text color |
| `--ease-border` | Border/divider color |

## Features

- **Responsive design**: Adapts from desktop to mobile breakpoints
- **Dark mode support**: Automatically adjusts to `prefers-color-scheme: dark`
- **Accessibility**: Includes `focus-visible` styles and reduced-motion support
- **Print styles**: Clean print output without decorative elements
- **High contrast mode**: Compatible with Windows High Contrast mode
- **Container queries**: Adapts to parent container size
- **Smooth animations**: Entrance animations with proper timing functions

## Accessibility

- Uses semantic HTML structure
- Includes focus-visible outlines for keyboard navigation
- Respects `prefers-reduced-motion` to disable animations for motion-sensitive users
- Compatible with forced-colors (Windows High Contrast) mode

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License — part of the EaseMotion CSS framework.
