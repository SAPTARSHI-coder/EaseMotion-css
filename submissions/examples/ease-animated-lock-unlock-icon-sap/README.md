# Animated Lock Unlock Icon

A lock toggle whose shackle swings open with a springy rotation when
unlocked, and the body tints green to reinforce the "safe/unlocked" state.

**Level:** Intermediate

## Usage

The button is `role="switch" aria-checked`. Clicking flips the checked
state and updates `aria-label` to describe both current state and the next
action. CSS attribute selectors (`[aria-checked="false"]`) drive the shackle
rotation and body color.

## Accessibility

- Implemented as `role="switch"` with `aria-checked` kept in sync, and
  `aria-label` describing both the current state and what activating it
  will do (e.g. "Locked. Activate to unlock."), so the control's meaning is
  never dependent on interpreting the icon shape alone.
- Fully keyboard-operable as a real `<button>`, with `:focus-visible` outline shown.
- Color (green body when unlocked) is a secondary reinforcement, not the
  sole signal — the shackle's open/closed shape and the `aria-label` both
  independently convey the state, so the component doesn't rely on color
  alone for colorblind users.
- `prefers-reduced-motion` removes the shackle's rotation transition; the
  correct locked/unlocked shape still displays immediately based on state.

## Notes

- The morph is driven entirely by a CSS attribute selector on
  `aria-checked`, so the visual icon state can never drift out of sync with
  the accessible switch state.
- `transform-origin` is set at the shackle's pivot point (bottom-left of the
  arc) so the rotation reads as the shackle physically swinging open,
  rather than just sliding or spinning in place.