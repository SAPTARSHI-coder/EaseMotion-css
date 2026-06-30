# Badge — Pill and Square Shape Variants

## What does this do?

Adds two shape variants to the badge component:

- `.ease-badge-pill` — fully rounded, height 24px (was a deprecated
  size variant on the button component, now promoted to a shape
  for badges)
- `.ease-badge-square` — zero border-radius, useful for status pills
  in dense UIs

## How is it used?

Apply the variant alongside `.ease-badge`:

    <span class="ease-badge ease-badge-pill">Pill</span>
    <span class="ease-badge ease-badge-square">SQ</span>

## Why is it useful?

The default badge is fully rounded (`border-radius: 9999px`), which
works for counters but can be too round for text labels. Pill
shape is the same height but with explicit `9999px` radius and
slightly larger padding. Square is the opposite — sharp corners
for status indicators in tables or dense lists.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` in your browser to see both new variants.

## Contribution Notes

- Pure CSS addition
- Composes with existing color variants
