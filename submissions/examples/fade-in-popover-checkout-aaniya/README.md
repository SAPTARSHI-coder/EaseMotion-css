# fade-in-popover-checkout-aaniya

## What does this do?
A fade-in popover for e-commerce checkout layouts, built with the native HTML `popover` attribute and CSS Anchor Positioning — no JavaScript required. Clicking a trigger button (e.g. "Delivery info") reveals a small panel anchored to it, with a smooth fade + rise transition powered by `@starting-style`.

## How is it used?
```html
<button
  class="ease-fade-popover-trigger"
  popovertarget="ease-delivery-popover"
>
  Delivery info
</button>

<div id="ease-delivery-popover" class="ease-fade-popover" popover>
  <h4>Estimated delivery</h4>
  <p>Arrives in 3&ndash;5 business days.</p>
</div>
```
The trigger button needs `popovertarget` matching the panel's `id`. The panel needs the `popover` attribute and the `.ease-fade-popover` class.

### CSS custom properties
| Property | Purpose |
|---|---|
| `--ease-popover-bg` | Panel background color |
| `--ease-popover-border` | Panel border color |
| `--ease-popover-shadow` | Panel drop shadow |
| `--ease-popover-radius` | Corner radius (panel + trigger context) |
| `--ease-accent` | Accent color (badge text) |
| `--ease-transition-duration` | Fade/rise transition speed |

## Why is it useful?
Checkout flows are cluttered with details (delivery windows, return policy, stock status) that don't deserve permanent screen space but need to be one click away. Historically this meant a JS popover library to manage positioning and open/close state. Using the native `popover` attribute plus CSS Anchor Positioning (`anchor-name` / `position-anchor` / `anchor()`), the browser handles both the top-layer stacking and the anchor positioning natively. `@starting-style` provides the fade-in transition on open, which normally requires JS since `display: none` elements can't transition. A `@supports` fallback keeps the popover functional (just statically positioned) in browsers without Anchor Positioning support, and `prefers-reduced-motion` disables the transition for users who request it.
