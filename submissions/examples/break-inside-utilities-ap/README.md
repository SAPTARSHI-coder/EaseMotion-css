# EaseMotion CSS — Break Inside Utilities

This directory implements core utility classes for controlling the CSS `break-inside` property in EaseMotion CSS.

---

## What is Break Inside?

The `break-inside` property defines how page, column, or region breaks behave inside generated box containers.

### Why is this crucial?

When using multi-column layouts (`column-count`), the browser naturally tries to balance column heights. If a content block (like a card, image, or list item) is positioned where a column wraps, the browser will split the element in half. The top half remains in the first column, and the bottom half wraps to the next column. This disrupts design harmony and impairs readability.

Similarly, during printing or PDF rendering, a document page boundary might split a table row or card component in half.

Applying `break-inside: avoid;` tells the browser that the element is a single cohesive unit. If it doesn't fit completely within the remaining column or page height, it will wrap in its entirety to the next section.

---

## Utility Classes Reference

EaseMotion CSS provides clean classes mapping to the standard break-inside actions:

| Utility Class                | CSS Equivalent                           | Description                                                     |
| :--------------------------- | :--------------------------------------- | :-------------------------------------------------------------- |
| `.break-inside-auto`         | `break-inside: auto !important;`         | Browser default: allows column/page breaks inside the element.  |
| `.break-inside-avoid`        | `break-inside: avoid !important;`        | Avoids any break (page, column, region) inside the element box. |
| `.break-inside-avoid-page`   | `break-inside: avoid-page !important;`   | Avoids page breaks inside the element (print-focused).          |
| `.break-inside-avoid-column` | `break-inside: avoid-column !important;` | Avoids column breaks inside the element (column-focused).       |

> [!NOTE]
> For legacy browser compatibility, standard `.break-inside-avoid` and `.break-inside-avoid-column` classes automatically include legacy `-webkit-column-break-inside` and `page-break-inside` fallbacks.

---

## Usage Examples

### 1. Intact Masonry/Column Grid Cards

When constructing a multi-column newspaper or dashboard layout, apply `.break-inside-avoid` to ensure cards remain intact:

```html
<div class="column-container cols-3">
  <!-- Pinned elements -->
  <div class="masonry-card break-inside-avoid">
    <h4>Tech News</h4>
    <p>This card will not split across column heights.</p>
  </div>
</div>
```

### 2. Intact Print/PDF Tables

Prevent table rows from splitting across physical pages when users print the webpage:

```html
<tr class="break-inside-avoid-page">
  <td>Product Row Data</td>
  <td>$129.99</td>
</tr>
```

---

## Accessibility (WCAG 2.1) & Readability Best Practices

- **Improve Reading Comprehension**: For readers with cognitive or visual impairments, splitting a unified block of content (like a paragraph, blockquote, or card description) across columns creates a highly disruptive reading flow. Keeping sections intact ensures users can read content continuously.
- **Form Containment**: Always apply `.break-inside-avoid` to form inputs, legend containers, and button groups in multi-column layouts to prevent form controls from separating from their text labels.

---

## Browser Compatibility Notes

- **Modern Browsers (Chrome, Firefox, Safari, Edge)**: Full native support for `break-inside`.
- **Legacy Browsers**: Cross-platform support is guaranteed by incorporating older `-webkit-column-break-inside` and `page-break-inside` fallbacks inside the core CSS utility classes.

---

## Verification & Testing

Verify that your styles load correctly by launching `demo.html` in your web browser. Ensure the sandbox column settings update layout boundaries dynamically. Run standard project tests to confirm compliance:

```bash
npm test
```
