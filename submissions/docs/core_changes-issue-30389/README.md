# Print Stylesheet — Issue #30389

Print-specific utility classes wrapped in `@media print`.

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-no-print` | Hides element when printing |
| `.ease-only-print` | Shows element only when printing |
| `.ease-print-break-inside-avoid` | Avoids page break inside element |
| `.ease-print-break-before` | Forces page break before element |
| `.ease-print-break-after` | Forces page break after element |
| `.ease-print-avoid-break` | Alias for break-inside avoid |

## Print Resets (applied via `@media print`)

- `a[href]::after` — displays link URLs in print
- `img` — max-width 100%, page-break-inside avoid
- `table` — font-size reduced
- `h1, h2, h3, h4` — page-break-after avoid

No CSS variables required.
