# Calendar Week View

An animated calendar week view component with sliding day cell transitions when navigating between weeks. Each cell slides in with a staggered delay based on its column position.

## HTML Structure

```html
<div class="ease-calendar-week-view">
  <div class="week-header">
    <span>Mon</span><span>Tue</span>...<span class="weekend">Sun</span>
  </div>
  <div class="week-body">
    <div class="day-cell">1</div>
    <div class="day-cell today">15</div>
    <div class="day-cell weekend">6</div>
  </div>
</div>
```

Add `class="today"` to the current day cell. Add `class="weekend"` to Saturday/Sunday headers and cells. Set `--cell-order` (0–6) and `--anim-direction` (1 or -1) on the week-body to control animation direction.

## CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--cell-size` | `72px` | Width and height of each day cell |
| `--today-color` | `#4a6cf7` | Background color for today's cell |
| `--weekend-color` | `#94a3b8` | Text color for weekend day cells |
| `--transition-speed` | `0.4s` | Duration of the cell slide-in animation |

## Usage

Add `.ease-calendar-week-view` to a container. The `.week-header` contains day labels, and `.week-body` contains `.day-cell` divs (one per day). Add `.anim-in` to `.week-body` to trigger the entrance animation. Use `--anim-direction` (1 or -1) and `--cell-order` (0–6) on each cell to control slide direction and stagger.
