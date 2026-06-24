# Table Layout Utilities

Configure the column-sizing algorithm on HTML data tables using standard utility classes.

This module provides simple classes to switch between the browser's automatic layout algorithm (content-driven elastic columns) and fixed layout algorithm (rigid, developer-defined spacing).

---

## Table of Contents

1. [What does this do?](#what-does-this-do)
2. [Utility Class Reference](#utility-class-reference)
3. [Why is it useful?](#why-is-it-useful)
4. [How is it used?](#how-is-it-used)
   - [Automatic Table Layout](#automatic-table-layout)
   - [Fixed Table Layout with Truncation](#fixed-table-layout-with-truncation)
5. [Technical Details: Auto vs. Fixed](#technical-details-auto-vs-fixed)
   - [Automatic Layout (2-Pass Rendering)](#automatic-layout-2-pass-rendering)
   - [Fixed Layout (1-Pass Rendering)](#fixed-layout-1-pass-rendering)
6. [Cell Truncation Rules](#cell-truncation-rules)
7. [Responsive Design (Mobile Support)](#responsive-design-mobile-support)
8. [Tech Stack](#tech-stack)
9. [Contribution Notes](#contribution-notes)

---

## What does this do?

Configure the layout algorithms for `<table>` grids. In CSS, the `table-layout` property determines how a browser calculates column widths:

1. **Auto**: Columns expand dynamically to fit the longest content. Excellent for small tables with fluid data.
2. **Fixed**: Columns stick strictly to specified widths or split table space evenly, completely ignoring cell contents. Crucial for truncating long content and improving rendering speed.

---

## Utility Class Reference

| Utility Class | CSS Property Applied              | Behavior                                                                 |
| :------------ | :-------------------------------- | :----------------------------------------------------------------------- |
| `table-auto`  | `table-layout: auto !important;`  | Columns adjust dynamically to content size (Default browser behavior).   |
| `table-fixed` | `table-layout: fixed !important;` | Columns remain locked to designated widths, ignoring cell content sizes. |

---

## Why is it useful?

1. **Content Control**: In databases, users often insert very long comments or descriptions. An automatic table will stretch that column wide, squishing other columns and breaking the page layout. Fixed tables lock columns in place, keeping columns readable.
2. **Ellipsis Truncation**: You cannot use `text-overflow: ellipsis;` inside tables unless the table algorithm is fixed. These utilities let you cleanly clip long descriptions.
3. **Performance Optimization**: Fixed tables allow the browser to calculate column sizes in a single pass based on the first row of widths. This renders massive databases (thousands of rows) significantly faster than automatic tables.
4. **Responsive Layouts**: Fixed tables allow columns to keep their sizes inside horizontal scrolling wrappers, preventing them from shrinking to unreadable sizes on mobile screens.

---

## How is it used?

### Automatic Table Layout

To let columns size themselves dynamically based on content (ideal for simple metadata grids):

```html
<table class="table-auto" style="width: 100%;">
  <thead>
    <tr>
      <th>User</th>
      <th>Role</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Adrian Panda</td>
      <td>Architect</td>
      <td>Bhubaneswar</td>
    </tr>
  </tbody>
</table>
```

### Fixed Table Layout with Truncation

To enforce strict, unyielding column widths (e.g. 10%, 20%, 55%, 15%) and truncate long text:

```html
<table class="table-fixed" style="width: 100%;">
  <thead>
    <tr>
      <th style="width: 10%;">ID</th>
      <th style="width: 20%;">Product</th>
      <th style="width: 55%;">Description</th>
      <th style="width: 15%;">Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#4092</td>
      <td>Smart Sensor Hub</td>
      <!-- We wrap text in a div using the truncate utility -->
      <td>
        <div
          class="truncate-cell"
          title="Highly sensitive IoT environment analyzer for server rack arrays."
        >
          Highly sensitive IoT environment analyzer for server rack arrays.
        </div>
      </td>
      <td>In Stock</td>
    </tr>
  </tbody>
</table>
```

---

## Technical Details: Auto vs. Fixed

### Automatic Layout (2-Pass Rendering)

When using `table-layout: auto`, the browser employs a two-pass algorithm:

- **Pass 1**: The browser reads every single cell in a column to calculate its minimum and maximum content width.
- **Pass 2**: Once all sizes are determined, it runs a calculation to allocate column spacing and renders the cells.

_Drawbacks_: If a table has 5,000 rows, the browser must wait for the entire table content to load and process before displaying the first row.

### Fixed Layout (1-Pass Rendering)

When using `table-layout: fixed`, the browser employs a single-pass algorithm:

- **Pass 1**: The browser reads the table's width, detects the widths specified on the first row of headers (`<th>`) or columns (`<col>`), and sets the layout. The content of cell data in subsequent rows is ignored during calculation.

_Advantages_: The browser can start rendering table rows immediately as they stream in, resulting in a faster load time and smoother UX.

---

## Cell Truncation Rules

To successfully truncate cell content with an ellipsis, you must follow these rules:

1. **Table Class**: The table wrapper must have the class `.table-fixed` (or `table-layout: fixed`).
2. **Width Definition**: The columns must have specified widths (either percentages or pixels) on the header `<th>` cells or `<col>` elements.
3. **Truncation Class**: The text must be wrapped inside a block element (like a `<div>`) that has these rules:
   ```css
   .truncate-cell {
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
   }
   ```
   _(Note: Applying truncation rules directly to `<td>` elements can fail in some legacy Webkit browsers, which is why wrapping text in a `<div>` container is the recommended standard)._

---

## Responsive Design (Mobile Support)

Fixed tables require a horizontal wrapper to remain accessible on mobile screens. If a fixed table has columns totaling 800px but the mobile screen is only 360px wide, the content will clip or break.

Always wrap your table in an overflow container:

```html
<div style="overflow-x: auto; width: 100%;">
  <table class="table-fixed" style="width: 800px;">
    <!-- Table columns and contents -->
  </table>
</div>
```

This configuration ensures the column layouts stay rigid, and users can swipe horizontally on mobile screens to read all fields without column distortion.

---

## Tech Stack

- **HTML**: Semantic data structures.
- **CSS**: Layout properties, fixed-table spacing, and truncation text rules.
- **Zero Dependencies**: Vanilla CSS styling.

---

## Contribution Notes

- The classes are added in an isolated folder to prevent merging conflicts.
- Utility styling is standardized to fit both custom configurations and global framework compilation.
