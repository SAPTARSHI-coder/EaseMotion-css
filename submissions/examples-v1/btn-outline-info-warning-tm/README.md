# Outline Button — Info and Warning Variants

## What does this do?
Adds `.ease-btn-outline-info` and `.ease-btn-outline-warning` to
the button component, mirroring the existing `.ease-btn-outline`
pattern for the info and warning color tokens.

## How is it used?
Apply the variant alongside `.ease-btn`:

    <button class="ease-btn ease-btn-outline-info">Info</button>
    <button class="ease-btn ease-btn-outline-warning">Warning</button>

## Why is it useful?
The framework defines `--ease-color-info` and `--ease-color-warning`
design tokens and exposes filled `.ease-btn-info` / `.ease-btn-warning`
button styles, but the outline variant for these two colors was
missing. This submission adds the outline variants so designers
can choose any of the six colors (primary, success, danger, info,
warning, ghost) in either filled or outline style.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the new
`.ease-btn-outline-info` and `.ease-btn-outline-warning` classes
in action.

## Contribution Notes
- Pure CSS-only addition
- No JavaScript required
- Maintains the existing outline button hover behavior
