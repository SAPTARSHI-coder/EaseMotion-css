# Blur-to-Clear Reveal (`blur-reveal-tay`)

## Description
A reveal animation where an element starts slightly blurred, offset, and
transparent, then smoothly transitions into a sharp, fully visible state.
Creates a soft, modern entrance effect with zero JavaScript.

## Why it fits EaseMotion CSS
- **Human-readable**: one class, clear keyframe names.
- **Animation-first**: pure CSS, no JS dependency for the effect itself.
- **Composable**: works on text, cards, images, or any block-level element.
- **Configurable**: blur amount, offset, duration, and easing are exposed as
  CSS custom properties, and a `--ease-delay` var lets you stagger multiple
  elements without extra classes.
- **Accessible**: respects `prefers-reduced-motion`.

## Usage
```html
<h1 class="blur-reveal-tay">Welcome</h1>
<div class="blur-reveal-tay" style="--ease-delay: 0.2s;">Staggered card</div>
```

## Customization
| Variable | Default | Purpose |
|---|---|---|
| `--ease-blur-tay` | `10px` | Starting blur amount |
| `--ease-offset-tay` | `20px` | Starting vertical offset |
| `--ease-duration-tay` | `0.8s` | Animation duration |
| `--ease-timing-tay` | `ease-out` | Easing function |
| `--ease-delay` | `0s` | Per-element stagger delay |

## Files
- `demo.html`
- `style.css`
- `README.md`

## Checklist
- [x] Does not duplicate an existing EaseMotion CSS class
- [x] Naming will be standardized by the maintainer
- [x] Code submitted inside `submissions/` only