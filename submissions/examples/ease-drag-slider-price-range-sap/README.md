# ease-drag-slider-price-range-sap

A dual-thumb price range slider — drag either thumb independently, with the fill bar tracking the selected range between them.

## Notes
- Each thumb is clamped against the other (`minPct` can't pass `maxPct - 2`, and vice versa), preventing the handles from crossing or overlapping.
- Fill bar uses `left`/`right` percentages rather than `left`/`width`, which naturally follows both thumbs without recalculating width separately.
- Respects `prefers-reduced-motion`: thumb press-scale transition is disabled; drag itself remains functional as direct input.