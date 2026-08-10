# Pulse Notification Dot

A notification badge dot with a soft expanding-ring pulse to draw attention,
commonly used on bell/message icon buttons.

**Level:** Beginner

## Usage

Add a `<span class="pulse-dot" aria-hidden="true">` inside a
`position: relative` icon button. Colour variants are provided via
modifier classes (e.g. `pulse-dot-blue`).

## Accessibility

- The dot itself is `aria-hidden="true"` — the actual "unread" information
  is communicated via the button's own `aria-label` (e.g. "Notifications,
  3 unread"), not via the visual dot alone.
- `prefers-reduced-motion` removes the pulsing ring animation and hides it
  (`opacity: 0`), leaving just the static solid dot as the indicator.

## Notes

- The ring is a `::before` pseudo-element that scales up and fades out on a
  loop, layered under/over the solid dot which stays static and always visible.
- Because the meaningful state lives in `aria-label`, this component doesn't
  rely on color alone (red dot) to convey "unread" to assistive tech users.