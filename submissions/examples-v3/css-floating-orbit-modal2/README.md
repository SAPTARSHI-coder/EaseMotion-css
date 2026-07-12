# CSS Floating Orbit Modal (Concentric Paths Variant V2)

An advanced version of the pure-CSS animated modal designed for analytical dashboard viewports. This variant features concentric intersecting orbital paths and custom keyframe offsets, mimicking complex background computations.

## Architectural Updates in V2
- **Concentric Intersecting System:** Uses inverse rotational math ($+360^\circ$ to $-360^\circ$) across independent, nested structural containers to create an advanced intersecting path illusion.
- **Enhanced Focus Trapping Support:** Features isolated z-index stacking layers to prevent animated background nodes from interfering with high-contrast text layers or interactive button fields.
- **Exposed Token Mechanics:** Includes explicit style hooks for `--ease-orbit-radius-inner` and `--ease-orbit-radius-outer` to modify path sizing arrays on the fly.