# Shimmer Empty State

1. **What does this do?** An empty-state card with two combined animation layers: a continuous diagonal light shimmer sweeping across the whole card, and a staggered fade-in-and-float sequence for the icon, heading, and subtext (each appearing slightly after the previous one).
2. **How is it used?** Wrap your empty-state content in a `.shimmer-empty-state` container, and apply `.empty-icon`, `.empty-heading`, and `.empty-subtext` to the respective elements to get the staggered entrance sequence alongside the shimmer.
   ```html
   <div class="shimmer-empty-state">
     <div class="empty-icon">📭</div>
     <h2 class="empty-heading">No items yet</h2>
     <p class="empty-subtext">Items you add will show up here.</p>
   </div>
   ```
3. **Why is it useful?** Empty states are one of the most common UI patterns (empty inboxes, empty search results, empty dashboards), but are often static and visually flat. This combines a subtle continuous shimmer sweep (using a pseudo-element gradient sweep, no extra markup needed) with a sequenced fade-in entrance for the content, giving the empty state a more polished, alive feel while staying pure CSS. Respects `prefers-reduced-motion` by disabling both the shimmer sweep and the entrance animation for users who request reduced motion, showing content immediately instead.
