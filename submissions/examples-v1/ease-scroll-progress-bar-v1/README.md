# ease-scroll-progress-bar

Submission for Issue #51334

## What this adds

A fixed reading progress bar that fills as the user scrolls
down the page. Uses native CSS scroll-driven animations via
`animation-timeline: scroll()` — zero JavaScript required.

## HTML Structure

```html
<!-- Place anywhere in <body>, before sticky nav for best results -->
<div class="ease-scroll-progress-bar"
     role="progressbar"
     aria-label="Reading progress"
     aria-valuemin="0"
     aria-valuemax="100">
</div>
```

## How It Works

```css
.ease-scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #4ade80;
  transform-origin: left;
  animation: ease-scroll-grow linear both;
  animation-timeline: scroll(root block);
}

@keyframes ease-scroll-grow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
```

## Classes

### Position
| Class | Description |
|---|---|
| `ease-scroll-progress-bar` | Fixed top (default) |
| `ease-scroll-progress-bar--bottom` | Fixed bottom |
| `ease-scroll-progress-bar--pill` | Rounded + floating |

### Height
| Class | Height |
|---|---|
| `--thin` | 2px |
| `--medium` | 4px (default) |
| `--thick` | 6px |
| `--xl` | 10px |

### Color
`--green` (default), `--blue`, `--purple`, `--pink`, `--orange`, `--red`, `--white`

### Gradients
| Class | Colors |
|---|---|
| `--gradient` | Green → Cyan |
| `--gradient-purple` | Purple → Pink |
| `--gradient-sunset` | Orange → Red |
| `--gradient-rainbow` | Full spectrum |

### Effects
| Class | Description |
|---|---|
| `--glow` | Box-shadow glow |
| `--track` | Background rail via ::before |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bar-height` | 4px | Bar thickness |
| `--bar-color` | #4ade80 | Fill color |
| `--bar-z` | 9999 | z-index |
| `--bar-radius` | 0px | Border radius |

## Browser Support

`animation-timeline: scroll()` — Chrome 115+, Edge 115+, Firefox 110+.
Degrades gracefully in unsupported browsers (static full-width bar).

## Accessibility

- `role="progressbar"` + `aria-label="Reading progress"`
- `prefers-reduced-motion`: animation disabled, bar shown at
  full width with reduced opacity — no scroll-linked motion

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
