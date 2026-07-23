# Magnetic Pull Tooltip — Accessible Web Layouts

Closes #46307

## What does this do?

A high-contrast tooltip that snaps into place with a magnetic pull motion when its trigger is hovered or focused — built with accessibility as the primary design driver, using a single CSS `@keyframes` animation and no JavaScript.

## How is it used?

```html
<div class="magnet-tooltip-a11y">
  <button
    class="magnet-tooltip-a11y__trigger"
    type="button"
    aria-describedby="tip-newsletter"
  >
    Subscribe
  </button>
  <div class="magnet-tooltip-a11y__bubble" role="tooltip" id="tip-newsletter">
    <span class="magnet-tooltip-a11y__title">Weekly newsletter</span>
    <span class="magnet-tooltip-a11y__body">One email a week, no spam. Unsubscribe anytime.</span>
  </div>
</div>
```

Hovering or tab-focusing `.magnet-tooltip-a11y__trigger` reveals the adjacent `.magnet-tooltip-a11y__bubble`, playing the `ease-magnet-a11y-pull` animation: it starts offset and shrunk, overshoots slightly as it snaps toward the trigger, then settles into place.

Timing, easing, pull distance, and settle scale are exposed as CSS custom properties:

```html
<div class="magnet-tooltip-a11y" style="--ease-magnet-a11y-duration: 650ms; --ease-magnet-a11y-pull-distance: 34px; --ease-magnet-a11y-scale: 1.03;">
  ...
</div>
```

## Why is it useful?

Tooltips are frequently one of the least accessible UI patterns — low contrast, no keyboard path, no screen-reader announcement. This variant addresses that directly:

- **`aria-describedby` + `role="tooltip"`** wiring so screen readers announce the tooltip content when the trigger receives focus, not just on mouse hover.
- **44px minimum touch target** on the trigger per WCAG 2.5.5.
- **Thick, high-contrast focus ring** (not color-reliant alone) via `:focus-visible`, so keyboard users always know where they are.
- **`prefers-contrast: more`** support, thickening borders for users who need it.
- Needs **no JavaScript** — the whole effect is a single CSS `@keyframes` animation triggered by native `:hover`/`:focus-visible`.
- Respects `prefers-reduced-motion` by skipping straight to the final, settled state.
- Is responsive down to narrow viewports.
- Uses `ease-` prefixed variable and keyframe names per the library's convention.

## Files

- `demo.html` — self-contained demo with a default and a customized example, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable/keyframe names; exposes custom properties for timing/easing/scale per the issue's requirement)
- `README.md` — this file

## Note on related submissions

This repo has a separate "Magnetic Pull Tooltip for Creative Portfolio Layouts" issue (#46308). That variant uses a bold, high-energy dark theme suited to portfolio sites. This submission is deliberately styled and structured around the "Accessible Web Layouts" brief instead — high-contrast light theme, explicit ARIA wiring, and WCAG-driven focus/touch-target sizing — so the two don't overlap in either visuals or purpose.