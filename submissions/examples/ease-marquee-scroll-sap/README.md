# ease-marquee-scroll-sap

An infinitely scrolling horizontal marquee band — pauses on hover, seamless loop with no visible jump/reset.

## Usage
1. Include `style.css`.
2. Add markup: duplicate the full set of `.marquee-item` elements once inside `.marquee-track`, so the track contains two identical copies back-to-back.

## Customization
- Animation duration (`14s`) on `.marquee-track`: scroll speed.
- Number of item sets: always keep exactly 2 copies for the `translateX(-50%)` loop math to line up seamlessly.
- Item spacing/star separator styling.

## Notes
- The seamless loop relies on duplicating the item set exactly once and animating `translateX(0)` → `translateX(-50%)` — at -50% the second copy is exactly where the first started, so the loop restart is invisible.
- `width: max-content` on the track lets it size to its full (double) content width rather than being clipped by the parent.
- Pauses on hover via `animation-play-state: paused`, letting users read content that's mid-scroll.
- Respects `prefers-reduced-motion`: animation is disabled entirely, showing a static (non-scrolling) row of items.