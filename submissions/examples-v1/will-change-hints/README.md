# will-change hints

Performance utility classes that apply `will-change` hints to transform-heavy animations. Helps the browser optimize GPU compositing for smoother animations.

## Usage

```html
<div class="ease-will-change-transform">Smooth transform</div>
<div class="ease-will-change-fade">Smooth fade + transform</div>
<div class="ease-will-change-hover">Hint only on hover</div>
<div class="ease-gpu">Force GPU layer</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-will-change-transform` | Hints transform changes |
| `ease-will-change-opacity` | Hints opacity changes |
| `ease-will-change-fade` | Hints opacity + transform |
| `ease-will-change-slide` | Hints transform for slides |
| `ease-will-change-scale` | Hints transform for scale |
| `ease-will-change-scroll` | Hints scroll-position |
| `ease-will-change-contents` | Hints contents changes |
| `ease-will-change-hover` | Applies hint only on hover |
| `ease-will-change-none` | Resets will-change to unset |
| `ease-gpu` | Forces GPU compositing layer |
| `ease-gpu-transform` | GPU layer + transform hint |
| `ease-gpu-opacity` | GPU layer + opacity hint |

## Performance Tips

- Use `ease-will-change-hover` instead of always-on hints to save memory
- Always pair with `ease-will-change-none` after animation ends if toggling via JS
- Avoid applying `will-change` to too many elements at once
- `ease-gpu` uses `translateZ(0)` + `backface-visibility: hidden` for compositing

## Submission

- **Author:** sudha09-git
- **Issue:** #5060
- **Files:** `style.css`, `demo.html`
