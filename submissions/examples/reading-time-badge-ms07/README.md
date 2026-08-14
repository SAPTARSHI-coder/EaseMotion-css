# Reading Time Progress Badge

1. **What does this do?**
   A small fixed badge that shows an estimated reading time ("3 min read") on page load, fading in once. As the reader scrolls through the article, it switches to a live countdown ("2 min left", "1 min left"...), and a thin progress ring around the badge fills in to match how far through the content they've scrolled.

2. **How is it used?**
   Place a `.readbadge` element (containing the SVG ring and a text span) somewhere in the page, and wrap the article content in a container the included script can measure — in this demo, `.readbadge-article`.

   ```html
   <div class="readbadge">
     <svg class="readbadge-ring" viewBox="0 0 44 44">
       <circle class="readbadge-ring-track" cx="22" cy="22" r="19"></circle>
       <circle class="readbadge-ring-progress" cx="22" cy="22" r="19"></circle>
     </svg>
     <span class="readbadge-text">Calculating…</span>
   </div>
   ```

   A small vanilla JS snippet computes word count from the article's `innerText` at load (≈200 words per minute), sets the initial "X min read" label, then on scroll recalculates remaining time and updates both the label and the ring's `stroke-dashoffset`.

3. **Why is this useful?**
   Unlike a loading bar, nobody is blocked waiting on this — it's a lightweight, ambient orientation cue for long-form content, letting readers gauge how much is left without losing their place or being interrupted. Combining a live-updating label with a CSS-eased progress ring keeps the indicator informative without demanding attention, which fits EaseMotion CSS's animation-first but restraint-conscious philosophy.

### Notes for the maintainer
- This requires a small amount of vanilla JS (`scroll` listener + word-count calculation), since neither reading time estimation nor scroll-position tracking is something pure CSS can do — no frameworks or CDN dependencies are used, consistent with the repo's no-build-tool constraint.
- Word count uses the standard ~200 words-per-minute assumption; the demo article (~676 words) was written to land on a clean "3 min read" at load, verified directly rather than left to chance.
- The progress ring's fill direction was deliberately checked: `stroke-dashoffset = circumference * (1 - progress)` produces a ring that's empty at 0% scroll progress and fully drawn at 100%, with `rotate(-90deg)` on the SVG so the fill starts from 12 o'clock rather than 3 o'clock.
- The badge label only switches from "X min read" to "X min left" after the reader has scrolled even slightly (so it doesn't immediately flip to a countdown before any actual reading has happened), and shows "Finished" once scroll progress is effectively complete.
- `prefers-reduced-motion: reduce` keeps the one-time fade-in (low-intensity, not continuous) but removes the easing transition on the ring, so progress updates happen instantly rather than animating continuously while scrolling.
- Tested in Chrome, Firefox, and Edge.