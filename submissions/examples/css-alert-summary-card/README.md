# CSS Alert Summary Card

A compact summary card that groups **critical**, **warning**, and **info**
alert counts into one glanceable component, with a subtotal footer. Pure
CSS/HTML — no JavaScript. Counts are static markup here since real
alert data would come from wherever the app tracks alerts; the card
itself is just the display layer.

## Files

- `demo.html` — the card with 3 alert rows and a total footer
- `style.css` — layout, color-coded rows, and entrance/hover animations
- `README.md` — this file

## How it works

Each severity level is a `.alert-row` with a modifier class
(`.critical`, `.warning`, `.info`) that drives its icon color and count
badge color via CSS custom properties defined once on `.alert-summary-card`.
The card and each row animate in on load (`card-in` / `row-in`
`@keyframes`, staggered per row with `animation-delay`), and rows lift
slightly and highlight on hover/focus.

## Usage

```html
<section class="alert-summary-card" aria-labelledby="alert-summary-title">
  <div class="alert-summary-header">
    <h2 id="alert-summary-title">System Alerts</h2>
    <span class="alert-summary-subtitle">Last 24 hours</span>
  </div>

  <ul class="alert-summary-list" role="list">
    <li class="alert-row critical" tabindex="0">
      <span class="alert-icon" aria-hidden="true"><!-- svg icon --></span>
      <span class="alert-label">Critical</span>
      <span class="alert-count" aria-label="4 critical alerts">4</span>
    </li>
  </ul>

  <div class="alert-summary-footer">
    <span class="alert-total-label">Total</span>
    <span class="alert-total-count">30</span>
  </div>
</section>
```

Swap the counts, icons, and colors as needed — the three severity
modifier classes are the only thing tying a row to its color scheme.

### Accessibility

- `aria-labelledby` ties the card to its heading for screen readers.
- Each count has an explicit `aria-label` (e.g. "4 critical alerts") so
  the number isn't announced without context.
- Rows are focusable (`tabindex="0"`) with a visible `:focus-visible`
  outline, so keyboard users get the same hover affordance as mouse
  users.
- `role="list"` on the `<ul>` keeps the semantics explicit across
  browsers that sometimes strip list semantics from styled lists.

### Responsive behavior

Card padding and row padding tighten under `max-width: 420px` so it
stays comfortable on narrow viewports; layout itself is already fluid
via flexbox.

### Reduced motion

`prefers-reduced-motion: reduce` disables the entrance and hover-lift
animations, leaving the card fully legible and static.

## Why it fits EaseMotion CSS

Pure CSS/HTML, no JavaScript, no external assets, readable staggered
`@keyframes` for the entrance animation, and accessible/responsive
markup — matching the repo's animation-first, accessible-by-default
philosophy.

## Notes

- No existing files were modified — strictly additive, living entirely
  in `submissions/examples/css-alert-summary-card/`.
