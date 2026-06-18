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