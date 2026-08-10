# Firefly Empty State

1. **What does this do?** A dark, neon-toned empty state with 5 glowing "firefly" particles drifting and pulsing independently across the card, combined with a staggered fade-in entrance sequence for the icon, heading, and subtext.
2. **How is it used?** Wrap the content in `.firefly-empty-state`, add several `.firefly` elements (each with a modifier class `.firefly-1` through `.firefly-5` controlling its start position and animation delay) alongside `.firefly-icon`, `.firefly-heading`, and `.firefly-subtext` for the entrance sequence.
   ```html
   <div class="firefly-empty-state">
     <span class="firefly firefly-1"></span>
     <span class="firefly firefly-2"></span>
     <div class="firefly-icon">🌙</div>
     <h2 class="firefly-heading">Nothing here yet</h2>
     <p class="firefly-subtext">This space is waiting to be filled.</p>
   </div>
   ```
3. **Why is it useful?** Empty states are common but usually static; this variant is built specifically for dark/neon-themed UIs, using independently-timed drifting, glowing particles (via combined `translate` drift and `opacity`/`scale` glow keyframes with staggered delays per firefly) layered with a sequenced content fade-in, creating genuine multi-part animation rather than a single effect. Pure CSS, no JavaScript required. Respects `prefers-reduced-motion` by freezing fireflies at a static dim opacity and showing content immediately for users who request reduced motion.
