# ease-draw

SVG path draw-on animation using `stroke-dasharray` and `stroke-dashoffset`. Zero JavaScript required.

## Usage

```html
<svg class="ease-draw" style="--ease-draw-length: 500;">
  <path d="M10 80 C 40 10, 160 10, 190 80" stroke="#6366f1" stroke-width="3"/>
</svg>
```

## Variants

| Class | Description |
|---|---|
| `ease-draw` | Default draw-on animation |
| `ease-draw-out` | Draw-off animation |
| `ease-draw-fast` | 800ms draw speed |
| `ease-draw-slow` | 4s draw speed |
| `ease-draw-linear` | Linear easing |
| `ease-draw-bounce` | Bounce easing |
| `ease-draw-loop` | Loops draw animation |
| `ease-delay-100` to `ease-delay-500` | Staggered start delays |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-draw-length` | `1000` | Total path length in px |

## Tips

Set `--ease-draw-length` to match your SVG path length. Use browser DevTools to get the exact value via `path.getTotalLength()`.

## Submission

- **Author:** sudha09-git
- **Issue:** #3869
- **Files:** `style.css`, `demo.html`
