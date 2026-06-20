# Accordion Component

This submission implements an accessible accordion component with smooth expand/collapse animation (Issue **#14159**).

## Features

- CSS-only accordion using `<input type="radio">` — no JavaScript required
- Exclusive mode: only one item open at a time (shared `name` attribute)
- Smooth expand/collapse via `max-height` + `opacity` transition
- Accessible: `<label>` linked to `<input>` via `for` attribute, keyboard navigable (Tab + Space/Enter)
- Focus-visible outlines on interactive elements
- Dark theme with accent color on active item
- `prefers-reduced-motion` disables transitions

## Classes

| Class | Description |
|-------|-------------|
| `.accordion` | Container for accordion items |
| `.accordion-item` | Individual collapsible section |
| `.accordion-trigger` | Hidden radio input |
| `.accordion-header` | Clickable label |
| `.accordion-content` | Collapsible content area |

## Usage

```html
<div class="accordion">
  <div class="accordion-item">
    <input type="radio" name="acc" id="q1" class="accordion-trigger" />
    <label class="accordion-header" for="q1">Question?</label>
    <div class="accordion-content">
      <p>Answer here.</p>
    </div>
  </div>
</div>
```

## Files

- `demo.html` — Interactive FAQ-style accordion with 4 items
- `style.css` — Accordion styles, transitions, responsive layout, reduced-motion
- `README.md` — This documentation
