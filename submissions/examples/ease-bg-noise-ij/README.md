# Component: Background Noise

This submission implements a noise texture overlay background for issue **#13615**.

## Description

An `.ease-bg-noise` class that applies a noise texture overlay via an `::after` pseudo-element using an inline SVG data URI with SVG `<feTurbulence>` filter. The opacity is customizable via `--ease-noise-opacity`. Includes interactive opacity slider and visibility toggle.

## Acceptance Criteria

- `.ease-bg-noise::after` pseudo-element with SVG noise data URI
- `--ease-noise-opacity` controls overlay transparency
- Noise uses SVG `<feTurbulence>` filter
- Interactive opacity slider and toggle button
- Pseudo-element does not interfere with pointer events

## Files

- `submissions/examples/ease-bg-noise-ij/demo.html`
- `submissions/examples/ease-bg-noise-ij/style.css`
- `submissions/examples/ease-bg-noise-ij/README.md`
