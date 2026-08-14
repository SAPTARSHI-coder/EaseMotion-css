# Hover Icon Swap

Icon buttons where hovering (or focusing) slides one icon out upward while
a second icon slides in from below, suggesting a state change (play→pause,
like, copy→copied).

**Level:** Beginner

## Usage

Each button holds two absolutely-positioned `.icon` spans (`.icon-a` default,
`.icon-b` hover/alternate state). Both translate vertically and cross-fade
on `:hover`/`:focus-visible`.

## Accessibility

- Each button has a static, descriptive `aria-label` (e.g. "Play video")
  describing its action — the label does not attempt to reflect the
  transient hover-icon state, since hover state isn't meaningful to
  keyboard/screen-reader users the same way. If a button represents a real
  toggled state (e.g. favorited/not), the `aria-label` or an
  `aria-pressed` attribute should be updated by application logic on click,
  not left to the decorative hover icon alone.
- Effect triggers on `:focus-visible` as well as `:hover`, so keyboard
  users see the same icon-swap preview.
- `prefers-reduced-motion` removes the vertical slide, keeping only a
  simpler opacity cross-fade.

## Notes

- Under `prefers-reduced-motion`, `transform` is reset to `none` on both
  icons so only `opacity` animates, keeping some minimal state feedback
  without directional motion.
- This is a hover-preview effect; actual click-driven state changes (e.g.
  toggling a "liked" boolean) need separate JS and `aria-pressed`/label
  updates, intentionally left out of this focused hover-effect submission.