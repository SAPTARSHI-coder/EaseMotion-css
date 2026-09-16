# Toggle Switch Icon Morph

A mute/unmute button whose speaker icon morphs between "sound waves" and a
"muted" slash by animating stroke/opacity/scale on shared SVG paths.

**Level:** Advanced

## Usage

The button is `role="switch" aria-checked`. Clicking flips the checked
state and updates `aria-label` between "Mute audio"/"Unmute audio". CSS
attribute selectors (`[aria-checked="true"]`) drive the icon's visual morph.

## Accessibility

- Implemented as `role="switch"` with `aria-checked` kept in sync, and
  `aria-label` updated to describe the *next* action ("Mute audio" when
  unmuted, "Unmute audio" when muted), following common toggle-button
  labeling convention.
- Fully keyboard-operable as a real `<button>`, with `:focus-visible`
  outline shown.
- The icon morph itself is purely decorative visual reinforcement of the
  `aria-checked` state already exposed via ARIA — no information is
  conveyed by the icon alone that isn't also in the accessible name/state.
- `prefers-reduced-motion` removes the wave/scale and stroke-dashoffset
  transitions; the correct icon variant still displays immediately based
  on state.

## Notes

- The morph is driven entirely by a single CSS attribute selector
  (`.mute-toggle[aria-checked="true"] ...`), so the visual state can never
  drift out of sync with the accessible `aria-checked` value — they're
  updated together by the same JS line.
- Sound-wave arcs fade + scale down while the mute-slash line draws in via
  `stroke-dashoffset`, both layered on the same static speaker-body icon.