# Empty Table State Row Example

A reusable and accessible empty state component designed specifically for HTML tables. This component provides a visually appealing way to inform users when a table has no data, while providing a clear call-to-action to help them proceed.

## Key Features
- **Table-Friendly Layout**: Uses `colspan` to span across the entire table width seamlessly.
- **Micro-interactions**: Subtle `emptyStateIn` animation that eases the content into view.
- **Responsive Design**: Automatically adjusts padding and icon size for mobile viewports.
- **Accessibility**: Optimized for screen readers and respects `prefers-reduced-motion` settings.
- **Pure CSS/HTML**: Zero dependencies, fully self-contained.

## How to Use
1. Add the `.empty-table-row` class to a `<tr>` element within your `<tbody>`.
2. Ensure the `<td>` inside has a `colspan` matching your table's column count.
3. Use the `.empty-state` div and its children as shown in the `demo.html`.

```html
<tr class="empty-table-row">
  <td colspan="4">
    <div class="empty-state">
      <!-- Icon, Message, and Action here -->
      <h3 class="empty-state-message">No records found</h3>
    </div>
  </td>
</tr>
```

## Directory Structure
- `demo.html`: The interactive demonstration.
- `style.css`: All styles and animations for the empty state.
