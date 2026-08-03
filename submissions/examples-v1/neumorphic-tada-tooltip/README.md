# Neumorphic Tada-Click Tooltip (Pure CSS)

An interactive, responsive, and accessible tooltip component styled specifically for Neumorphic Soft UI design guidelines. Built with 100% pure CSS animation timelines and state tracking without relying on heavy JavaScript runtimes.

## Features
- **Zero-JS Core Logic:** Uses the hidden checkbox hack variant to track toggled states cleanly via CSS.
- **Tada Animation Elasticity:** Implements customized hardware-accelerated transformation keyframes.
- **Configurable Architecture:** Exposes high-level motion and structural tokens through native CSS variables (`:root`).
- **A11y Considerations:** Keyboard accessible via focus tracking fallback states (`:focus-within`) alongside semantic element layouts.

## Customization Parameters
Tweak variables inside `style.css` to fit your design system:
- `--anim-duration`: Changes the speed of the tada shake.
- `--tada-scale-mid`: Changes how high the tooltip scales out dynamically during its bounce pattern.
- `--tada-rotate-angle`: Customizes the shake intensity.