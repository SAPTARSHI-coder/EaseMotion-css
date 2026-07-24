# Component: ease-flash-slider

This submission implements the `ease-flash-slider` component for GSSOC issue **#41501**.

## Description

A range slider component with flash animation effect. Features a glowing thumb and flash animation when interacting.

## Usage

```html
<div class="ease-flash-slider">
  <input type="range" class="slider-input" min="0" max="100" value="50">
  <div class="slider-track">
    <div class="slider-fill" style="width: 50%;"></div>
  </div>
  <div class="slider-thumb" style="left: 50%;">
    <div class="thumb-glow"></div>
    <div class="thumb-flash"></div>
  </div>
</div>
```

### JavaScript (for dynamic value updates)

```javascript
slider.addEventListener('input', () => {
  thumb.classList.add('is-flashing');
  setTimeout(() => thumb.classList.remove('is-flashing'), 300);
});
```

### Color Variants

```html
<div class="ease-flash-slider ease-flash-primary">Primary</div>
<div class="ease-flash-slider ease-flash-success">Success (Green)</div>
<div class="ease-flash-slider ease-flash-warning">Warning (Yellow)</div>
<div class="ease-flash-slider ease-flash-danger">Danger (Red)</div>
```

### Size Variants

```html
<div class="ease-flash-slider ease-flash-lg">Large</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--slider-color` | `#3b82f6` | Slider accent color |
| `--track-height` | `6px` | Track bar height |
| `--thumb-size` | `20px` | Thumb size |

## Acceptance Criteria

- ✅ Uses EaseMotion CSS variables
- ✅ Flash animation on interaction
- ✅ Glowing thumb effect
- ✅ Live demo in demo.html
- ✅ README.md with usage instructions
- ✅ Responsive design
- ✅ `prefers-reduced-motion` support
