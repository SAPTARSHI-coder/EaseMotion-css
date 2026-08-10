# ease-checkbox

A custom-styled checkbox where, on check, an SVG checkmark path animates in via `stroke-dashoffset` (a "drawing" effect) instead of just appearing instantly, alongside a background color transition.

## What does this do?

- Visually hides the native `<input type="checkbox">` (sr-only pattern) but keeps it interactive and focusable — so keyboard support, form submission, and `:checked` all still work natively.
- Renders a styled `.checkbox-box` that holds an inline SVG path.
- On `:checked`, the box background transitions to the accent color **and** the path's `stroke-dashoffset` animates from its full length to `0`, so the checkmark appears to be *drawn* rather than popped in.
- Uses the classic stroke-dash draw technique: `stroke-dasharray` equals the path length (~24 units for `M4 12l6 6L20 6`); `stroke-dashoffset` starts at that length (invisible) and animates to `0` (fully drawn) on check.

## How is it used?

1. Link the stylesheet.
2. Use the markup below — the `<input>` must immediately precede the `.checkbox-box` (the `:checked + .checkbox-box` selector drives the visuals).

```html
<link rel="stylesheet" href="style.css" />

<label class="checkbox">
  <input type="checkbox">
  <span class="checkbox-box">
    <svg class="checkbox-check" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path class="checkbox-path" d="M4 12l6 6L20 6" fill="none" stroke="white"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
  Accept terms
</label>

<!-- sizes -->
<label class="checkbox checkbox--sm"> … </label>
<label class="checkbox checkbox--lg"> … </label>
```

## Why is this useful?

- **Polished interaction** — native checkboxes can't be styled consistently across browsers, and most redesigns just fade a checkmark in. The stroke-draw technique is more delightful while still being just CSS + a static inline SVG (no JS drawing library).
- **Native semantics preserved** — keyboard, focus, form submission, and `:disabled` all work because the real `<input>` stays in the DOM and focusable.
- **Accessible** — the SVG is `aria-hidden`/`focusable="false"`; the label text is the accessible name; visible focus ring driven by `:focus-visible`; full `prefers-reduced-motion` support disables the draw animation.
- **Reusable** — configurable via CSS custom properties (`--cb-accent`, `--cb-size`, `--cb-radius`, `--cb-dur`, `--cb-draw-dur`, etc.).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Shows basic, sized, and disabled states.
- `style.css` — visually-hidden input, styled box, `stroke-dashoffset` draw animation, checked/disabled/focus states, size modifiers, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
