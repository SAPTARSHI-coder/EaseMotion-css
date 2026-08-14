# Animated Table Row Scan Highlight

**Issue:** #11120

## What does this do?

Adds a horizontal scan animation to table rows on hover or keyboard focus.
When a user hovers or tabs to a row, a subtle light sweep travels across
the full row width — helping users track wide rows in dense data tables
without any layout changes or JavaScript.

## How is it used?

Add `class="scan-row"` and `tabindex="0"` to any `<tr>`:

```html
<div class="scan-table-wrapper">
  <table class="scan-table">
    <tbody>
      <tr class="scan-row" tabindex="0">
        <td>Invoice #1042</td>
        <td>Paid</td>
        <td>$240.00</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Variants

**Color variants** — add to the row alongside `scan-row`:

| Class | Highlight color |
|---|---|
| *(default)* | Primary blue tint |
| `scan-row-success` | Green tint |
| `scan-row-warning` | Amber tint |
| `scan-row-danger` | Red tint |
| `scan-row-neutral` | Neutral grey tint |

**Speed variants:**

| Class | Duration |
|---|---|
| *(default)* | 500ms |
| `scan-row-fast` | 250ms |
| `scan-row-slow` | 800ms |

## Accessibility

- Hover trigger uses `@media (hover: hover) and (pointer: fine)` — no sticky hover on touch
- Focus trigger uses `:focus-visible` — keyboard users see the same scan effect
- `tabindex="0"` makes rows keyboard-navigable without JavaScript
- `prefers-reduced-motion: reduce` — animation replaced with a static background tint, row still highlighted

## Why it fits EaseMotion CSS

Data tables are common but visually static. The row scan is a practical
micro-interaction that improves orientation in wide, dense tables — admin
panels, billing views, permission matrices — while keeping motion minimal
and respecting accessibility preferences.
