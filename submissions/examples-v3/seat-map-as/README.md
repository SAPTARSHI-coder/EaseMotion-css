# Seat Map

### What does this do?

It shows a cinema style seat selection map. Rows of seats sit below a curved screen, with an aisle gap in the middle. Available seats can be toggled on and off, selected seats turn green, and taken seats are dimmed and disabled. It is fully interactive with no JavaScript.

### How is it used?

```html
<div class="sm-row">
  <span class="sm-rl">A</span>
  <label class="seat"><input type="checkbox" /><span></span></label>
  <label class="seat taken"><input type="checkbox" disabled /><span></span></label>
</div>
```

Each seat is a checkbox inside a label. The hidden checkbox drives the styling: `input:checked + span` marks a selected seat, and a `taken` class plus `disabled` renders an unavailable one. An empty `sm-aisle` span creates the walkway.

### Why is it useful?

Ticketing for cinemas, flights, and events needs a seat picker. This provides one as an accessible checkbox grid styled entirely with CSS, so seats can be chosen without any script.
