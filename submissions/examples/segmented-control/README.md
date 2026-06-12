# CSS-Only Segmented Control

## What does this do?

Renders a row of mutually exclusive toggle buttons (a segmented control) using only CSS — no JavaScript. Selecting one segment deselects all others. Includes a default bordered variant and a pill-style variant.

---

## How is it used?

Use a `<fieldset>` with the class `em-segmented`. Place a hidden `<input type="radio">` immediately before each `<label>` — the `:checked + label` selector drives the active state:

```html
<fieldset class="em-segmented" role="group" aria-label="View mode">
  <input type="radio" name="view" id="view-list" value="list" checked />
  <label for="view-list">List</label>

  <input type="radio" name="view" id="view-grid" value="grid" />
  <label for="view-grid">Grid</label>

  <input type="radio" name="view" id="view-map" value="map" />
  <label for="view-map">Map</label>
</fieldset>
```

For the pill variant, add `em-segmented--pill`:

```html
<fieldset
  class="em-segmented em-segmented--pill"
  role="group"
  aria-label="Theme"
>
  <input type="radio" name="theme" id="theme-light" value="light" checked />
  <label for="theme-light">Light</label>

  <input type="radio" name="theme" id="theme-dark" value="dark" />
  <label for="theme-dark">Dark</label>
</fieldset>
```

**Accessibility notes:**

- Use `role="group"` and `aria-label` on the `<fieldset>` to describe the control to screen readers
- Keyboard navigation works natively — arrow keys move between segments
- `focus-visible` ring is applied for keyboard users only

---

## Why is it useful?

Segmented controls are a staple of both mobile and desktop UI — view switchers, time-range pickers, filter tabs. Implementations almost always reach for JavaScript. This submission shows the complete pattern needs only CSS: hidden radios for state, `<label>` elements for the visible surface, and `:checked + label` for the selected style. Zero JavaScript, native keyboard support, accessible by default.
