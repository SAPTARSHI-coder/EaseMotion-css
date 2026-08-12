# Carousel Fade Slide

A quote carousel where slides cross-fade with a slight horizontal drift,
navigated via prev/next buttons and clickable dot indicators.

**Level:** Intermediate

## Usage

`goTo(index)` fades out the current slide, hides it after the transition
duration, then fades in the target slide and updates the matching dot's
active state. Dots are generated dynamically from the slide count.

## Accessibility

- Container uses the standard carousel ARIA pattern:
  `role="region" aria-roledescription="carousel"` with an `aria-label`
  describing its content, and each slide is `role="group"
  aria-roledescription="slide"` with an `aria-label` like "2 of 3".
- Inactive slides are hidden via the `hidden` attribute (after their fade
  finishes), removing them from the accessibility tree and tab order, not
  just visually hiding them.
- Prev/next buttons and each dot have descriptive `aria-label`s.
- `prefers-reduced-motion` removes the horizontal drift transform, keeping
  only a simpler opacity cross-fade.

## Notes

- This demo is manual-navigation only (no autoplay), which sidesteps the
  accessibility concerns around auto-advancing carousels (unexpected
  content changes, no pause control) entirely — a reasonable simplification
  for a component library example.
- `hidden` is applied via `setTimeout` matched to the CSS transition
  duration (300ms) rather than `transitionend`, since the outgoing slide's
  hide and the incoming slide's fade-in are choreographed as a pair — worth
  swapping to a `transitionend`-based approach if the transition duration changes.