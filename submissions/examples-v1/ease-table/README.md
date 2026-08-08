# Table Component

A responsive, accessible table component with multiple variants for EaseMotion CSS.

## Features

- `.ease-table` — Base table with clean styling
- `.ease-table-striped` — Alternating row background colors
- `.ease-table-hover` — Row highlight on hover
- `.ease-table-bordered` — Borders on all cells
- `.ease-table-compact` — Smaller padding for dense data
- `.ease-table-responsive` — Horizontal scroll wrapper for small screens
- Sort indicator styling on `<th>` (visual only, uses `aria-sort` attribute)
- Dark mode compatible via `prefers-color-scheme: dark` and `[data-theme="dark"]`

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css">

<div class="ease-table-responsive">
  <table class="ease-table ease-table-striped ease-table-hover">
    <caption>Optional caption</caption>
    <thead>
      <tr>
        <th aria-sort="ascending">Name</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alice</td><td>Designer</td></tr>
      <tr><td>Bob</td><td>Developer</td></tr>
    </tbody>
  </table>
</div>
```

## Variants

| Class | Description |
|---|---|
| `.ease-table` | Base table |
| `.ease-table-striped` | Alternating row backgrounds |
| `.ease-table-hover` | Row highlight on hover |
| `.ease-table-bordered` | Borders on all cells |
| `.ease-table-compact` | Smaller padding |
| `.ease-table-responsive` | Scroll wrapper |

Fixes #12454
