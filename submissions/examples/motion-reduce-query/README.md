# prefers-reduced-motion

## What does this do?
Demonstrates the `prefers-reduced-motion` media query with side-by-side comparison of animated vs static content.

## How is it used?
Wrap animation code in `@media (prefers-reduced-motion: no-preference)`:

    @media (prefers-reduced-motion: no-preference) {
      .el { animation: pulse 2s infinite; }
    }

## Why is it useful?
Ensures accessibility for users with vestibular motion disorders.

## Tech Stack
- HTML
- CSS (media query)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
