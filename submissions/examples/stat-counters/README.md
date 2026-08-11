# CSS-Only Stat Counter Grid

A premium numbers statistic grid that counts up automatically from 0 when loaded, utilizing EaseMotion's native CSS `@property` count-up system. Includes structured grids, counting animations, and descriptive labels beneath each value.

## EaseMotion CSS Classes Showcased

This feature submits a self-contained prototype demonstrating native `@property` based count-up stat boards.

### Classes:
- `.ease-stat-grid`: Container grid layout for multiple statistic counters.
- `.ease-stat-box`: Stat card configuring borders, paddings, and alignment.
- `.ease-count-up`: Targets the `@property --ease-count` mechanism. Configurable via `--ease-count-target`.

### Usage in HTML:
```html
<div class="ease-stat-grid">
  <div class="ease-stat-box">
    <span class="ease-count-up" style="--ease-count-target: 95;">%</span>
    <span class="ease-stat-label">System Performance</span>
  </div>
</div>
```

---
Created as a contribution to EaseMotion CSS. Open `demo.html` in any browser to view the interactive prototype!
