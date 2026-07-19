# Native CSS Scroll Parallax Background (`ease-scroll-parallax-bg`)

An advanced, native animation-first background component engineered to produce an independent 3D depth illusion by tying background translations directly to native viewport scrollbars without using runtime JavaScript blocks.

## Technical Composition Breakdown

- **Next-Gen Scroll Timelines:** Leverages modern `animation-timeline: scroll(nearest)` structures to compute layout frame progressions directly through native compositor scroll updates.
- **Velocity Trajectory Decoupling:** Maps an asymmetric translational scale track (`translateY(0)` to `22%`) over an oversized background grid canvas (`130%` height). This forces the background to move at a slower structural pacing than the foreground, creating a clean parallax effect.
- **Compositor Engine Optimization:** Operates 100% on GPU compositor pathways, completely removing layout repaints and main-thread execution lag caused by traditional JS event handlers.
- **Reduced Motion Architecture:** Houses responsive `@media (prefers-reduced-motion: reduce)` overrides to safely drop translational paths for users with motion sensitivities.

## Workspace Tree Map
- `demo.html`: Live interactive sandbox containing full-screen section dividers to enable scrolling verification.
- `style.css`: Core modular layout stylesheet sheets.

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**