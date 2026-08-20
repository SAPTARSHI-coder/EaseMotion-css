### Is your feature request related to a problem?
EaseMotion CSS is an "animation-first" framework. While we have many UI components, we lack a showcase component that demonstrates advanced CSS timing functions (`steps()`), precise unit measurements (`ch`), and pseudo-element layering for hardware simulation (CRT effects).

### Describe the solution you'd like
I propose adding a new folder named `retro-crt-terminal`. This component serves as both a cool UI element and an educational tool for advanced CSS. It includes:
1. A pure CSS typing effect synced perfectly to monospace fonts using `ch` units.
2. CRT Hardware overlays: Scanlines (repeating-gradients), Vignette (box-shadows), and Phosphor Flicker (randomized keyframes).
3. Layered text-shadows to simulate phosphor light bleed.

### Alternatives considered
Using a JS typewriter library (like Typed.js), but that defeats the "zero-dependency" and "pure CSS" philosophy of EaseMotion. This CSS-only approach is much more lightweight.

**Proposed Folder Name:** `retro-crt-terminal`
**Labels:** `enhancement`, `advanced-css`, `good first issue`, `animation`