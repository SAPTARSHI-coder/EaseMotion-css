# Service Showcase Grid

1. **What does this do?**
   A responsive grid of service cards where hovering (or keyboard-focusing) a card reveals more detail through three distinct, staggered layers rather than a single transform: the icon reacts first (scale + tint), the title shifts slightly a beat later, and a detail paragraph + CTA link slides up and fades in last, after the icon and title have already moved.

2. **How is it used?**
   Each card is a `.serviceshowcase-card` containing a `.serviceshowcase-icon` (inline SVG), a `.serviceshowcase-title`, a `.serviceshowcase-summary` (visible by default), and a `.serviceshowcase-detail` block (hidden until hover/focus) with a paragraph and a `.serviceshowcase-cta` link, all inside a `.serviceshowcase-grid` container.

   ```html
   <article class="serviceshowcase-card" tabindex="0">
     <div class="serviceshowcase-icon"><svg>...</svg></div>
     <h2 class="serviceshowcase-title">Product Design</h2>
     <p class="serviceshowcase-summary">Interfaces that feel obvious.</p>
     <div class="serviceshowcase-detail">
       <p>Longer description text here.</p>
       <a class="serviceshowcase-cta" href="#">Learn more →</a>
     </div>
   </article>
   ```

3. **Why is this useful?**
   Layered, staggered hover reveals read as more polished and intentional than a single uniform transform applied to everything at once — this gives EaseMotion CSS a ready service/feature-grid pattern (a very common marketing-site section) that demonstrates that layering technique concretely, in pure HTML and CSS with zero JavaScript.

### Notes for the maintainer
- **Layered hover animation**: three separate transition timings are stacked on one card — icon (`0s` delay, fastest), title (`0.03s` delay), and the detail block (`0.05–0.1s` delay across its several animated properties) — so the reveal visibly cascades rather than moving in lockstep.
- **`max-height` caveat**: the detail block's expand/collapse uses `max-height: 0` → `max-height: 160px` rather than `auto`, since `max-height` transitions can't animate to `auto` smoothly. `160px` was sized against the longest paragraph across all six demo cards (estimated ~126px rendered, including the CTA and margins) and has headroom, but if this gets reused with notably longer copy, that value should be re-verified and bumped — it will silently clip content otherwise, since there's no overflow indicator.
- **`:focus-visible` mirrors `:hover`** on every layer, so keyboard users get the identical staggered reveal, not just a focus outline with no content reveal.
- **`prefers-reduced-motion: reduce`** removes every transition and snaps straight to the open/closed state, since several staggered, delayed transforms stacked together is exactly the kind of motion most likely to bother motion-sensitive users — a single reduced-motion query was judged simpler and safer here than trying to selectively keep some layers animated.
- Tested in Chrome, Firefox, and Edge.