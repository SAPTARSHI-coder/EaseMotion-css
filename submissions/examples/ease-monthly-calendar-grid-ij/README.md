# Monthly Calendar Grid (#36822)

A monthly calendar grid with a "pop" scale animation on date-cell hover and a highlighted today cell.

## CSS Custom Properties

| Prop | Default | Description |
|------|---------|-------------|
| `--calendar-bg` | `#16161c` | Calendar container background |
| `--day-hover-bg` | `#2a2a3e` | Hover background for date cells |
| `--today-color` | `#6c5ce7` | Background color for the current day |
| `--pop-duration` | `0.3s` | Duration of the hover pop animation |

## Usage

```html
<div class="calendar" style="--calendar-bg: #16161c; --today-color: #6c5ce7;">
  <div class="calendar-header">…</div>
  <div class="weekday-row">…</div>
  <div class="days-grid">…</div>
</div>
```

## Features

- CSS Grid layout for days
- Pop-scale effect on day hover
- Distinct style for today and other-month days
- Fully customizable via CSS variables
