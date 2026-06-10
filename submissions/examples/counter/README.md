# ease-counter

A pure CSS animated number count-up utility using `@property` and `counter-reset`. Zero JavaScript required.

## Usage

```html
<div class="ease-counter" style="--ease-counter-to: 100;"></div>
```

## Variants

| Class | Description |
|---|---|
| `ease-counter` | Default count-up animation |
| `ease-counter-fast` | Faster animation duration |
| `ease-counter-slow` | Slower animation duration |
| `ease-delay-100` to `ease-delay-500` | Staggered start delays |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-counter-to` | `100` | Target number to count up to |

## Browser Support

Requires `@property` support (Chrome 85+, Edge 85+). Falls back gracefully — number stays at 0 in unsupported browsers.

## Submission

- **Author:** sudha09-git
- **Issue:** #2247
- **Files:** `style.css`, `index.html`
