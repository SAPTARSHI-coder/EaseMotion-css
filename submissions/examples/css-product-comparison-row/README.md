# CSS Product Comparison Row

A pure CSS product feature comparison row component designed for SaaS pricing tables and product spec matrices. Features row hover highlights, column accent badges, status check indicators, and responsive mobile stacked card viewports. Built without JavaScript dependencies.

## How it works

The matrix uses semantic table tags (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`). Active plan columns (`.active`) leverage CSS custom variables (`--ease-comp-active-bg`) to highlight recommended tiers vertically. On mobile screens (`max-width: 640px`), media queries convert table rows into independent card blocks using `data-label` attributes to generate mobile plan headers via CSS `::before` pseudo-elements.

## Files

`demo.html`, `style.css`, `README.md`

## Custom properties

- `--ease-comp-bg`: Card container background color (`#0f172a`)
- `--ease-comp-card-bg`: Surface panel background color (`#1e293b`)
- `--ease-comp-border`: Boundary border line color (`#334155`)
- `--ease-comp-text`: Headline and spec text color (`#f8fafc`)
- `--ease-comp-muted`: Subtitle description text color (`#94a3b8`)
- `--ease-comp-accent`: Primary sky-blue accent color (`#38bdf8`)
- `--ease-comp-active-bg`: Featured column background (`rgba(56, 189, 248, 0.08)`)
- `--ease-comp-green`: Enabled check icon color (`#10b981`)
- `--ease-comp-red`: Disabled cross icon color (`#f43f5e`)

## Accessibility & Performance

- Fully accessible using semantic HTML5 table elements, explicit scope attributes (`scope="col"`, `scope="row"`), and `caption` descriptions.
- Full support for `@media (prefers-reduced-motion: reduce)` which disables row hover transition effects.