# ease-fade-in-left — Fade In While Sliding from Right

Enter animation: element fades in while sliding from the right to its natural position. Enter counterpart to `ease-fade-out-right`.

## Classes

| Class | Distance | Description |
|-------|----------|-------------|
| `.ease-fade-in-left` | 32px | Default entry from right |
| `+ .ease-fade-in-left-sm` | 16px | Subtle entry |
| `+ .ease-fade-in-left-lg` | 64px | Dramatic entry |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-fade-in-left-distance` | `32px` | Start offset from right |
| `--ease-fade-in-left-duration` | `--ease-speed-medium` | Duration |
| `--ease-fade-in-left-easing` | `--ease-ease` | Timing function |

## Usage

```html
<div class="ease-fade-in-left">Slides in from right</div>

<!-- Stagger -->
<div class="ease-fade-in-left" style="animation-delay: 0s">Item 1</div>
<div class="ease-fade-in-left" style="animation-delay: 0.1s">Item 2</div>

<!-- Custom -->
<div class="ease-fade-in-left" style="--ease-fade-in-left-distance: 80px;">
  Slides in from further right
</div>
```

Closes #11828
