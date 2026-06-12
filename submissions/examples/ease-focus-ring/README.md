# ease-focus-ring

An animated, accessible focus ring utility for EaseMotion CSS. Replaces the browser default outline with a smooth, animated box-shadow ring that respects border-radius and works on any focusable element.

Resolves: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5727

## What it does

Provides a visually consistent, animated focus indicator that appears when a user navigates to an element via keyboard. Uses `box-shadow` (not `outline`) so the ring follows the element's `border-radius` for a polished, modern look.

## How to use it

```html
<!-- Default primary ring -->
<button class="ease-focus-ring">Click me</button>

<!-- Colour variants -->
<button class="ease-focus-ring ease-focus-ring-success">Success</button>
<button class="ease-focus-ring ease-focus-ring-danger">Danger</button>
<button class="ease-focus-ring ease-focus-ring-info">Info</button>

<!-- Thick ring for lower-vision accessibility -->
<button class="ease-focus-ring ease-focus-ring-thick">High Contrast</button>

<!-- Works on inputs -->
<input class="ease-focus-ring" type="text" placeholder="Focus me" />
```

## Classes

| Class                     | Role                                                    |
| ------------------------- | ------------------------------------------------------- |
| `ease-focus-ring`         | Smooth animated ring using the primary colour (indigo). |
| `ease-focus-ring-success` | Green ring variant.                                     |
| `ease-focus-ring-danger`  | Red ring variant.                                       |
| `ease-focus-ring-info`    | Blue ring variant.                                      |
| `ease-focus-ring-thick`   | Double-layer thick ring for higher visibility.          |

## Why it fits EaseMotion CSS

- Accessibility is a core web standard (WCAG 2.1 requires a visible focus indicator).
- `box-shadow` follows `border-radius`, which `outline` does not in older browsers.
- The animated appearance (ring expanding from the element) makes keyboard navigation feel intentional and polished.
- Colour variants allow the focus ring to match the semantic meaning of the element (form validation, danger buttons, etc.).
- Fully respects `prefers-reduced-motion` — the animation is skipped but the ring still appears.

## Browser support

Works in all modern browsers (Chrome, Firefox, Edge, Safari). Uses `:focus-visible` to avoid showing the ring on mouse click.
