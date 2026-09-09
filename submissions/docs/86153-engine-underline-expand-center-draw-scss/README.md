# Underline Expand Center Draw SCSS Animation Mixin Pattern

Adds the Underline Expand Center Draw animation pattern.

Keyframe:

`ease-underline-expand-center-draw`

Utility class:

`ease-anim-underline-expand-center-draw`

The pattern is designed to be reusable from an SCSS animation mixin
architecture while exposing configurable duration, timing, color and
underline height through CSS custom properties.

Uses transform and opacity for compositor-friendly animation and includes
a `prefers-reduced-motion` override.

Closes #86153