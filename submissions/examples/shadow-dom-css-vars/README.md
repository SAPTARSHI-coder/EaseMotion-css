# Shadow DOM CSS Custom Properties Demo

Demonstrates that CSS custom properties (`--*` variables) pierce through shadow DOM boundaries by inheritance, using simulated nested shadow DOM contexts with regular HTML containers.

## What this covers
- Visual demo of `--theme-color` inheriting through nested containers (simulating shadow DOM)
- How CSS custom properties naturally cross shadow boundaries (by spec)
- Table of what does/doesn't cross shadow DOM boundaries
- Workarounds using `:host` and `::part()` selectors for deeper customization

## Notes
- True shadow DOM requires JavaScript (`attachShadow`), which is not used here
- This demo uses nested `<div>` elements to simulate the scoped inheritance behavior
- CSS custom properties are unique in that they pierce shadow DOM — regular properties like `color` or `background` do not
