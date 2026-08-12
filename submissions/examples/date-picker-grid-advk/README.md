# Date Picker Grid

## What does this do?

A month calendar grid built as a semantic table, with distinct treatments for
today, the selected date, and unavailable dates.

## How is it used?

```html
<table class="dpg">
  <caption>August 2026</caption>
  <thead><tr><th scope="col"><abbr title="Monday">M</abbr></th></tr></thead>
  <tbody><tr>
    <td><button type="button" aria-current="date" class="is-today">12</button></td>
    <td><button type="button" aria-pressed="true" class="is-sel">14</button></td>
    <td><button type="button" disabled>21</button></td>
  </tr></tbody>
</table>
```

## Why is it useful?

Calendars are usually a CSS grid of divs, which throws away the one thing a
calendar structurally is: a table of days indexed by weekday. With `scope="col"`
on the weekday headers, a screen reader announces "Thursday, 14" when the user
lands on a cell — with a div grid it announces "14", and the user has no idea
which day of the week that is.

`<abbr title="Monday">M</abbr>` keeps the header visually compact while supplying
the full weekday name to assistive technology, rather than announcing the letter
"M".

Today and selected are deliberately different treatments — a ring versus a fill —
because they are different states that can coexist on different dates, and using
the same emphasis for both makes the calendar ambiguous. `aria-current="date"` and
`aria-pressed` carry each to assistive technology so neither depends on the visual.

Disabled dates get `line-through` in addition to muted colour, so unavailability
is legible without relying on a contrast difference that is easy to miss.
