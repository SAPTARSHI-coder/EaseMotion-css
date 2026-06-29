# Color Adjust Utilities

An overview and guide for using CSS `print-color-adjust` utility classes to regulate background color rendering during print operations.

## Core Questions

### What does this do?

These utility classes map CSS `print-color-adjust` (and its deprecated alias `color-adjust`) to specify whether browsers should preserve custom background colors and gradients when printing documents or displaying content in ink-saving modes.

### How is it used?

Apply the utility classes directly to elements (such as tables, status badges, hero banners, or certificate frames) whose color scheme must be preserved when printed:

```html
<div class="invoice-summary print-color-adjust-exact">
  <!-- Preserves table header background colors when printed -->
  <table>
    ...
  </table>
</div>
```

### Why is it useful?

By default, web browsers strip background colors and gradients from pages when printed to conserve printer ink. While useful for text documents, this breaks layout legibility on invoices (stripping table headers), certificates (removing gold frames), and brand presentations (removing logo backgrounds).

---

## Utility Classes

| Class                         | CSS Declaration                | Description / Use Case                                                                                  |
| :---------------------------- | :----------------------------- | :------------------------------------------------------------------------------------------------------ |
| `.color-adjust-auto`          | `print-color-adjust: auto;`    | Relies on default browser ink-saving printing logic (strips backgrounds).                               |
| `.color-adjust-exact`         | `print-color-adjust: exact;`   | Overrides ink-saving, forcing colors and backgrounds to render exactly.                                 |
| `.print-color-adjust-economy` | `print-color-adjust: economy;` | Saves print ink/toner (alias of `auto`).                                                                |
| `.print-color-adjust-exact`   | `print-color-adjust: exact;`   | Overrides ink-saving, forcing colors and backgrounds to render exactly (alias of `color-adjust-exact`). |

_Note: The utilities define both `-webkit-print-color-adjust` and `print-color-adjust` to guarantee compatibility across Chrome, Safari, and Edge._

---

## Detailed Explanation of `print-color-adjust`

The `print-color-adjust` property acts as a hint to the browser's printing layout engine.

- **Ink Saving Behavior**: When set to `economy` or `auto`, the browser converts light colored background fills to transparent or white, and shifts white text to dark gray to maintain print readability without flooding the paper with black or colored ink.
- **Fidelity Behavior**: When set to `exact`, the browser honors the exact CSS definitions for backgrounds, gradients, borders, and colors, printing the document exactly as it appears on the screen.

---

## Usage Examples

### 1. High-Fidelity Certificate Border (Exact)

Ensure custom borders and background images are not stripped on printed certificates:

```html
<div
  class="award-certificate print-color-adjust-exact"
  style="background-image: url('border-frame.jpg');"
>
  <h2>Certificate of Achievement</h2>
</div>
```

### 2. Muted Invoice Rows (Economy)

Keep invoice row backgrounds stripped for standard printouts, letting the browser decide:

```html
<tr class="print-color-adjust-economy" style="background-color: #f8fafc;">
  <td>Standard item details</td>
  <td>$120.00</td>
</tr>
```

### 3. Preserved Status Badges (Exact)

Ensure status badges (like green "Paid" or red "Overdue" markers) remain color-coded on physical prints:

```html
<span
  class="status-badge print-color-adjust-exact"
  style="background-color: #ef4444; color: white;"
>
  OVERDUE
</span>
```

---

## Common Use Cases

1. **Financial Invoices & Receipts**: Preserving status indicators, table header backgrounds, and total column borders.
2. **Official Reports & Charts**: Keeping colored layout sections or bars on data charts readable.
3. **Certificates & Diplomas**: Preserving decorative background frames, stamp overlays, and watermark seals.
4. **Corporate Branding PDF Exports**: Guaranteeing brand-colored headers and logos print accurately.

---

## Browser Support Notes

CSS `print-color-adjust` has excellent compatibility across all modern layout engines:

- Chrome 17+ (under `-webkit-print-color-adjust` until v98+)
- Safari 6+ (under `-webkit-print-color-adjust` until v15.4+)
- Firefox 97+ (full support, previous versions supported `color-adjust`)
- Edge 79+ (under `-webkit-print-color-adjust` until v98+)
- iOS Safari 6+
- Android Browser & Chrome for Android

_Note: Internet Explorer does not support `print-color-adjust` or `color-adjust`._
