# Battery Charging Indicator

An animated battery icon that fills up and changes color from low (red) to full (green) as it charges.

## Preview
Open `demo.html` in your browser. A battery shape will continuously fill with liquid, shifting colors from red to orange, yellow, and finally green at 100%.

## Implementation
- The `.battery` container forms the main body with a border, and an `::after` pseudo-element draws the nub on top.
- The `.liquid` element inside is positioned at the bottom (via `align-items: flex-end` on the parent).
- A single `@keyframes` animation named `charge` simultaneously animates the `height` from 0% to 100% and interpolates the `background-color` through several stops to visually indicate battery health.
