# ripple-press-ak

A pure CSS ripple press animation for buttons — no JavaScript required.

## What it does

Adds a smooth radial ripple that expands from the centre of the button on `:active`, combined with a subtle press-down scale and hover lift. Works on both `<button>` and `<a>` elements.

## How to use

```html
<!-- Default (primary colour) -->
<button class="ease-ripple-btn">Click me</button>

<!-- Colour variants -->
<button class="ease-ripple-btn ease-ripple-btn--secondary">Secondary</button>
<button class="ease-ripple-btn ease-ripple-btn--success">Success</button>
<button class="ease-ripple-btn ease-ripple-btn--danger">Danger</button>
<button class="ease-ripple-btn ease-ripple-btn--ghost">Ghost</button>

<!-- Size variants -->
<button class="ease-ripple-btn ease-ripple-btn--sm">Small</button>
<button class="ease-ripple-btn ease-ripple-btn--lg">Large</button>

<!-- Works on anchor tags too -->
<a href="#" class="ease-ripple-btn">Link button</a>
```

## How to review

1. Open `demo.html` directly in a browser (no server needed)
2. Click any button — you should see a white ripple spread from centre
3. Hover — button lifts with a purple glow shadow
4. Press and hold — button scales down slightly (press feedback)
5. Tab to any button and press Space/Enter — focus ring should be visible

## Classes

| Class | Description |
|---|---|
| `ease-ripple-btn` | Base class — required |
| `ease-ripple-btn--secondary` | Purple variant |
| `ease-ripple-btn--success` | Green variant |
| `ease-ripple-btn--danger` | Red variant |
| `ease-ripple-btn--ghost` | Outline/ghost variant |
| `ease-ripple-btn--sm` | Small size |
| `ease-ripple-btn--lg` | Large size |

## Implementation notes

- Ripple uses `::after` pseudo-element scaled via `:active` — zero JS
- Respects `prefers-reduced-motion` (transition durations collapse to near-zero via the framework's global media query in `easemotion.css`)
- Design tokens mirror EaseMotion's `--ease-color-*`, `--ease-speed-*`, and `--ease-ease` variables
- `overflow: hidden` on the button clips the ripple to the button's border-radius
