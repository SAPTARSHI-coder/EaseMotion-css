# Chip Removable

## What does this do?

Proposes adding `.ease-chip-removable` and `.ease-chip-remove` to `components/chip.css`. The removable chip adds an inline X button inside the chip label so individual chips can be dismissed without a separate delete control.

## How is it used?

```html
<div class="ease-chip-group">
  <input type="checkbox" id="chip-a" class="ease-chip-input" />
  <label class="ease-chip ease-chip-removable" for="chip-a">
    JavaScript
    <button
      type="button"
      class="ease-chip-remove"
      aria-label="Remove JavaScript filter"
    >
      <svg width="10" height="10" viewBox="0 0 10 10">
        <path
          d="M1 1L9 9M9 1L1 9"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </label>
</div>
```

## Why is this useful?

Enables self-contained chip UIs where users can dismiss individual chips by tapping the X button. Common in tag management, multi-select filters, and notification tag UIs. Keeps the markup localized to the chip group without requiring external delete controls.

## Tech Stack

- Pure CSS for hover states and focus styles
- Inline SVG X icon (no CDN dependency)
- JavaScript handles chip removal (CSS drives the visual states)

## Browser Support

All modern browsers.

## Accessibility Notes

- Remove button has `aria-label` describing what will be removed
- `:focus-visible` styling on the remove button for keyboard users
- Screen readers announce the button via `aria-label`
