# ease-drag-timeline-scrubber-sap

A draggable timeline scrubber with month markers beneath the track, useful for scrubbing through a year's worth of data or history.

## Usage
1. Include `style.css`.
2. Add markup: `.scrub-track` (fill + thumb) + `.scrub-markers` labels beneath.

## Notes
- Same click-to-seek drag pattern as other custom sliders in this library, paired with static timeline labels beneath for date/period context.
- `:active` on the track scales up the thumb for tactile feedback during drag.
- Respects `prefers-reduced-motion`: thumb scale transition is disabled.