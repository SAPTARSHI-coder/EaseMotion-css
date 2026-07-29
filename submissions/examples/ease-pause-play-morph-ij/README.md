# Pause / Play Morph

A smooth SVG morphing button that transitions between a play triangle and pause bars.

## Features

- SVG path morphing between play and pause icons
- Multiple size variants: default, large, small
- Style variants: rounded, large icon, custom color
- Accessible with ARIA labels and keyboard support

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ppm-duration` | `0.35s` | Morph transition duration |
| `--ppm-icon-color` | `#6b7280` | Default icon color |
| `--ppm-active-color` | `#3b82f6` | Active/playing color |
| `--ppm-size` | `48px` | Button width/height |
| `--ppm-hover-color` | `#f3f4f6` | Hover background |

## Usage

```html
<button class="ppm-btn" aria-label="Play">
  <svg class="ppm-icon" viewBox="0 0 24 24" width="40" height="40">
    <path class="ppm-path" d="M8 5v14l11-7z"/>
  </svg>
</button>
```

## Browser Support

Works in all modern browsers supporting CSS custom properties and SVG path transitions.
