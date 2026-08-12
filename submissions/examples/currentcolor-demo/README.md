## What

Five cards demonstrating how the `currentColor` keyword propagates the parent element's computed `color` value to SVG icons, borders, box-shadows, and pseudo-elements. A theme switcher lets the user cycle through five accent colors to see `currentColor` react instantly.

## How

Each card sets `color: var(--theme-color)`. SVGs use `stroke="currentColor"`, borders use `border: 2px solid currentColor`, shadows use `box-shadow: 0 4px 20px currentColor`, and pseudo-elements use `color: currentColor` and `background: currentColor`. The theme switcher button calls update the `--theme-color` custom property on `:root`, which cascades down to every card.

## Why

`currentColor` eliminates duplication when you want child elements to mirror the parent's text color. It is particularly useful for SVG icons (avoiding hardcoded fills/strokes), component borders that should match the label color, and shadow effects that stay consistent with the design token. A single custom property change updates the entire UI.
