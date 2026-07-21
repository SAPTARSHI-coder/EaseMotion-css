# Feature Comparison Table

### What does this do?

It lays out a plan comparison table with features down the rows and plans across the columns, showing green check marks and gray dashes in each cell. The featured plan column is tinted and accented. It is built with only CSS.

### How is it used?

```html
<table class="compare">
  <thead>
    <tr><th></th><th>Free</th><th class="is-featured">Pro</th></tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Unlimited projects</th>
      <td class="no">-</td>
      <td class="is-featured"><svg>...</svg></td>
    </tr>
  </tbody>
</table>
```

Add `is-featured` to the header and cells of the plan you want to highlight. Use an inline SVG check for a yes and the `no` class for a dash.

### Why is it useful?

Comparison tables help users pick a plan by scanning features side by side. This styles an accessible data table with proper row and column headers, an accented column, and clear yes and no marks, using only CSS and inline SVG.
