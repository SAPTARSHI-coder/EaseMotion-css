# Scroll Timeline Progress

A vertical timeline/stepper whose connecting line fills in as the user
scrolls down past it, tracking scroll position rather than a fixed duration.

**Level:** Intermediate

## Usage

`.tl-line-fill` height is recalculated on every scroll/resize event based
on how far a reference point (65% down the viewport) has progressed through
the timeline's own bounding box.

## Accessibility

- The timeline's actual content (`<h2>`/`<p>` per item) is fully present and
  readable regardless of scroll position or JS state — only the connecting
  line's visual fill is scroll-driven.
- Scroll/resize listeners are `{ passive: true }` (scroll) and standard
  (resize), and `updateFill()` also runs once on load so the correct fill
  amount shows immediately without requiring a scroll event first.
- `prefers-reduced-motion` removes the fill-height transition; the value
  still updates correctly per scroll position, just without an eased delay.

## Notes

- Fill percentage is computed from `(referencePoint - timelineTop) /
  timelineTotalHeight`, clamped to `[0, total]` before converting to a
  percentage, so it never overshoots above 100% or goes negative.
- Ordered list (`<ol>`) is used for the timeline items since they represent
  a sequential process, not just a decorative visual list.