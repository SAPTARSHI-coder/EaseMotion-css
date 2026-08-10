# ease-hover-reveal-card

Submission for Issue #51335

## What this adds

A reusable card component where a background image is visible
by default and a content overlay panel reveals on hover.
Four reveal styles: slide-up, fade, peek, and caption bar.
Zero JavaScript required.

## HTML Structure

```html
<div class="ease-hover-reveal-card ease-hover-reveal-card--md"
     style="background-image: url('img.jpg')"
     tabindex="0"
     role="img"
     aria-label="Card description">
  <div class="ease-hover-reveal-content">
    <span class="ease-hover-reveal-card__tag">Category</span>
    <h3 class="ease-hover-reveal-card__title">Card Title</h3>
    <p class="ease-hover-reveal-card__body">Description text here.</p>
    <a href="#" class="ease-hover-reveal-card__btn">View Project →</a>
  </div>
</div>
```

## Classes

### Reveal Variants
| Class | Effect |
|---|---|
| `ease-hover-reveal-card` | Slide-up overlay (default) |
| `--fade` | Fade-in overlay |
| `--peek` | Caption always visible, expands on hover |
| `--caption` | Gradient caption bar fades in |
| `--slide-down` | Overlay slides down from top |

### Size Presets
| Class | Height |
|---|---|
| `--sm` | 200px |
| `--md` | 280px |
| `--lg` | 360px |
| `--xl` | 440px |
| `--sq` | 1:1 aspect ratio |

### Overlay Colors
`--dark`, `--green`, `--blue`, `--purple`

### Speed
| Class | Duration |
|---|---|
| `--fast` | 0.2s |
| default | 0.4s |
| `--slow` | 0.7s |

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--reveal-duration` | 0.4s | Transition speed |
| `--reveal-ease` | cubic-bezier spring | Easing function |
| `--overlay-bg` | rgba(15,23,42,0.88) | Overlay color |
| `--card-radius` | 12px | Border radius |

## Accessibility

- `tabindex="0"` — keyboard focusable
- `role="img"` + `aria-label` for screen readers
- `prefers-reduced-motion`: all slides replaced with opacity fade

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
