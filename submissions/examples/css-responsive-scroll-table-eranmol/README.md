# CSS Responsive Scroll Table

A wide data table that scrolls horizontally on mobile with a sticky first column, built entirely with pure CSS.

## What does this do?

It provides a responsive data table that works on all screen sizes. On desktop, the table displays all columns normally. On narrow screens, the table scrolls horizontally while the first column stays pinned to the left edge using `position: sticky`, so the user always knows which row they are looking at.

## How is it used?

Drop `demo.html` and `style.css` into your project. Wrap your table in a scrollable container:

```html
<div class="table-container" role="region" aria-label="Data table" tabindex="0">
  <table class="scroll-table">
    <thead>
      <tr>
        <th class="scroll-table__th--sticky">Name</th>
        <th>Department</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="scroll-table__td--sticky">Jane Cooper</td>
        <td>Engineering</td>
        <td><span class="scroll-table__badge scroll-table__badge--active">Active</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

The key is adding `scroll-table__th--sticky` / `scroll-table__td--sticky` to the first column cells and wrapping the table in a container with `overflow-x: auto`.

## Why is it useful?

Responsive data tables are one of the trickiest UI patterns in CSS. This component gives developers a drop-in solution that scrolls horizontally on mobile while keeping the most important column visible. It includes `role="region"` and `tabindex="0"` for keyboard accessibility, status badges, alternate row striping, dark mode support, and CSS custom properties for theming.
