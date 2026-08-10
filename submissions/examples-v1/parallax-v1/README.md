# ease-parallax

Scroll-driven parallax depth effect using CSS `animation-timeline: scroll()`. Zero JavaScript required.

## Usage

```html
<div class="ease-parallax ease-parallax-slow">background layer</div>
<div class="ease-parallax ease-parallax-mid">mid layer</div>
<div class="ease-parallax">foreground layer</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-parallax` | Default depth (-80px) |
| `ease-parallax-slow` | Shallow depth (-40px) |
| `ease-parallax-mid` | Mid depth (-60px) |
| `ease-parallax-fast` | Deep depth (-120px) |
| `ease-parallax-down` | Moves downward on scroll |
| `ease-parallax-x` | Horizontal parallax |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-parallax-depth` | `-80px` | Vertical translate range |
| `--ease-parallax-x` | `-60px` | Horizontal translate range |

## Browser Support

Requires `animation-timeline: scroll()` (Chrome 115+, Edge 115+). Graceful fallback via `@supports` for unsupported browsers.

## Submission

- **Author:** sudha09-git
- **Issue:** #3884
- **Files:** `style.css`, `demo.html`
