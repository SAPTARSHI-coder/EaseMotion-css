# Scroll Countdown Banner

A fixed countdown-timer banner that slides up from the bottom once the
reader scrolls to a designated "sale" section, staying pinned while visible.

**Level:** Intermediate

## Usage

`IntersectionObserver` toggles `.is-visible` on `.countdown-banner` based
on whether `#promoAnchor` is intersecting the viewport at all. The
countdown itself ticks down every second via `setInterval`.

## Accessibility

- The banner uses `role="status"` but with `aria-live="off"` deliberately —
  a countdown ticking every second would otherwise cause an `aria-live`
  region to re-announce constantly, which is disruptive noise rather than
  useful information; `role="status"` without an active live region still
  correctly identifies its semantic purpose for anyone who navigates to it directly.
- The banner only becomes visible (slides in) when its anchor section is
  actually in view, so it's not permanently obstructing content, and slides
  away again once scrolled past.
- `prefers-reduced-motion` removes the slide transition; the banner still
  appears/disappears correctly, just as an instant show/hide rather than an
  animated slide.

## Notes

- Deliberately using `aria-live="off"` here is a considered choice, not an
  oversight — ticking countdowns are one of the few cases where an active
  live region actively harms the experience; if the *banner's appearance*
  itself needs announcing (rather than every second's tick), a separate,
  one-time `aria-live="polite"` announcement on first appearance would be a
  more surgical addition, left as a note rather than implemented to avoid
  conflating the two different live-region needs.
- This is a demo countdown; wire `remaining` to a real deadline timestamp
  in production rather than a fixed in-memory starting value.