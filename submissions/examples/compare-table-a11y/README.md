# Accessible Compare Table (Header Scoping & Keyboard Scrolling)

This submission demonstrates how to implement a fully accessible Data Table (commonly used for pricing or feature comparisons) that complies with WCAG 2.1 AA standards, supporting screen readers, keyboard navigation, and high contrast modes.

## Core Accessibility Features

### 1. Table Caption (The Accessible Name)

Every data table should have a `<caption>` element as its first child. This acts as the accessible name for the table, allowing screen reader users to quickly understand what data the table contains before deciding to navigate into it.

```html
<table class="compare-table">
    <caption class="sr-only">Feature comparison between Basic, Pro, and Enterprise plans</caption>
    <!-- ... -->
</table>
```
*(If the table title is already visible as an `<h1>` immediately preceding the table, you can visually hide the caption using an `.sr-only` utility class.)*

### 2. Strict Header Scoping (`scope="col"` and `scope="row"`)

For complex tables, screen readers rely heavily on the `scope` attribute to understand the relationship between data cells and their headers. When a user navigates to a specific cell (e.g., the "Storage" for the "Pro" plan), the screen reader needs to announce both the row header and the column header.

- **Column Headers:** Use `<th scope="col">` inside the `<thead>`.
- **Row Headers:** The first cell of every data row in the `<tbody>` MUST be a `<th scope="row">`, not a standard `<td>`.

```html
<!-- The Row Header -->
<tr>
    <th scope="row">Storage</th> <!-- Defines what the row is about -->
    <td>10 GB</td>
    <td>50 GB</td> <!-- Screen reader announces: "Storage, Pro, 50 GB" -->
</tr>
```

### 3. Keyboard Scrollable Regions

A common responsive design pattern for data tables is to allow them to overflow horizontally on smaller screens. 
**If a container overflows and requires scrolling to see content, it MUST be keyboard focusable.** Otherwise, keyboard-only users (who cannot use a mouse or touch screen to swipe) will be unable to scroll the table to see the hidden columns.

To fix this, wrap the table in a container with `tabindex="0"` and `role="region"`. Provide an accessible name linking it to the table caption.

```html
<div class="table-responsive-wrapper" tabindex="0" role="region" aria-labelledby="table-caption">
    <table>...</table>
</div>
```

### 4. Accessible Boolean Icons

Compare tables frequently use Checkmarks and X's. These SVG icons are completely invisible to screen readers. We must explicitly hide the SVGs (`aria-hidden="true"`) and provide visually-hidden text fallbacks.

```html
<td>
    <svg aria-hidden="true" class="icon-check">...</svg>
    <span class="sr-only">Included</span>
</td>
```

### 5. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, standard background colors and subtle border colors are stripped away or unified. For a table, this can result in a confusing wall of floating text. We use the `forced-colors` media query to apply explicit borders using `CanvasText`, ensuring the grid structure remains perfectly visible.

```css
@media (forced-colors: active) {
    .compare-table th,
    .compare-table td {
        border-bottom: 1px solid CanvasText;
    }
}
```
