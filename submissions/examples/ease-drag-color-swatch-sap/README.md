# Drag Color Swatch

Drag a color swatch onto a dropzone to apply it, with a bump animation and
a live text label confirming the applied color — includes a full keyboard
alternative since native drag-and-drop excludes keyboard users.

**Level:** Intermediate

## Usage

Swatches are `draggable="true"`. Dropping one on `.dropzone` calls
`applyColor()`, which sets the background, updates the visible label, and
replays a small bump animation.

## Accessibility

- Native drag-and-drop is not keyboard-operable, so the dropzone is also a
  focusable (`tabindex="0"`) `role="button"` that responds to Enter/Space by
  applying a random swatch color — an explicit, documented keyboard
  equivalent rather than leaving keyboard users with no path to the same
  outcome.
- `aria-live="polite"` region (visually hidden via `.sr-only`) announces
  which color was applied after both drag-drop and keyboard activation.
- `prefers-reduced-motion` removes the swatch hover lift, the dropzone's
  hover/over scale, and the bump animation.

## Notes

- The keyboard path picks a random swatch rather than a specific one, since
  there's no native concept of "the currently focused swatch to drop" via
  Enter on the dropzone alone; a production version could instead let users
  arrow through swatches, press Enter to "pick up," then Enter on the
  dropzone to place that specific one — flagged here as a stronger pattern
  worth implementing if this becomes a real feature rather than a demo.
- Applied color name/value is read from `dataset.name` and computed
  background color, so the confirmation text always matches what's shown.