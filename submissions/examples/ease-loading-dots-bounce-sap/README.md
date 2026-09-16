# Loading Dots Bounce

A classic three-dot loading indicator where each dot bounces in a staggered
sequence, offering a simple, compact alternative to a spinner.

**Level:** Beginner

## Usage

Drop the `.dots-loader` markup anywhere a loading state needs indicating.
No JS required — staggering is handled via per-child `animation-delay`.

## Accessibility

- The dots themselves are `aria-hidden="true"`; the container has
  `role="status" aria-live="polite"` with a separate `.sr-only` text label
  ("Loading") that's actually announced, so screen reader users get a
  single clean announcement instead of three unlabeled bouncing elements.
- `prefers-reduced-motion` disables the bounce animation and sets all dots
  to full, consistent opacity, so a static (if less informative) loading
  cue remains rather than removing the indicator's visibility entirely.

## Notes

- Staggering uses `:nth-child` + fixed `animation-delay` offsets (0.15s,
  0.3s) rather than a JS loop — works for a fixed 3-dot count; extend the
  `:nth-child` selectors if more dots are needed.
- This is a decorative/generic loading indicator; toggle `.dots-loader`'s
  visibility from actual loading-state logic in real usage.