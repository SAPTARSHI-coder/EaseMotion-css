# Calendar Month Grid

### What does this do?

It lays out a month calendar with weekday headers and day cells on a seven column grid. Today is highlighted, days with events show a dot, and leading blank cells pad the first week so dates line up under the right weekday.

### How is it used?

```html
<div class="calendar">
  <div class="cal-head"><span>July 2026</span></div>
  <div class="cal-grid">
    <span class="dow">Mo</span>
    <span class="pad"></span>
    <button class="day is-today" aria-current="date">10</button>
    <button class="day has-event">16</button>
  </div>
</div>
```

Add `pad` spans before day one to shift the first day to its weekday. Use `is-today` for the current day and `has-event` to show a dot.

### Why is it useful?

Date pickers and schedule views start from a month grid. This lays out a calendar month on a seven column grid with a highlighted today and event markers, using only CSS. Day cells are real buttons with hover and focus styles.
