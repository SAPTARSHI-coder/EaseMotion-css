# Responsive Data Table

## What does this do?

Adds a self-contained responsive data table demo with uppercase headers, striped rows, hover highlighting, status pills, and a horizontal scroll wrapper.

## How is it used?

```html
<div class="table-wrap" tabindex="0" aria-label="Project table">
  <table class="data-table striped">
    <thead>
      <tr>
        <th scope="col">Project</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Atlas UI</td>
        <td><span class="status success">Live</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

## Why is it useful?

Tables are common in dashboards and admin panels, and this pattern keeps dense data readable while preserving keyboard access and responsive overflow behavior.
