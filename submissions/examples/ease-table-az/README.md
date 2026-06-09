# Table Component

### What does this do?
Adds `ease-table-az` — a responsive HTML table component with hover row highlighting, striped rows, bordered, and compact variants. On mobile (sub-640px) the `.responsive` class converts rows into stacked cards with `data-label` headers.

### How is it used?
The maintainer should copy `style.css` into `components/table.css` and import it.

```html
<table class="ease-table-az striped responsive">
  <thead>
    <tr>
      <th>Name <span class="ease-sort-icon-az">&#8593;</span></th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">Alice Chen</td>
      <td data-label="Role">Designer</td>
    </tr>
  </tbody>
</table>
```

Variants: `.striped`, `.bordered`, `.compact`, `.responsive` (stackable).

### Why is it useful?
1. **Row hover** — subtle background shift on `:hover` for scannability
2. **Responsive** — card layout on small screens using `data-label` attributes, no JS
3. **Flexible** — four orthogonal modifier classes compose into any style needed
