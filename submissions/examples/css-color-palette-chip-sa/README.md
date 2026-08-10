# FEATURE] CSS Color Palette Chip

> Submission for issue [#68262](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/68262) — [FEATURE] CSS Color Palette Chip

## Overview
This submission adds a **FEATURE] CSS Color Palette Chip** CSS component demo to EaseMotion CSS. It is a
self-contained, dependency-free HTML + CSS implementation placed under
`submissions/examples/` per the contribution guidelines.

## Files
- `demo.html` — semantic markup demonstrating the component in multiple states.
- `style.css` — raw component CSS using custom properties, transitions, and a
  GPU-friendly keyframe sheen. No `ease-` prefix is applied (the maintainer
  standardizes naming during integration).
- `README.md` — this document.

## Behavior
- The element fades and lifts into view via an opacity + transform transition.
- A subtle gradient sheen sweeps across the surface on hover.
- Hover also lifts the element slightly and adds a soft shadow.
- All motion is disabled under `prefers-reduced-motion: reduce` for accessibility.

## Customization
The component exposes CSS custom properties:
- `--em-feature-css-color-palette-chip-color` — primary text/accent color
- `--em-feature-css-color-palette-chip-bg` — background tint
- `--em-feature-css-color-palette-chip-speed` — entrance transition duration
- `--em-feature-css-color-palette-chip-ease` — easing curve

## How to run
Open `demo.html` in any modern browser. No build step required.

## Notes
This is a standard track (HTML/CSS) submission targeting a general feature
request. Per CONTRIBUTING.md, it lives under `submissions/examples/` and the
maintainer will standardize class naming to the `ease-*` convention before
integrating into `components/` or `core/`.
