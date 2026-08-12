# ease-badge-pop

Badge/tag that pops in with a slight overshoot, spring-like scale animation.

## Usage

```html
<span class="ease-badge">New</span>
```

## Notes

- The overshoot comes from the `cubic-bezier(0.34, 1.56, 0.64, 1)` easing curve, which briefly exceeds `scale(1)` before settling.
- Runs automatically on mount/render — no trigger needed.

## Browser support

All modern browsers.