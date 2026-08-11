# CSS Glassmorphism Card

Frosted glass card component using `backdrop-filter` and CSS variables for EaseMotion CSS.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<!-- Place cards over a colorful background for full effect -->
<div style="background: linear-gradient(135deg, #6c63ff, #f5576c); padding: 2rem;">
  <div class="ease-glass">
    <div class="ease-glass__icon">&#127776;</div>
    <div class="ease-glass__title">Card Title</div>
    <div class="ease-glass__body">Card body content goes here.</div>
    <div class="ease-glass__footer"><span class="ease-glass__tag">Tag</span></div>
  </div>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.ease-glass` | Standard glass card |
| `.ease-glass--dark` | Dark frosted variant |
| `.ease-glass--sm` | Compact small variant |
| `.ease-glass__icon` | Emoji or SVG icon |
| `.ease-glass__title` | Card heading |
| `.ease-glass__body` | Card content text |
| `.ease-glass__footer` | Card footer row |
| `.ease-glass__tag` | Small badge tag |

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-gl-blur` | `14px` | Blur intensity |
| `--ease-gl-bg` | `rgba(255,255,255,0.18)` | Card background |
| `--ease-gl-border` | `rgba(255,255,255,0.30)` | Card border |
| `--ease-gl-radius` | `18px` | Border radius |
| `--ease-gl-shadow` | box-shadow | Card shadow |
| `--ease-gl-transition` | `0.3s ease` | Hover animation speed |

## Browser Compatibility

`backdrop-filter` is supported in all modern browsers.
A graceful fallback uses `rgba(255,255,255,0.75)` for unsupported browsers via `@supports`.

Closes #67719
