# EaseMotion — `ease-ripple`

A composable click ripple effect for interactive elements. Add `.ease-ripple` to any button, card, or interactive element to get a circular wave animation on click/tap.

---

## Features

- **Composable** — add `.ease-ripple` to any element (buttons, cards, list items, etc.)
- **Pure CSS** — uses `::after` pseudo-element and `:active` state, no JavaScript
- **`currentColor` by default** — ripple colour automatically matches the element's text colour
- **Customisable** — override via `--ease-ripple-color` and `--ease-ripple-duration`
- **Reduced motion** — disables ripple when `prefers-reduced-motion: reduce`

---

## Usage

```html
<button class="ease-btn ease-ripple">Click me</button>

<div class="ease-card ease-ripple">
  Clickable card content
</div>

<li class="ease-ripple">Menu item</li>
```

### Custom colour

```html
<button class="ease-ripple" style="--ease-ripple-color: rgba(34,197,94,0.5)">
  Green ripple
</button>
```

### Custom duration

```html
<button class="ease-ripple" style="--ease-ripple-duration: 0.3s">
  Fast ripple
</button>
```

---

## CSS Variables

| Variable                  | Default        | Description                     |
|---------------------------|----------------|---------------------------------|
| `--ease-ripple-color`     | `currentColor` | Colour of the ripple circle     |
| `--ease-ripple-duration`  | `0.5s`         | Animation duration              |

---

## Why does it fit EaseMotion CSS?

Ripple click feedback is a widely adopted Material Design pattern that provides tactile feedback on interactive elements. EaseMotion already has hover effects (`ease-hover-glow`, `ease-hover-shimmer`, `ease-card-lift`) and press feedback (`ease-squish-button`), but was missing a composable click ripple — this fills that gap with a minimal, no-JS implementation.

---

## Files

1. **`style.css`** — component CSS with `.ease-ripple` utility and keyframes
2. **`demo.html`** — interactive demo with buttons, cards, and customisation examples
3. **`README.md`** — documentation and usage examples

---

## Notes

- The element must have `position: relative` (or equivalent) for `::after` to position correctly — `.ease-ripple` applies this automatically.
- `overflow: hidden` clips the ripple to the element's border box.
- The ripple always emanates from the centre of the element (`top: 50%; left: 50%`), not from the exact click point — this is a known trade-off for a pure CSS `:active` approach without JS pointer events.
