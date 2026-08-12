# Drag Slider Timeline Scrub

A media-player-style scrub bar for seeking through a timeline, draggable
via pointer with the handle growing on hover, and full keyboard seek support.

**Level:** Advanced

## Usage

`.scrub-track` is a `role="slider"` div. Dragging or clicking anywhere on
the track calls `setTime()` based on pointer X position; ArrowLeft/Right
seek ±5 seconds, Home/End jump to start/end.

## Accessibility

- Implements the ARIA slider pattern: `role="slider"`, `aria-valuemin`/
  `aria-valuemax`/`aria-valuenow` (in seconds), and `aria-valuetext` giving
  a human-readable "0:42 of 3:00" format — since raw seconds alone aren't
  very meaningful when announced.
- Fully keyboard-operable independent of dragging: ArrowLeft/Right step by
  5 seconds, Home/End jump to the extremes, matching common media-player
  keyboard conventions.
- Current time is also shown as visible text next to the track
  (`#currentTime`), not conveyed by handle position alone.
- `:focus-visible` outline shown on the track.
- `prefers-reduced-motion` removes the handle's hover-scale transition;
  seeking itself is a direct, non-animated value change regardless.

## Notes

- `aria-valuetext` is recalculated on every `setTime()` call (drag,
  keyboard, or click), so it always reflects the current formatted time
  rather than only being set once at initial render.
- This is a slider-only scrub bar; it doesn't include actual audio/video
  playback wiring in this demo — pair `setTime()`'s output with a real
  media element's `currentTime` property in production usage.
- Clicking directly on the track (not just dragging the handle) also seeks,
  matching standard media player scrub-bar behavior.