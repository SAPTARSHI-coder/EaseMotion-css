# CSS Collapsible Table on Mobile

## 1. What does this do?
This component renders a responsive data table that displays as a standard tabular layout on desktop and dynamically collapses into a structured card list view on mobile screens without breaking accessibility layers.

## 2. How is it used?
Configure standard table grids, adding custom `data-label` parameters matching the headers:
```html
<table class="responsive-table">
  <thead>
    <tr>
      <th scope="col">Invoice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <!-- data-label maps header titles on mobile -->
      <td data-label="Invoice">#INV-9281</td>
    </tr>
  </tbody>
</table>
```

## 3. Why is it useful?
It introduces mobile-first editorial card layouts to grid tables natively using CSS displays and pseudo-element data injection, ensuring structured readability and avoiding heavy column responsive scripts.
