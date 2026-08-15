
# Empty Table State Row

## What does it do?
A self-contained empty state component for tables. Shows an icon,
a message, and a primary action button when no records are available.
Animates in smoothly using CSS keyframes.

## How is it used?
```html
<table class="ease-table">
  <thead>
    <tr>
      <th>Invoice</th>
      <th>Status</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="ease-empty-table-row">
      <td colspan="4">
        <div class="ease-empty-state">
          <span class="ease-empty-state-icon">🧾</span>
          <p class="ease-empty-state-title">No invoices found</p>
          <p class="ease-empty-state-desc">Create your first invoice to get started.</p>
          <button class="ease-empty-state-action">+ New Invoice</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

## Classes
- `.ease-table` — base table styles
- `.ease-empty-table-row` — empty state row wrapper
- `.ease-empty-state` — animated container
- `.ease-empty-state-icon` — large icon/emoji
- `.ease-empty-state-title` — heading text
- `.ease-empty-state-desc` — description text
- `.ease-empty-state-action` — primary action button

## Features
- Smooth entrance animation (420ms ease)
- Respects prefers-reduced-motion
- Uses CSS custom property tokens
- Pure HTML + CSS, no JavaScript

## Preview
Open `demo.html` directly in browser.
=======
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

