# Button — Gradient and Soft Variants

## What does this do?
Adds two new button style variants:
- `.ease-btn-gradient` — gradient background using the primary
  and secondary colors
- `.ease-btn-soft` — low-opacity background with full-opacity
  text in the chosen color

## How is it used?
Apply the variant alongside `.ease-btn`:

    <button class="ease-btn ease-btn-gradient">Gradient</button>
    <button class="ease-btn ease-btn-soft">Soft</button>

## Why is it useful?
The existing button variants (primary, success, danger, info,
warning, outline, ghost, link) are all solid colors. Designers
often want gradient CTAs and low-emphasis "soft" buttons for
secondary actions.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` to see the new variants.

## Contribution Notes
- Pure CSS addition
- Soft variant uses `color-mix` for the tinted background with
  a fallback to `--ease-color-primary-alpha`
