# Neumorphic Zoom-Out Tooltip

A pure CSS tooltip component with a smooth **zoom-out** entrance animation, styled to match **neumorphic soft** interface aesthetics. No JavaScript required.

Resolves #46249.

## Preview

Hovering (or focusing via keyboard) the trigger button reveals a soft, embossed tooltip bubble that starts scaled up (1.6x) and shrinks down to its normal size while fading in — giving a "zooming out into focus" effect.

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="ease-tooltip-neu">
  <button class="ease-tooltip-neu__trigger" aria-describedby="tooltip-zoomout-1">
    Hover me
  </button>
  <span class="ease-tooltip-neu__bubble" role="tooltip" id="tooltip-zoomout-1">
    This is a neumorphic zoom-out tooltip
  </span>
</div>
```

- `.ease-tooltip-neu` — wrapping container (required, provides positioning context)
- `.ease-tooltip-neu__trigger` — the hover/focus target (button, link, icon, etc.)
- `.ease-tooltip-neu__bubble` — the tooltip content itself

## Custom Properties

| Variable                     | Default   | Description                                  |
|-------------------------------|-----------|-----------------------------------------------|
| `--ease-tooltip-bg`           | `#e0e5ec` | Background color of trigger and bubble        |
| `--ease-tooltip-color`        | `#3a3a3a` | Text color                                    |
| `--ease-tooltip-radius`       | `12px`    | Corner radius                                 |
| `--ease-tooltip-duration`     | `400ms`   | Transition duration for the zoom-out effect   |
| `--ease-tooltip-scale-start`  | `1.6`     | Starting scale factor                         |
| `--ease-tooltip-offset`       | `10px`    | Gap between trigger and bubble                |

### Example override

```html
<div class="ease-tooltip-neu" style="--ease-tooltip-scale-start: 2; --ease-tooltip-duration: 600ms;">
  ...
</div>
```

## Accessibility

- Triggered via both `:hover` **and** `:focus-within`, so keyboard users see it too.
- `role="tooltip"` on the bubble and `aria-describedby` on the trigger link them for assistive tech.
- Uses `opacity` + `visibility` (not `display`) so the transition animates and the element is non-interactive (`pointer-events: none`) when hidden.

## Browser Support

Works in all modern browsers supporting CSS custom properties, `:focus-within`, and transitions. No JS dependency.

## Files

- `index.html` — usage demo
- `style.css` — component styles
- `README.md` — this file