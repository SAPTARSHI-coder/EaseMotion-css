# Color Mix Utilities

Demonstrates CSS `color-mix()` to generate tint and shade scales at runtime from EaseMotion CSS color tokens.

## Features

- 10-stop tint scale (primary + white, 0-100%)
- 10-stop shade scale (primary + black, 0-100%)
- Complementary color mixing
- Hover scale effects
- Dark mode and reduced-motion safe

## Design Tokens Used

- `--ease-color-primary` — base color for mixing
- `--ease-color-secondary` / `--ease-color-info` — mixing partners
- `--ease-radius-*` — rounded swatches
- `--ease-shadow-sm` / `--ease-shadow-md` — elevation
- `--ease-font-sans` / `--ease-font-mono` — fonts
- `--ease-space-*` — spacing

## Browser Support

Chrome 111+, Safari 16.2+, Firefox 113+.

## Usage

```css
.tint-50 { background: color-mix(in srgb, var(--ease-color-primary) 50%, white); }
.shade-30 { background: color-mix(in srgb, var(--ease-color-primary) 70%, black); }
```
