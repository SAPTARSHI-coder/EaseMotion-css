## What

An interactive gallery showcasing 11 CSS filter functions — `grayscale`, `sepia`, `blur`, `brightness`, `contrast`, `hue-rotate`, `saturate`, `invert`, `opacity`, and `drop-shadow` — plus three combined filter presets. A sample image area updates in real-time when filter buttons are clicked, and a reference grid shows each filter applied to a gradient swatch.

## How

Buttons with `data-filter` attributes map to CSS filter strings in a JavaScript object. Clicking a button applies `filter` directly to the `.image-frame` element via `style.filter`. The active button gets a visual highlight. The reference grid uses inline `style="filter: ..."` on each swatch for a static catalog. Combined filters (`grayscale-blur`, `sepia-contrast`, `hue-saturate`) demonstrate stacking multiple functions in one `filter` property.

## Why

CSS filters provide powerful image processing effects without requiring JavaScript libraries or server-side processing. Understanding each filter function and their combined behavior enables developers to create visual effects, image editing tools, hover states, and accessibility features (like desaturating for distraction-free reading) entirely in the browser. This interactive format makes experimentation immediate and intuitive.
