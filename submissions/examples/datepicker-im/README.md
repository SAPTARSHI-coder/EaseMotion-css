# Animated Date Picker

## What does this do?
A complete styling layer for a calendar-style date picker — header with month navigation, weekday row, day grid, and footer actions. Includes states for today, selected, in-range, and muted (adjacent month) days, with smooth hover, selection, and popover entrance animations.

## How to use it
```html
<div class="ease-datepicker">
  <div class="ease-dp-header">
    <button class="ease-dp-nav">‹</button>
    <div class="ease-dp-title">June 2026</div>
    <button class="ease-dp-nav">›</button>
  </div>

  <div class="ease-dp-weekdays">
    <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
  </div>

  <div class="ease-dp-grid">
    <!-- One button per day cell -->
    <button class="ease-dp-day">1</button>
    <button class="ease-dp-day ease-dp-day--today">18</button>
    <button class="ease-dp-day ease-dp-day--selected">17</button>
    <button class="ease-dp-day ease-dp-day--in-range">16</button>
    <button class="ease-dp-day ease-dp-day--muted">31</button>
  </div>

  <div class="ease-dp-footer">
    <button class="ease-dp-action ease-dp-action--ghost">Clear</button>
    <button class="ease-dp-action ease-dp-action--primary">Apply</button>
  </div>
</div>
```

## Day states
| Class | Meaning |
|---|---|
| `.ease-dp-day` | Default day cell |
| `.ease-dp-day--today` | Outlined ring to mark today |
| `.ease-dp-day--selected` | Filled, with a spring "pop" entrance animation |
| `.ease-dp-day--in-range` | Highlighted background for range selections |
| `.ease-dp-day--muted` | Dimmed, for adjacent-month days |

## Input + Popover variant
```html
<div class="ease-dp-input-wrap">
  <label class="ease-dp-input-label">Select date</label>
  <div class="ease-dp-input-field">📅 June 17, 2026 ⌄</div>

  <div class="ease-datepicker ease-datepicker--popover">
    <!-- same calendar markup -->
  </div>
</div>
```
Toggle `.ease-datepicker--open` on click to show/hide the popover with a spring scale+fade entrance.

## Why it fits EaseMotion CSS
This is a styling layer only — date math, navigation logic, and value binding are left to the developer's JS. The class names map cleanly onto any calendar-generation logic. Extends the framework's UI kit with a highly requested, composable primitive, with `prefers-reduced-motion` support throughout.
