# Cell Collapse Expand

A CSS-only grid or table cell collapse/expand animation using `max-height` transitions for smooth content reveal and hide.

## HTML Structure

```html
<div class="ease-cell-collapse-expand">
  <div class="cell-grid">
    <div class="cell-item">
      <div class="cell-header" onclick="this.parentElement.classList.toggle('collapsed')">
        <span>Title</span>
        <span class="cell-icon">▾</span>
      </div>
      <div class="cell-body">
        <p>Content that collapses/expands...</p>
      </div>
    </div>
  </div>
</div>
```

Toggle the `.collapsed` class on `.cell-item` to collapse or expand the cell body.

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--cell-bg` | `#1e293b` | Background color of each cell |
| `--cell-padding` | `16px 20px` | Padding inside the cell header and body |
| `--collapse-duration` | `0.35s` | Duration of the collapse animation |
| `--expand-delay` | `0.05s` | Delay before the expand animation starts |
