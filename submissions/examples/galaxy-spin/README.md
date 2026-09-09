# Galaxy Spin Effect

**What is it?**
A rotating spiral galaxy with a glowing core, spiral arms, and orbiting star dots against deep space.

**How it works**
The `.galaxy` container rotates slowly via `galaxy-rotate`. The `.arm` uses a `conic-gradient` for spiral arm shapes with `arm-pulse`. Each `.star-dot` uses `star-orbit` keyframe with `--dist` and `--angle` custom properties for individual orbital paths.

**Why this approach**
Pure CSS orbital mechanics with `rotate()` transforms around the center. The conic-gradient arms and pulsing core create a convincing galaxy without canvas.
