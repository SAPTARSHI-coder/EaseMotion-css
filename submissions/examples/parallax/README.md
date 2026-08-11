# ease-parallax

Scroll-driven parallax depth layers using `animation-timeline: scroll()`. Zero JavaScript required.

## Usage

```html
<div class="ease-parallax ease-parallax-slow">Slow layer</div>
<div class="ease-parallax ease-parallax-fast">Fast layer</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-parallax-slow` | Moves -30px over full scroll |
| `ease-parallax-medium` | Moves -80px over full scroll |
| `ease-parallax-fast` | Moves -150px over full scroll |
| `ease-parallax-down` | Moves downward on scroll |
| `ease-parallax-left` | Slides left on scroll |
| `ease-parallax-right` | Slides right on scroll |
| `ease-parallax-fade` | Moves up + fades out on scroll |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-parallax-distance` | `-80px` | Distance to travel over full scroll |

## Browser Support

Requires `animation-timeline: scroll()` (Chrome 115+, Edge 115+). Falls back gracefully in unsupported browsers.

## Submission

- **Author:** sudha09-git
- **Issue:** #2256
- **Files:** `style.css`, `demo.html`
