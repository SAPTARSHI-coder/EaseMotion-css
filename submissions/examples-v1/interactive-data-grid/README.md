# Interactive Data Grid

A polished, CSS-only data grid component for dashboards, admin panels, and product surfaces. It brings spreadsheet-like structure, sticky headers, responsive overflow, density modes, status badges, and hover feedback without requiring JavaScript.

## Features

- Sticky header support
- Sorting indicators
- Hover and focus states
- Responsive horizontal scrolling
- Zebra striping option
- Compact and comfortable density modes
- Status badge support
- Dashboard-ready styling
- Accessible focus visibility
- Customizable via CSS variables

## Available classes

- `.ease-data-grid`
- `.ease-data-row`
- `.ease-data-cell`
- `.ease-data-header`
- `.ease-data-sort`

## Variants

- `.ease-data-grid-dark`
- `.ease-data-grid-glass`
- `.ease-data-grid-compact`
- `.ease-data-grid-striped`

## Density modes

Use `.ease-data-grid-compact` to tighten vertical spacing for dense dashboards. The default layout provides a more comfortable rhythm for broader tables.

## Customization

The component is driven by these CSS variables:

- `--ease-grid-bg`
- `--ease-grid-color`
- `--ease-grid-border`
- `--ease-grid-header-bg`
- `--ease-grid-hover-bg`
- `--ease-grid-radius`
- `--ease-grid-shadow`
- `--ease-grid-padding`
- `--ease-grid-transition`

## Example usage

```html
<div class="ease-data-grid-shell">
  <div class="ease-data-grid ease-data-grid-striped" role="table">
    <div class="ease-data-row ease-data-header" role="row">
      <div class="ease-data-cell" role="columnheader">Customer</div>
      <div class="ease-data-cell" role="columnheader">Status</div>
    </div>
    <div class="ease-data-row" role="row" tabindex="0">
      <div class="ease-data-cell" role="cell">Northstar Labs</div>
      <div class="ease-data-cell" role="cell"><span class="ease-status-badge ease-status-active">Healthy</span></div>
    </div>
  </div>
</div>
```

## Accessibility

- Keyboard focus is supported through `tabindex="0"` on interactive rows.
- Focus-visible states ensure keyboard users can identify the current row.
- Reduced-motion preferences are respected.
- High-contrast-friendly colors and strong borders are used for readability.

## Browser compatibility

The component uses standard CSS features and should work well in modern evergreen browsers, including Chrome, Edge, Firefox, and Safari.
