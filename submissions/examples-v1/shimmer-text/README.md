# ease-shimmer-text

Shimmer/gradient sweep animation for text elements. Creates a metallic sheen effect using `background-clip: text`.

## Usage

```html
<h1 class="ease-shimmer-text">Shimmer Heading</h1>
```

## Variants

| Class | Description |
|---|---|
| `ease-shimmer-text` | Default shimmer (3s cycle) |
| `ease-shimmer-text-fast` | Fast shimmer (1.5s) |
| `ease-shimmer-text-slow` | Slow shimmer (6s) |
| `ease-shimmer-text-primary` | Primary gradient colors |
| `ease-shimmer-text-success` | Success/green gradient |

## Notes

- Requires `-webkit-background-clip: text` support
- Works best on dark or solid backgrounds
- Respects `prefers-reduced-motion`

## Submission

- **Author:** SAPTARSHI-coder
- **Issue:** #4697
- **Files:** `style.css`, `demo.html`
