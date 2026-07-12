# Agenda List

### What does this do?

It shows a day agenda that lists events down a time column, each with a start time, a colored accent bar, a title, and a location. The current event is highlighted with a Now badge.

### How is it used?

```html
<ol class="agenda">
  <li class="ag-item is-now">
    <time>10:00</time>
    <div class="ag-card blue"><strong>Design sync</strong><small><svg>...</svg>Video call</small></div>
  </li>
</ol>
```

Each item is a two column row of the time and an event card. Give the card a color class (`blue`, `cyan`, `green`, `amber`) for its left bar, and add `is-now` to the item that is happening now.

### Why is it useful?

Calendars and schedules show a day view as a list of timed events. This lays out an agenda with a time column, colored event cards, and a now highlight, using only CSS and inline SVG so there are no external assets.
