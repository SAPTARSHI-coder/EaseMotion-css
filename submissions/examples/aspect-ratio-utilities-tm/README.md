# Aspect Ratio Utilities

Demonstrates CSS `aspect-ratio` property for maintaining consistent proportions on media containers. Includes 7 ratio presets and a photo grid demo.

## Features

- 7 aspect ratio presets: 1:1, 4:3, 16:9, 21:9, 3:2, 2:3, and auto
- Photo grid demo with mixed ratios
- Gradient backgrounds using framework color tokens
- Hover effects with smooth transitions
- Dark mode and reduced-motion safe

## Design Tokens Used

- `--ease-color-primary` / `--ease-color-secondary` / `--ease-color-info` — gradient colors
- `--ease-color-success` / `--ease-color-warning` / `--ease-color-danger` — additional gradient stops
- `--ease-radius-*` — rounded corners
- `--ease-shadow-sm` / `--ease-shadow-md` — card and box elevation
- `--ease-font-sans` / `--ease-font-mono` — fonts
- `--ease-space-*` — spacing scale

## Browser Support

`aspect-ratio` is supported in all modern browsers. For older browsers, fallback to the padding-hack or use `@supports (aspect-ratio: 1/1) { }`.
