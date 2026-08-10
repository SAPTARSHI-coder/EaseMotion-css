# Date Range Picker

### What does this do?

It shows a calendar with a selected date range. The start and end days are filled circles, the days between them sit on a continuous highlight band, and a footer summarizes the range and the number of nights. The header has month navigation controls.

### How is it used?

```html
<div class="drp-grid">
  <span class="d rng rng-start">12</span>
  <span class="d rng">13</span>
  <span class="d rng rng-end">18</span>
</div>
```

The month is a seven column grid with blank leading cells. Range days get the `rng` class for the highlight band, while `rng-start` and `rng-end` add a filled circle and round the outer edge, so the selection reads as one continuous range.

### Why is it useful?

Booking, travel, and analytics tools let users pick a start and end date. This provides the calendar and range highlight styling with pure CSS, ready to drive from a date library.
