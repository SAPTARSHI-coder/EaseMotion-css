# KPI Stat Cards

1. **What does this do?**
   Turns plain, full-width stacked stat rows (e.g. "Utilities", "Animations", "Dependencies") into a responsive grid of KPI-style cards, each with an icon chip, a large value, and a small trend indicator (up/down/flat), plus a subtle lift-and-glow hover effect.

2. **How is it used?**
   Wrap the cards in `.statcards-grid`. Each card is an `.statcard` containing a `.statcard-icon` (color-themed with a variant class like `.statcard-icon-utilities`, `.statcard-icon-animations`, `.statcard-icon-dependencies`) and a `.statcard-body` with `.statcard-label`, `.statcard-value`, and a `.statcard-trend` (use `.statcard-trend-up`, `-down`, or `-flat` depending on direction).

   ```html
   <div class="statcards-grid">
     <article class="statcard">
       <div class="statcard-icon statcard-icon-utilities">...</div>
       <div class="statcard-body">
         <span class="statcard-label">Utilities</span>
         <span class="statcard-value">248</span>
         <span class="statcard-trend statcard-trend-up">12% this month</span>
       </div>
     </article>
   </div>
   ```

3. **Why is this useful?**
   The current stat blocks on the docs/landing page are plain, full-width, and static — they don't take advantage of EaseMotion CSS's own animation-forward identity. This pattern is extremely common across dashboards and marketing pages (and matches what the framework already does well: small, composable, hover-reactive components). It directly addresses the "stat cards look plain and stacked" feedback by introducing a real grid layout, icons for quick visual scanning, a trend indicator for at-a-glance context, and a hover interaction consistent with the rest of the framework's card-based components.

### Notes for the maintainer
- This is submitted as a standalone example per the contribution guidelines, since the actual stat-card section being referenced likely lives in `docs/` or a core layout file that contributors can't edit directly. This demo is meant as a drop-in visual reference the maintainer can adapt into the real page.
- Grid collapses to 2 columns at 720px and 1 column at 480px.
- Icons are inline SVG (no icon font/CDN) to keep the file fully self-contained.
- `prefers-reduced-motion: reduce` disables the hover transform/transition.
- Tested in Chrome, Firefox, and Edge.