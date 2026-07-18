# Elastic Inertia Expand Utility (`ease-elastic-expand`)

A physics-modeled micro-interaction utility component that introduces realistic material tension, physical dampening, and rubberized spring elasticity entirely via native layout keyframe distributions.

## Architectural Mechanics

- **Non-Linear Spring Simulation:** Rather than utilizing predictable geometric tracking paths, the component passes elements through an expressive multi-stage `scale3d()` matrix. It scales wide along primary vectors while compression limits force opposite cross-axes to react synchronously to balance volume weight.
- **Hardware Layer Isolation:** Operates 100% on performance-first composition pathways (`will-change: transform`). This completely bypasses main-thread script interpretation loops or document browser repaint cycles.
- **Universal Utility Composability:** Built as an abstract layout-agnostic framework utility class. It can be instantly drops onto CTA actions, profile avatars, interface dashboard nodes, alert tags, or modal viewport containers flawlessly.

## Manifest File Map
- `demo.html`: Standalone self-contained interface sandbox preview setup.
- `style.css`: Configured production sheet rule sets.

## By
[Pari Dubey](https://github.com/pari-dubey1)