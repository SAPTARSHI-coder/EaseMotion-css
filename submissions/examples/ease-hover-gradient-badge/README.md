# Hover Gradient Badge (Minimal)

## Abstract
The Hover Gradient Badge component provides a sleek, high-performance UI element featuring an interactive ambient gradient border flow upon user hover. Rather than relying on heavy box-shadow calculations or canvas animations, the component achieves its dynamic border aesthetic by utilizing lightweight CSS layering and property interpolation.

## Background Position Interpolation
The continuous gradient animation is driven by a 200% width multi-stop linear gradient defined on the `.ease-badge-glow` layer (`background-size: 200% 100%`). 

During the hover state, the keyframe animation `ease-gradient-flow` interpolates the `background-position` property from `100% 0` to `-100% 0` over a 2-second infinite loop. This horizontal translation across the extended background canvas delivers a smooth, seamless, and performant color-flow effect exclusively when active.

## Z-Index Compositing
The luminous border effect is achieved without relying on traditional CSS `border` properties. Instead, the architectural design leverages spatial padding and z-index compositing:

1. **Outer Container (`.ease-gradient-badge`)**: Functions as the positioning context (`position: relative`) with `1px` padding and `overflow: hidden` to encapsulate internal layers within a fully rounded border radius (`9999px`).
2. **Glow Layer (`.ease-badge-glow`)**: Positioned absolutely (`position: absolute; inset: 0`) at `z-index: 1`, filling the entire boundary of the container.
3. **Inner Core (`.ease-badge-content`)**: Positioned relatively (`position: relative`) at `z-index: 2` with a solid background (`#0f172a`, transitioning to `#020617` on hover) and `9999px` border-radius.

Because `.ease-badge-content` sits directly above `.ease-badge-glow` with a `1px` offset created by the outer container's padding, only a precise 1-pixel perimeter of `.ease-badge-glow` remains visible, creating the illusion of an animated gradient border.
