# Aurora Background Animation (`ease-aurora`)

An intermediate, atmosphere-first background utility component that renders a living aurora borealis effect using layered radial gradients, GPU-composited motion, and slow hue rotation — all driven purely by CSS.

## Technical Composition Breakdown

- **Triple Radial Gradient Orbs:** Three independent gradient layers (`::before`, `::after`, and `.aurora-layer`) each carry two overlapping `radial-gradient` ellipses, producing five distinct color bands that blend via `mix-blend-mode: screen` to mimic the additive light behavior of real auroral emissions.
- **Independent Drift Axes:** Each orb follows its own `translate` + `scale` keyframe path on a different duration multiplier (`1×`, `1.25×`, `1.5×`), ensuring the three layers never align or repeat in a visible pattern across the full cycle.
- **Hue-Rotation Shift:** A separate `aurora-hue` animation slowly rotates the `filter: hue-rotate()` value on each orb layer at yet another independent speed, continuously cycling all five palette colors through the spectrum for the dreamy, ever-changing feel specified in the acceptance criteria.
- **8–12s Dreamy Cycle:** The base `--aurora-duration` token defaults to `10s`, cleanly within the accepted range, and governs all three orb timings proportionally — change one value, everything scales together.
- **Configurable Color System:** All five aurora band colors are exposed as CSS custom properties (`--aurora-1` through `--aurora-5`) on the element itself, enabling per-instance palette overrides with a single CSS block and no class conflicts.
- **Compositor Native Operations:** Every moving property is limited to `transform`, `opacity`, and `filter` — zero layout or paint work — wrapped in `will-change` declarations for guaranteed 60fps on modern hardware.
- **Opacity Breathe Layer:** A gentle `aurora-breathe` animation slowly pulses the overall opacity of the container on a `1.3×` cycle, preventing the background from ever feeling locked or frozen between gradient peaks.
- **Reduced Motion Architecture:** Houses `@media (prefers-reduced-motion: reduce)` safeguards that strip all animations from every layer simultaneously, leaving a static gradient backdrop that still looks intentional.

## Palette Variants (Demo)

| Name | Character |
|---|---|
| Default | Classic polar green-violet |
| Arctic | Cool teal and ice blue |
| Solar Flare | Warm orange, gold, magenta |
| Rosé | Pink, raspberry, deep violet |
| Moonlit | Soft indigo and periwinkle |

## Workspace Tree Map

```
submissions/examples/ease-aurora/
├── demo.html     # Live visual demo with hero section and palette swatches
├── style.css     # Modular animation utility stylesheet
└── README.md     # This file
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**