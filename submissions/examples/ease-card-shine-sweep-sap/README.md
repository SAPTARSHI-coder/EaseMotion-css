# Card Shine Sweep

Cards with a diagonal light-sweep highlight that glides across the surface
on hover, a common "premium" card affordance.

**Level:** Beginner

## Usage

Apply the `.shine-card` class to any card container. The sweep is a
`::before` pseudo-element positioned off-canvas and transitioned across on
`:hover` — no JS needed.

## Accessibility

- Purely decorative hover effect; doesn't touch card content or its
  reading/tab order.
- `prefers-reduced-motion` removes the transition and hides the sweep layer,
  leaving a static card.
- Hover-only in this demo; if cards are also focusable/interactive elements,
  consider mirroring the effect on `:focus-visible` for keyboard parity.

## Notes

- The skewed gradient sweep travels from `-75%` to `125%` of the card's
  width so it fully clears both edges without any visible pop-in/out.
- `overflow: hidden` on `.shine-card` keeps the sweep clipped to each card.