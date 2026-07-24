# Tooltip — Light Variant and Small Size

## What does this do?
Adds a `.ease-tooltip-light` color variant (light background, dark
text) and a `.ease-tooltip-sm` size variant to the tooltip
component.

## How is it used?
Apply the modifier alongside `.ease-tooltip`:

    <span class="ease-tooltip ease-tooltip-light" data-tooltip="Light">
      Light tooltip
    </span>

    <span class="ease-tooltip ease-tooltip-sm" data-tooltip="Small">
      Small tooltip
    </span>

## Why is it useful?
The existing tooltip component supports four positions and two
width variants, but only one color (dark on light text). On light
backgrounds, the dark tooltip reads well, but on dark backgrounds
or near other dark elements, a light variant helps. The sm size
is useful for dense UI like data tables.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser and hover the demo buttons to
see the new variants.

## Contribution Notes
- Pure CSS addition
- Dark mode aware (the light variant inverts under
  `prefers-color-scheme: dark`)
