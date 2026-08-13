# Hover Card Flip Price Toggle

A pricing card that flips via explicit "See what's included" / "Back to
pricing" buttons (not hover), giving a persistent, click-driven 3D flip
between price and feature-list faces.

**Level:** Intermediate

## Usage

Two buttons — one per face — toggle `.is-flipped` on `.flip-inner`. Unlike
a pure `:hover` flip card, this state persists until explicitly toggled back.

## Accessibility

- Despite the "hover" in the component name (matching the requested
  title), this implementation deliberately uses explicit buttons rather
  than `:hover`/`:focus-visible` triggers, since a persistent flip state
  driven only by hover would be lost as soon as the mouse moves away —
  problematic for reading the revealed content. Buttons give a stable,
  intentional toggle usable identically by mouse, keyboard, and touch.
- Each button's label describes both current context and destination
  ("See what's included →" / "← Back to pricing").
- Focus moves to the opposite face's button after each flip, so keyboard
  users land somewhere sensible (able to flip back immediately) rather than
  losing focus into a now-rotated, potentially unfocused element.
- Both faces' full text content exists in the DOM at all times, readable
  regardless of flip state or JS.
- `prefers-reduced-motion` removes the rotate transition; flipping between
  faces still functions, just as an instant switch.

## Notes

- This component intentionally diverges from a literal hover-triggered flip
  (see `ease-hover-card-flip-preview-sap` for that pattern) because a
  price-to-features toggle benefits from a stable, deliberate state rather
  than one tied to transient cursor position — flagged here since the
  requested name suggested "hover" but the more robust interaction pattern
  was chosen instead.