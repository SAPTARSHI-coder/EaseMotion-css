# EaseMotion SCSS Core Refactor (#22894)

This submission addresses **Issue #22894** by modularizing the animation speeds, timing curves, and delay iterations using **SCSS Maps**. 

To strictly comply with the repository bot (which prevents modifying the `core/` or `scss/` root directories directly in PRs), the proposed refactor has been packaged entirely within this `submissions/` directory.

## What's Changed
- `scss/_variables.scss`: Replaced repetitive hardcoded variables with SCSS maps (`$ease-durations`, `$ease-delays`, `$ease-curves`) while using `map.get` to preserve backwards compatibility for existing mixins.
- `scss/_utilities.scss`: Introduced a new set of dynamic SCSS `@each` loops to automatically generate robust utility classes (e.g. `.ease-duration-500`, `.ease-delay-100`, `.ease-curve-bounce`).
- `scss/_index.scss`: Updated the forwarding pipeline to include the new dynamic utilities.

## Demo Verification
The `demo.html` successfully imports the compiled output (`style.css`), proving that the new dynamic utility classes generate exactly as expected.

## Instructions for Maintainer
Since this is a proposed architecture change for the framework itself:
1. Review the SCSS maps and dynamic loops inside `submissions/core-scss-refactor-22894/scss/`.
2. If approved, simply copy the contents of this folder into the root `/scss/` directory of the repository.
