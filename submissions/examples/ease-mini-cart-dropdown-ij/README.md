# Mini Cart Dropdown — Slide-Down Items

**Component:** mini-cart-dropdown  
**Issue:** [#36818](https://github.com/EaseMotion-css/EaseMotion-css/issues/36818)

A dark-themed mini cart card with a header badge and items that slide in sequentially on load. Each row shows an image, name, price, and quantity.

## CSS Variables

| Variable         | Default   | Description                    |
|------------------|-----------|--------------------------------|
| `--cart-bg`      | `#1a1a2e` | Cart card background           |
| `--item-bg`      | `#16213e` | Individual item row background |
| `--item-hover`   | `#1f2b4a` | Hover state for item rows      |
| `--slide-duration`| `0.3s`   | Duration of the slide-in anim  |

## Behaviour

- Items animate in from above with a fade, staggered by `--slide-order` (set inline).
- Hover highlights the row with `--item-hover`.
- The cart badge shows the item count.
- A separator line and total row sit below the item list.
