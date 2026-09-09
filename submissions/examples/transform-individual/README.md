# Transform Individual

## What it does

Demonstrates the CSS individual transform properties — `rotate`, `scale`, and `translate` — which were introduced to replace the monolithic `transform` shorthand. Each card shows one property with interactive range sliders and a toggle. A fourth card shows the legacy shorthand for comparison: toggling it must redeclare every transform at once, making composable animations harder.

## How to use it

Open `demo.html` in any modern browser. Toggle each checkbox to enable/disable that property. Drag the sliders to change the angle, factor, or pixel offset. Hover the "Shorthand" card to see a combined transform applied — notice that individual property toggles have no effect because the shorthand overrides them all.

## Why it fits EaseMotion CSS

EaseMotion CSS provides composable animation utilities. Understanding how individual transforms differ from the shorthand helps contributors write cleaner, more maintainable motion keyframes. This example makes that distinction tangible through direct manipulation, reinforcing the library's design goal of granular, non-destructive transform control.
