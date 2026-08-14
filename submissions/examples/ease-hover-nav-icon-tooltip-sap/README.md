# Hover Nav Icon Tooltip

An icon-only nav bar where each icon reveals a small text label tooltip on
hover/focus, so icon meaning isn't hidden behind guesswork.

**Level:** Beginner

## Usage

Each `.nav-item-wrap` pairs an icon `<a>` (with `aria-describedby`) and a
sibling `.icon-tip role="tooltip"`, shown via the `~` sibling combinator on
`:hover`/`:focus-visible`.

## Accessibility

- Each icon link has `aria-describedby` pointing at its tooltip's `id`, so
  the label text is exposed to screen readers as a description regardless
  of hover state — this matters especially here since the links contain
  only an icon glyph with no visible text label otherwise.
- Tooltip appears on `:focus-visible` as well as `:hover`, giving keyboard
  users tabbing through the nav the same label reveal.
- `pointer-events: none` on the tooltip prevents it from intercepting
  clicks meant for the icon underneath.
- `prefers-reduced-motion` removes the scale/rise transform, keeping a
  simple opacity fade.

## Notes

- Since these are icon-only links with no visible text, `aria-describedby`
  is doing real accessibility work here (not just supplementary info) — the
  tooltip text is effectively providing the link's meaningful label for
  assistive tech users, similar in spirit to `aria-label` but sourced from
  visible (on-hover) text.
- Same fade/rise tooltip technique as `ease-tooltip-fade-arrow-sap`, applied
  here specifically to an icon-only navigation context.