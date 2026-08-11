# ---  # 14. `ease-toggle-switch`  ### 1️⃣ Title ```text [FEATURE] ease-toggle-switch

> Submission for issue [#66916](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/66916) — ---  # 14. `ease-toggle-switch`  ### 1️⃣ Title ```text [FEATURE] ease-toggle-switch

## Overview
This submission adds a **---  # 14. `ease-toggle-switch`  ### 1️⃣ Title ```text [FEATURE] ease-toggle-switch** CSS component demo to EaseMotion CSS. It is a
self-contained, dependency-free HTML + CSS implementation placed under
`submissions/examples/` per the contribution guidelines.

## Files
- `demo.html` — semantic markup demonstrating the component in multiple states.
- `style.css` — raw component CSS using custom properties, transitions, and keyframes.
  No `ease-` prefix is applied (the maintainer standardizes naming during integration).
- `README.md` — this document.

## Behavior
- The component animates in via GPU-friendly `transform`/`opacity` transitions.
- An interaction (hover/focus/toggle) triggers the secondary animation described below.
- All motion is disabled under `prefers-reduced-motion: reduce` for accessibility.

## Customization
Exposed CSS custom properties allow theming against any EaseMotion design token palette.

## How to run
Open `demo.html` in any modern browser. No build step required.

## Notes
Standard track (HTML/CSS) submission targeting a general feature request. Per
CONTRIBUTING.md it lives under `submissions/examples/`; the maintainer standardizes
class naming to the `ease-*` convention before integrating into `components/` or `core/`.
