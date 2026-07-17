# EaseMotion CSS — Empty Cell Utilities

This directory implements core utility classes for controlling the CSS `empty-cells` property in EaseMotion CSS.

---

## What is Empty Cells?

The `empty-cells` property dictates whether table cells with no visible content (such as empty cells `<td></td>` or elements containing only whitespaces) render borders and backgrounds.

### The Border Collapse Constraint

> [!IMPORTANT]
> The `empty-cells` property has **no effect** if the table's border collapse setting is set to `collapse`. It only works when borders are separated (<code>border-collapse: separate;</code>).

### Aesthetic Options:

1. **Show Empty Cells (`show`)**: Default browser style. Renders borders and column cell backgrounds normally, maintaining a strict tabular grid pattern regardless of cell contents.
2. **Hide Empty Cells (`hide`)**: Hides cell borders and backgrounds, rendering empty cells completely transparent. This lets background patterns, gradients, or colors placed on the wrapper card show through cleanly, creating a spacious, modern grid aesthetic.

---

## Utility Classes Reference

EaseMotion CSS provides clean classes mapping to the standard empty-cells actions:

| Utility Class       | CSS Equivalent                  | Description                                                                      |
| :------------------ | :------------------------------ | :------------------------------------------------------------------------------- |
| `.empty-cells-show` | `empty-cells: show !important;` | Default: renders borders and backgrounds around empty table cells.               |
| `.empty-cells-hide` | `empty-cells: hide !important;` | Hides borders and backgrounds around empty table cells, making them transparent. |

### Supporting Utilities

- **Border Collapse**: `.border-separate` (`border-collapse: separate !important;`), `.border-collapse` (`border-collapse: collapse !important;`).
- **Border Spacing scale**: `.border-spacing-0` to `.border-spacing-8` (configuring the gap separation between cells).

---

## Usage Examples

### 1. Modern Exposed Dashboard Data Tables (Hide)

Applying `.empty-cells-hide` lets complex card gradients show through empty segments of the data grid:

```html
<!-- Table with separate borders and spacing, hiding empty blocks -->
<table class="border-separate empty-cells-hide border-spacing-2">
  <thead>
    <tr>
      <th>Host</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Server A</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Server B</td>
      <td></td>
      <!-- This cell will be completely transparent -->
    </tr>
  </tbody>
</table>
```

---

## Accessibility (WCAG 2.1) & Readability Best Practices

- **Avoid Data Confusion**: When hiding empty cells, the visual omission of cells might cause screen reader users or visually-impaired individuals to misalign column headers with row values. Consider using standard accessibility hidden text (e.g. `<span class="sr-only">No data</span>` or `.sr-only` helpers) inside "empty" cells to keep table structures coherent for accessibility tools.
- **Maintain High Contrast**: Ensure table headers and border lines remain highly contrast-compliant relative to backgrounds showing through.

---

## Browser Compatibility Notes

- **Full support**: `empty-cells` is fully supported by all modern desktop and mobile browsers.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox table togglers update grid states dynamically. Run standard project tests to confirm compliance:

```bash
npm test
```
