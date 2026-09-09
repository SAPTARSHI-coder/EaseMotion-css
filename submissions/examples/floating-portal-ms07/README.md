# Floating Energy Portal

1. **What does this do?**
   A floating circular portal sits at the center of the screen, idling with a slow ambient pulse. On hover (or keyboard focus), it "opens": a swirling vortex disc spins up, three energy rings orbit at different speeds and radii, particles scattered around the portal get visually sucked inward toward the center while shrinking and fading, and an information panel slides up beneath it.

2. **How is it used?**
   Wrap everything in `.portal`, with `.portal-vortex` and `.portal-core` for the center disc/pulse, three `.portal-ring` elements (`.portal-ring-1/2/3`) for the orbiting energy bands, and any number of `.portal-particle` elements — each given its own starting offset and timing via inline custom properties (`--px`, `--py`, `--pdelay`, `--psize`). Toggling the `.portal-open` class (done via JS on hover/focus/click in this demo) triggers every animation at once. A `.portal-panel` sibling can be shown with `.portal-panel-open` for the emerging info panel.

   ```html
   <div class="portal">
     <div class="portal-ring portal-ring-1"></div>
     <span class="portal-particle" style="--px:100px; --py:-20px; --pdelay:0.2s; --psize:3px;"></span>
     <div class="portal-vortex"></div>
     <div class="portal-core"></div>
   </div>
   <!-- add/remove `portal-open` via JS on hover, focus, or click -->
   ```

3. **Why is this useful?**
   This is a showcase-grade interactive centerpiece — the kind of "wow" element a landing page or product launch page might build a whole hero section around — while staying within EaseMotion CSS's pure-CSS-animation philosophy (the only JS here just toggles one class). It demonstrates four distinct, independently named animation techniques that other contributors could reuse individually: a `conic-gradient` vortex spin, multi-ring orbital motion at staggered speeds, a breathing radial-gradient pulse, and per-element custom-property-driven "attraction" motion for particles.

### Notes for the maintainer
- The four animations map directly to the four requested in the issue: `portal-vortex-spin` (vortex rotation), `portal-particle-suck` (particle attraction), `portal-core-pulse` (portal pulse), and `portal-ring-orbit-1/2/3` (energy ring orbit).
- Particle starting positions (`--px`/`--py`) were generated from real angle/radius math (12 particles spread around the portal at varying radii, not randomly scattered by eye), so they read as a believable orbiting debris field rather than arbitrary dots.
- The vortex animation runs continuously but stays paused (`animation-play-state: paused`) and invisible until `.portal-open` is applied, so there's no wasted CPU work while idle.
- Click is also wired up (toggling open/closed) so the effect works on touch devices that have no hover state.
- `prefers-reduced-motion: reduce` keeps the open/closed state changes (which convey real state) but removes all continuous spin/orbit/pulse motion and the particle-suck animation, since those are purely decorative.
- Tested in Chrome, Firefox, and Edge.