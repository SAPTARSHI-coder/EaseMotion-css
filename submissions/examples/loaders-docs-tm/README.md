# Loaders Documentation Header

## What does this do?
Proposes adding a file-level documentation comment block at the top of
`components/loaders.css` to match the convention used by every other
component file in the framework, and includes accessibility guidance
(`aria-busy`, `aria-label`) for the loader component.

## How is it used?
This is a documentation-only change. Maintainers will copy the proposed
header into `components/loaders.css`.

## Why is it useful?
`components/loaders.css` was the only component file lacking a top-of-
file documentation block. Adding it improves discoverability and
consistency. The accessibility guidance is important because loaders
are decorative by default and screen-reader users have no way to know
a region is loading unless the markup carries `aria-busy` and
`aria-label`.

## Tech Stack
- CSS (no frameworks, no JavaScript)
- Documentation comment block

## Preview
Open `style.css` in this folder to see the proposed header, or compare
it against `components/buttons.css` and `components/cards.css` in the
framework.

## Contribution Notes
- Pure documentation change
- Maintainer will paste the header into `components/loaders.css`
- No runtime CSS changes
- Accessibility note is the same guidance already documented in
  `docs/accessibility-guide.md` and the `prefers-reduced-motion` block
  at the bottom of the file
