# Voice Search Indicator

1. **What does this do?**
   A CSS-only "listening" indicator: a microphone icon sits still at the center while three sound-wave rings expand outward and fade, staggered in sequence so they read as continuous waves rather than one ring pulsing in place — simulating a device actively listening for voice input.

2. **How is it used?**
   Wrap a `.voicesearch-mic` (containing the mic icon) and three `.voicesearch-ring` elements (`.voicesearch-ring-1/2/3`, each pre-staggered with its own `animation-delay`) inside a `.voicesearch` container.

   ```html
   <div class="voicesearch" role="img" aria-label="Listening for voice input">
     <span class="voicesearch-ring voicesearch-ring-1"></span>
     <span class="voicesearch-ring voicesearch-ring-2"></span>
     <span class="voicesearch-ring voicesearch-ring-3"></span>
     <span class="voicesearch-mic"><!-- mic icon --></span>
   </div>
   ```

3. **Why is this useful?**
   Voice search and voice-assistant UI is everywhere now (search bars, smart-home apps, in-car interfaces), and a clear "I'm listening" visual cue is a recurring need. This gives EaseMotion CSS a ready-made, dependency-free version of that pattern — pure CSS, no JavaScript, easy to drop into a search bar or toolbar.

### Notes for the maintainer
- All three rings share one `@keyframes` (`voicesearch-pulse`) and are simply offset with different `animation-delay` values (`0s`, `0.8s`, `1.6s`) — this is the simplest way to get a "continuous wave" feel without writing three separate keyframes or any JS timing logic.
- The mic icon is plain inline SVG (no icon font or CDN) to keep the file fully self-contained.
- `role="img"` + `aria-label` on the container communicates the indicator's meaning to assistive tech, since the animation itself carries no text.
- `prefers-reduced-motion: reduce` stops the expanding-wave animation and shows a single static ring instead, so the "listening" cue is still visible without the motion.
- Tested in Chrome, Firefox, and Edge.