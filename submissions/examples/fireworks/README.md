# Fireworks Effect

**What is it?**
A fireworks display with three colorful bursts at different positions and timings against a night sky with a cityline silhouette.

**How it works**
Each `.firework` uses `burst-launch` for the initial pop. Its 12 `.particle` children fan out in 30-degree increments using `--angle` custom property and `rotate()` transform in the `burst-particle` keyframe, which launches them outward while fading and shrinking.

**Why this approach**
Pure CSS particles with angular distribution create realistic burst patterns. Staggered launch delays give sequential firework timing without JavaScript.
