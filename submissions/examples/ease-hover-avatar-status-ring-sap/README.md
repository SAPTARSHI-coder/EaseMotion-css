# Hover Avatar Status Ring

An avatar button that reveals a colored "online" status ring on hover or
focus, expanding outward from just under the avatar's edge.

**Level:** Beginner

## Usage

Apply `.ring-avatar` to a button containing initials/image plus a `.ring`
span. The ring is hidden (`opacity: 0`, slightly scaled down) by default
and revealed on `:hover`/`:focus-visible`.

## Accessibility

- The avatar is a real `<button>` with a full descriptive `aria-label`
  ("Maya Chen, online — view profile") that states the status in text,
  since the ring itself is purely a decorative hover/focus reveal and isn't
  otherwise announced.
- Ring appears on `:focus-visible` as well as `:hover`, so keyboard users
  get the same reveal, and a separate `box-shadow`-based focus ring is
  layered on top for clear focus indication independent of the status ring.
- `prefers-reduced-motion` removes the scale transform, keeping a simple
  opacity fade for the ring reveal.

## Notes

- The status ring and the focus-visible indicator are two visually
  distinct rings (colored border vs. box-shadow), so they don't compete for
  the same visual space when both are active at once (focused + hovered).
- This demo only shows an "online" ring variant; extend with an
  additional modifier class (e.g. `.ring-away`) and matching `aria-label`
  text for other statuses, following the same pattern as
  `ease-animated-avatar-status-sap`.