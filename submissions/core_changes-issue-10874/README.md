# ease-compare-table

## What does this do?

Provides a CSS-only animated feature comparison table primitive with responsive horizontal scroll, sticky headers, row hover highlight, alternating row striping, a featured column highlight, and animated check/cross indicators.

## How is it used?

Wrap a standard HTML `<table>` with the `ease-compare-table` class. Use `ease-compare-row-header` for the first cell in each row, and `ease-icon-check` / `ease-icon-cross` for boolean indicators.

```html
<table class="ease-compare-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Free</th>
      <th class="is-featured">Pro</th>
      <th>Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="ease-compare-row-header">API Access</td>
      <td><span class="ease-icon-cross"></span></td>
      <td class="is-featured"><span class="ease-icon-check"></span></td>
      <td><span class="ease-icon-check"></span></td>
    </tr>
  </tbody>
</table>
```

### Featured column

Add `.is-featured` to `<th>` or `<td>` cells to highlight the recommended plan column with a tinted background and left/right accent border.

### Animated icons

- `.ease-icon-check` — green checkmark with draw-in animation
- `.ease-icon-cross` — red cross with draw-in animation

Both animate on page load with a scale pop and opacity draw-in. Animations are disabled when `prefers-reduced-motion` is active.

## Why is it useful?

Feature comparison tables are a core UI pattern for pricing pages, product comparisons, and feature matrices. This component provides a polished, accessible, zero-JavaScript implementation aligned with EaseMotion CSS's lightweight philosophy.

## Features

- Sticky table headers
- Row hover highlight
- Alternating row striping (`:nth-child(even)`)
- Featured column with accent border (`.is-featured`)
- Animated check (`.ease-icon-check`) and cross (`.ease-icon-cross`) icons
- Responsive horizontal scroll
- Respects `prefers-reduced-motion`
- Pure CSS, no JavaScript
