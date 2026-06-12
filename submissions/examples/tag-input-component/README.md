# Tag Input Component

## What does this do?

Adds a styled CSS-only tag input wrapper where chips are displayed inline with a text input.

## How is it used?

```html
<div class="ease-tag-input">
  <span class="ease-tag">
    HTML
    <button type="button" aria-label="Remove HTML tag">×</button>
  </span>

  <span class="ease-tag">
    CSS
    <button type="button" aria-label="Remove CSS tag">×</button>
  </span>

  <input type="text" placeholder="Add a tag..." aria-label="Add a tag" />
</div>
```
