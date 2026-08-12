# Empty State Search

## What does this do?

A search results list whose empty state echoes back the exact query that
produced it — "No results for 'xyz'" — instead of a generic "No results"
message with no indication of what was searched.

## How is it used?

```html
<input type="search" oninput="esSearch(this.value)" />
<ul id="es-results">
  <li class="es-item">Apple</li>
</ul>
<div class="es-empty" id="es-empty" hidden>
  <p>No results for "<span id="es-empty-term"></span>"</p>
</div>
```

`esSearch` toggles each item's `hidden` attribute based on a substring
match, then toggles the empty state's `hidden` attribute based on whether
any items remain visible, writing the current query into
`#es-empty-term`.

## Why is it useful?

A generic "No results" message forces the user to re-read their own search
box to confirm what they typed, which matters more than it sounds on mobile
where the input may have lost focus and the keyboard has closed. Echoing
the query back into the empty state confirms what was searched without
requiring a second look, and gives a natural place to suggest a next step
("try a different spelling") specific to that failed search rather than a
static hint shown regardless of the query.

Toggling the native `hidden` attribute (rather than a `display: none` class)
keeps visibility as one boolean per element with no class-name string that
could be mistyped, and it's what the empty state's own `hidden` starts as
in markup — so a user with JavaScript disabled sees the full unfiltered
list with no broken partial-render state.
