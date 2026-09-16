# CSS Glitch-Flicker Modal for Creative Portfolio Layouts

1. **What does this do?**  
   Provides a pure HTML and CSS modal dialog with a controlled cyberpunk glitch and flicker entrance animation designed for creative portfolio showcases.

2. **How is it used?**  
   Apply the `.glitch-modal-overlay` container with an `#id` matching a trigger anchor link `href="#id"`:

   ```html
   <!-- Trigger Link -->
   <a href="#portfolio-modal" class="btn-trigger">View Project</a>

   <!-- Modal Component -->
   <div
     id="portfolio-modal"
     class="glitch-modal-overlay"
     role="dialog"
     aria-modal="true"
     aria-labelledby="modal-title"
   >
     <a
       href="#"
       class="glitch-modal-backdrop"
       aria-label="Close modal overlay"
       tabindex="-1"
     ></a>
     <div class="glitch-modal-card">
       <div class="glitch-scanlines" aria-hidden="true"></div>
       <header class="glitch-modal-header">
         <a href="#" class="glitch-modal-close" aria-label="Close modal"
           >&times;</a
         >
       </header>
       <div class="glitch-modal-body">
         <h2 id="modal-title" class="glitch-title" data-text="CYBER-SYNTH">
           CYBER-SYNTH
         </h2>
         <p>Project details and metrics...</p>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   It delivers an ultra-lightweight, zero-JavaScript interactive modal system with high-impact creative cyber visuals, smooth keyframe sequencing, full keyboard accessibility, and robust reduced-motion support.

---

## Features

- **Pure HTML + CSS**: State management powered by the native CSS `:target` pseudo-class.
- **Performant Glitch FX**: Hardware-accelerated keyframe transforms (`translate`, `scale`, `skewX`) and dual RGB channel split using pseudo-elements with `clip-path`.
- **EaseMotion Integration**: Built with EaseMotion design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`, `--ease-shadow-*`, `--ease-z-modal`).
- **Responsive Layout**: Fluid bounds for mobile, tablet, and desktop screens with adaptive grid and button stacking.
- **Accessibility & Reduced Motion**: Keyboard navigability via native `<a>` anchors, explicit ARIA dialog attributes, and non-distracting reduced-motion overrides via `@media (prefers-reduced-motion: reduce)`.
