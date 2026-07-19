# Portal Spin Effect

**What is it?**
A swirling portal/vortex with multiple rotating rings, a glowing core, and floating particles orbiting around it.

**How it works**
Four `.ring` divs use `conic-gradient` borders with `ring-spin` rotation at different speeds and directions. The `.portal-core` pulses via `core-pulse-portal`. Particles float outward using `--ox`/`--oy` custom properties in `particle-float`.

**Why this approach**
Pure CSS ring rotation with conic-gradient borders creates a colorful portal effect. Reverse rotation on alternate rings adds depth without JavaScript.
