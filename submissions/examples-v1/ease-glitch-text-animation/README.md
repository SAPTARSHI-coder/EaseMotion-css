# Ease Glitch Text Animation (#43109)

A smooth, high-fidelity RGB-splitting text glitch effect built with React, Tailwind CSS, and Framer Motion. This component provides an ease-in-out digitized shifting animation optimized for performance, with configuration options for speed and triggering behavior.

## Features

- **RGB Split Simulation**: Built using twin offset layout channel layers (`::before` & `::after`) for distinct digital chromatic aberration.
- **Performance Optimized**: Uses modern `clip-path: inset()` syntax for hardware-accelerated rendering.
- **Flexible Triggers**: Supports interactive `hover` states out of the box, as well as `infinite` loops for landing hero headers.
- **Zero Configuration Layout**: Scales cleanly with whatever text sizes, font families, or alignment rules you apply via Tailwind utility strings.

## Directory Structure

```text
ease-glitch-text-animation/
├── ease-glitch-text-animation.tsx   # Core React/Framer Motion component
├── style.css                        # Extracted CSS keyframes and parameters
├── index.ts                         # Package export registration mapping
├── demo.html                        # Self-contained browser test playground
└── README.md                        # Component documentation