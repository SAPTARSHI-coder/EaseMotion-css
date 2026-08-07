# Custom Animated Range Slider

## What does this do?
Restyles the native <input type="range"> with a brand-colored filled
track and an animated circular thumb that grows on hover/active,
consistent across WebKit and Firefox.

## How is it used?
Add .ease-slider to any range input. The filled-track percentage is
synced via a one-line inline oninput handler updating the background
gradient stop (shown in demo.html) — the maintainer may promote this to a
tiny optional JS snippet during integration.

## Why is it useful?
- Native range inputs are visually inconsistent and hard to theme
- Common in volume controls, price filters, and settings sliders
- Base styling requires zero JS
- Matches EaseMotion's zero-dependency, drop-in philosophy