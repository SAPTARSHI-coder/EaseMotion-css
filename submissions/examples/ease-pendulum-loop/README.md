# Hypnotic Pendulum Loop (`ease-pendulum-loop`)

A performance-first rhythmic typography/icon loop component that simulates an organic, gravity-decelerated physical pendulum motion swinging endlessly from a locked overhead anchor axis.

## Core Architectural Layout

- **Top Axis Anchor Constraint:** Overrides default center coordinate scaling bounds by deploying an explicit `transform-origin: top center` directive, perfectly modeling an item hanging from a real structural thread.
- **Variable Interpolation:** Employs CSS custom properties (`--pendulum-speed`, `--pendulum-angle`) to smoothly coordinate speed variations (`-fast`, `-slow`) and directional amplitude width steps (`-narrow`, `-wide`) without code bloating.
- **Reduced Motion Support Matrix:** Seamlessly integrates a native `@media (prefers-reduced-motion: reduce)` override layout that gently cushions the translation angles down to `4deg` to safeguard accessible screen reading conditions.

## Project Workspace Manifest
- `demo.html`: Independent, self-contained visual playground staging panel.
- `style.css`: Configured framework module utility rule sheets.

## By
[Pari Dubey](https://github.com/pari-dubey1)