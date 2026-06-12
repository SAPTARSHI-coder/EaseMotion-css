# Badge Color Variants

## What does this do?

Adds info, warning, and neutral color variants to the existing badge
component, alongside the existing primary, danger, and success variants.

## How is it used?

Add the new variant class to a `.ease-badge` element:

    <span class="ease-badge ease-badge-info">3</span>
    <span class="ease-badge ease-badge-warning">!</span>
    <span class="ease-badge ease-badge-neutral">12</span>

## Why is it useful?

The framework defines `--ease-color-info`, `--ease-color-warning`, and
`--ease-color-neutral-600` design tokens but the badge component did not
expose them as named classes. This submission adds the missing variants
so badges can communicate status without inline color overrides.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open demo.html directly in your browser to see the six badge color
variants side by side.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to ease-\* convention before merging
- The .em-badge-\* alias convention from the existing danger/success
  variants is mirrored here

## Variants

- .ease-badge (default, primary)
- .ease-badge-info
- .ease-badge-warning
- .ease-badge-neutral
- .ease-badge-danger (already in framework)
- .ease-badge-success (already in framework)
