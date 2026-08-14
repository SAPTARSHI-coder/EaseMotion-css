# Calendar Date Grid

An interactive calendar month-view component. Dates are rendered in a CSS Grid, and clicking a date triggers a scale/pop animation while updating the selection.

## Usage

Structure a container with `.calendar`, a header with `.cal-nav` arrows and `.cal-month-year`, a `.cal-weekdays` row, and a `.cal-grid` of `.cal-day` buttons.

```html
<div class="calendar">
  <div class="cal-header">
    <button class="cal-nav">&lsaquo;</button>
    <h2 class="cal-month-year">January 2026</h2>
    <button class="cal-nav">&rsaquo;</button>
  </div>
  <div class="cal-weekdays">...</div>
  <div class="cal-grid">
    <button class="cal-day">1</button>
    <!-- ... -->
  </div>
</div>
```

Add the `is-selected` class to highlight a date.

## Custom Properties

| Property              | Default  | Description                      |
| --------------------- | -------- | -------------------------------- |
| `--cal-duration`      | `0.3s`   | Transition and animation timing  |
| `--cal-selected-bg`   | `#4f46e5`| Selected date background         |
| `--cal-hover-bg`      | `#e0e7ff`| Date hover background            |
| `--cal-text-color`    | `#1e293b`| Default date text color          |
| `--cal-header-color`  | `#0f172a`| Month/year heading color         |

## States

- **Default** — plain date button with hover
- **is-selected** — filled background with `cal-pop` keyframe animation (scale to 1.25× and back)
- **Empty cells** — `.cal-day--empty` placeholders for days outside the current month
