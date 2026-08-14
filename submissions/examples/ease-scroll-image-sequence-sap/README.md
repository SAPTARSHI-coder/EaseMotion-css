# ease-scroll-image-sequence-sap

A scroll-scrubbed image sequence — scrolling through a tall track advances through a series of frames, like a scrubbable product-reveal animation (Apple-style scroll sequences).

## Usage
1. Include `style.css`.
2. Add markup: a tall `.scroll-track` wrapping a `position: sticky` container holding `.seq-frame` layers.
3. Attach the scroll-linked frame calculation from `demo.html`.

## Customization
- `.scroll-track` height (`300vh`): how much scroll distance covers the full sequence — taller = slower scrub.
- Number of frames — swap the colored `.seq-frame` divs for real sequential images.
- Frame opacity transition duration for cross-fade smoothness between frames.

## Notes
- The sticky container stays pinned in the viewport while its tall parent (`.scroll-track`) scrolls underneath, and frame progress is calculated from how far the parent has scrolled relative to its own scrollable height — this is the standard technique for scroll-scrubbed sequences.
- Only one frame is `.active` (opacity 1) at a time; frame index is derived directly from scroll progress, not a timer.
- Respects `prefers-reduced-motion`: cross-fade transition duration is unaffected in this component since frame switching is directly tied to scroll position (not a persistent animation) — each frame change is a state response to user scroll input, not decorative motion.