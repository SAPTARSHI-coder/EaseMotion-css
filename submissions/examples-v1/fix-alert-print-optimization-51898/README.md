# Alert Component — Print Optimization

Fixes issue #51898: the `ease-alert` component wasted ink and lost
contrast when printed. This adds a `@media print` rule that strips
backgrounds, shadows, and gradients, and forces high-contrast
black-on-white output across every alert variant.

## Problem

By default, alerts use colored backgrounds, left-border accents, and
soft shadows for on-screen use. Printed as-is, this:

- Wastes ink filling colored backgrounds
- Can lose contrast on some printers/paper
- Prints interactive-only elements (like the dismiss button) that
  have no purpose on paper

## Fix

A `@media print` block:

- Sets `background: transparent` and `color: #000` on `.ease-alert`
  and every color variant (`success`, `danger`, `warning`, `info`)
- Replaces the colored left border with a solid black `1px`/`4px`
  border so the alert boundary stays visible without color
- Removes `box-shadow` entirely
- Forces title/message/icon text to black for guaranteed contrast
- Hides `.alert-close` (the dismiss button), since it's a UI-only
  affordance
- Adds `page-break-inside: avoid` so an alert doesn't get split
  across two printed pages
- Normalizes `.ease-alert-rounded`'s corner radius down slightly so
  it still reads cleanly on paper

## How a developer uses it

No new classes or markup — this only adds print behavior to the
existing `ease-alert` classes:

```html
<div class="ease-alert-success">
  <span class="alert-icon">✅</span>
  <div class="alert-content">
    <div class="alert-title">Success</div>
    <div class="alert-message">Your changes have been saved.</div>
  </div>
</div>
```

Open `demo.html` and press **Ctrl/Cmd + P** to see the print preview.

## Why this fits EaseMotion CSS

It keeps the same human-readable, class-driven approach the base
`ease-alert` component already uses — no new dependencies, no
JavaScript, just an additive `@media print` layer that respects every
existing variant (color, size, rounded, dismissible) rather than
overriding the component's on-screen design.

## Files

- `demo.html` — all alert variants (colors, dismissible, sizes,
  rounded), self-contained and opens directly in a browser
- `style.css` — the base `ease-alert` component plus the print
  optimization rules
- `README.md` — this file
