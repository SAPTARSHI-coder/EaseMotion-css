# Holy Light Rays

1. What does this do? Light rays radiate outward from the center using `conic-gradient` with alternating opacity bands of warm white/yellow (`#fef9c3`), slowly rotating 360° over 8 seconds on a large pseudo-element (`inset: -50%`). A gold cross icon reinforces the divine/holy theme.

2. How is it used? Click "Consecrate" to add `.radiant` class to `.holy-rays`, which fades in (opacity transition) and starts `@keyframes rays-rotate` (8s linear infinite rotation). The conic-gradient has 36 ray segments alternating between the light color and transparent.

3. Why is it useful? Divine/holy light effects are common in fantasy game UIs for blessings, heal spells, and sacred interactions. The rotating conic-gradient rays create an ethereal, radiant atmosphere that clearly communicates "holy" status.
