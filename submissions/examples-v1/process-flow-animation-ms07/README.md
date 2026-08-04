# Process Flow Animation

1. **What does this do?**
   A horizontal multi-step process flow (stacking vertically on small screens) with animated connectors between steps, distinct completed/active/pending visual states, and a hover/focus lift on each step. Pure HTML &amp; CSS, no JavaScript.

2. **How is it used?**
   Wrap an ordered list of `.processflow-step` items in `.processflow`. Mark completed steps with `.processflow-step-done` and the current one with `.processflow-step-active`; steps with neither class are treated as pending.

   ```html
   <ol class="processflow">
     <li class="processflow-step processflow-step-done">
       <div class="processflow-marker"><span class="processflow-marker-check">✓</span></div>
       <h2 class="processflow-title">Order Placed</h2>
       <p class="processflow-desc">Confirmed and queued.</p>
     </li>
     <li class="processflow-step processflow-step-active" tabindex="0">
       <div class="processflow-marker"><span class="processflow-marker-number">3</span></div>
       <h2 class="processflow-title">In Transit</h2>
       <p class="processflow-desc">On its way to you now.</p>
     </li>
   </ol>
   ```

3. **Why is this useful?**
   Multi-step process indicators (order tracking, onboarding, checkout) are a very common UI pattern, and animating the connector between completed steps gives a much stronger sense of "progress flowing forward" than a static line ever could — while staying within EaseMotion CSS's pure-CSS philosophy.

### Notes for the maintainer
- **Animated connectors**: each step (except the last) grows a connector via `::after`. A pending step's connector is a static faint line; a completed step's connector (`.processflow-step-done`) animates a gradient fill left-to-right via `background-position`, giving the appearance of progress flowing into the next step. The connector's positioning math was checked by hand: `left: 50%; width: 100%` on equal-width flex steps lands the connector exactly center-to-center between adjacent markers, both horizontally and (via `top: 19px`) vertically centered on the 40px marker.
- **Active state**: `.processflow-step-active` gets a soft pulsing ring on its marker to draw attention to "you are here," distinct from the solid-filled look of a completed step.
- **Mobile layout**: under 600px, steps stack vertically and the connector rotates to run downward between markers; this height was also derived explicitly (`calc(100% + gap - marker-height)`) rather than guessed, to span exactly from one marker's bottom to the next marker's top.
- **Accessibility**: steps are `tabindex="0"` and `:focus-visible` mirrors the hover lift plus adds a visible outline on the marker, so keyboard users get equivalent feedback to mouse users. `prefers-reduced-motion: reduce` removes the connector fill animation and the active-step pulse, falling back to a solid-filled connector so progress is still visually clear without motion.
- Sized intentionally to land within the requested 250–300 line range (270 lines combined).
- Tested in Chrome, Firefox, and Edge.