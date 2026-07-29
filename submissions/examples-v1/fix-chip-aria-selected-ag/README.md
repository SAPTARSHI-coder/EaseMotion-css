# Fix ease-chip aria-pressed for Screen Readers

## What does this do?
Adds `role="button"` and `aria-pressed` to toggle chips so screen readers
announce the selected/deselected state when a chip is activated.

## How is it used?
```html
<button class="ease-chip" role="button" aria-pressed="false"
  onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed')==='false'); this.classList.toggle('is-selected')">
  Design
</button>
```

## Why is it useful?
Without ARIA state, blind users activating a chip get no feedback that
anything changed. `aria-pressed` maps the visual state to semantics. Fixes: #35819
