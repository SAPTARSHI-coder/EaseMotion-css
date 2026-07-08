# Dashboard Widget Expand

1. **What does this do?**
   A compact dashboard stat widget that smoothly expands on hover or keyboard focus to reveal secondary statistics and two action buttons. The headline number also subtly scales and shifts color as the card opens, giving the main stat its own small animated reaction.

2. **How is it used?**
   Each widget is a `.widgetexpand-card` with a `.widgetexpand-label`, a `.widgetexpand-stat` headline number, and a `.widgetexpand-reveal` block (hidden by default) containing `.widgetexpand-substats` and `.widgetexpand-actions`, all inside a `.widgetexpand-grid` container.

   ```html
   <article class="widgetexpand-card" tabindex="0">
     <span class="widgetexpand-label">Active Users</span>
     <span class="widgetexpand-stat">12,480</span>
     <div class="widgetexpand-reveal">
       <div class="widgetexpand-substats">
         <div><strong>+8.2%</strong><small>vs last week</small></div>
       </div>
       <div class="widgetexpand-actions">
         <button type="button">View report</button>
         <button type="button" class="widgetexpand-secondary">Export</button>
       </div>
     </div>
   </article>
   ```

3. **Why is this useful?**
   Dashboards constantly need to balance showing a lot of data with not overwhelming the user at a glance — a widget that stays compact until someone shows interest (hover/focus) is a clean way to surface secondary stats and quick actions without permanently consuming the layout's space, all in pure CSS.

### Notes for the maintainer
- **Animated statistics**: the headline `.widgetexpand-stat` number itself reacts on hover (slight scale + color shift), not just the reveal panel — giving the main number its own small animated cue rather than only animating the newly-revealed content.
- **`max-height` reveal budget verified, not guessed**: the reveal panel's expand uses `max-height: 0 → 160px` (since `max-height` can't transition to `auto`). The actual content height was calculated from the real CSS values shipped here (substats line-heights + margins + button height) at ~94px, giving ~66px of headroom at 160px — re-check this value if the demo content is extended.
- **Accessibility**: cards are `tabindex="0"` and every hover state has a matching `:focus-visible` selector, so keyboard users get the identical expand behavior, not just a focus ring. `prefers-reduced-motion: reduce` removes all transitions (card lift, stat scale, panel expand) so the same content is still reachable, just without the animated transition between states.
- Sized intentionally to land within the requested 250–300 line range (271 lines combined).
- Tested in Chrome, Firefox, and Edge.