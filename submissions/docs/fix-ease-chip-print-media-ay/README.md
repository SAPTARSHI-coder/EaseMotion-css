# Fix `ease-chip` — Add `@media print` Optimization

Addresses issue #39269: `.ease-chip` renders with heavy backgrounds, gradients,
and box-shadows when printed, wasting ink and reducing text readability on paper.

## What does this do?

`components/chip.css` already has `@media (prefers-color-scheme: dark)`,
`@media (prefers-reduced-motion: reduce)`, and `@media (forced-colors: active)`
blocks — but has **no `@media print` block**.

When printed, every chip retains:
- A coloured background (`#f3f4f6` unselected / `#6366f1` selected)
- A `box-shadow: 0 2px 8px rgba(99,102,241,0.3)` on selected chips
- CSS `transition` and `transform` properties (wasted cycles on paper)
- The animated `::before` checkmark pseudo-element (may be invisible on paper)

The fix is to add a `@media print` block at the end of `chip.css` that resets
all of these to print-safe values:

```css
@media print {
  .ease-chip {
    background: transparent !important;
    background-image: none !important;
    box-shadow: none !important;
    border: 1px solid #000 !important;
    color: #000 !important;
    transition: none !important;
    transform: none !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .ease-chip-group input[type="checkbox"]:checked + .ease-chip {
    background: transparent !important;
    border: 2px solid #000 !important;
    color: #000 !important;
    box-shadow: none !important;
  }

  .ease-chip-group input[type="checkbox"]:checked + .ease-chip::before {
    color: #000 !important;
  }

  .ease-chip-group input[type="checkbox"]:disabled + .ease-chip {
    opacity: 0.5 !important;
  }
}
```

## How is it used?

No change to the HTML API. The print styles apply automatically when the browser
renders a print preview or sends the page to a printer:

```html
<div class="ease-chip-group">
  <input type="checkbox" id="chip-a" checked />
  <label class="ease-chip" for="chip-a">Design</label>

  <input type="checkbox" id="chip-b" />
  <label class="ease-chip" for="chip-b">Engineering</label>
</div>
```

The `demo.html` in this submission can be opened directly in a browser; use
**Ctrl+P / Cmd+P** to see the print preview with the fix applied.

## Why is it useful?

- **Ink conservation** — stripping coloured backgrounds and shadows means only
  text and a thin border are printed, saving significant ink on every chip.
- **Readability on paper** — black text on a transparent (white paper)
  background gives maximum contrast, especially on black-and-white printers.
- **Consistency with accessibility peers** — `chip.css` already handles
  `prefers-reduced-motion` and `forced-colors`. A `@media print` block completes
  the trio of critical output-media adaptations.
- **Zero-risk change** — `@media print` only activates during print rendering;
  it has zero effect on screen display.

The one-line location for the maintainer:
Add the `@media print { ... }` block immediately after the existing
`@media (forced-colors: active) { ... }` block in `components/chip.css`,
before the closing `}` of the `@layer easemotion-components` wrapper.
