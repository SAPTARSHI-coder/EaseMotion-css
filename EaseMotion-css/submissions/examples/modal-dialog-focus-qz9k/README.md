# Modal Dialog Focus Trap

## What does this do?

A confirmation dialog with a real keyboard focus trap: opening it remembers
what element had focus beforehand and restores it on close, and Tab/Shift+Tab
wrap between the dialog's first and last focusable elements instead of
escaping into the page underneath.

## How is it used?

```html
<button onclick="mdfOpen()">Open dialog</button>
<div class="mdf-overlay" id="mdf-overlay" hidden onclick="if (event.target === this) mdfClose()"></div>
<div class="mdf-dialog" id="mdf-dialog" role="dialog" aria-modal="true" aria-labelledby="mdf-title" hidden>
  <h2 id="mdf-title">Delete item?</h2>
  <button class="mdf-close" onclick="mdfClose()">Cancel</button>
  <button class="mdf-confirm" onclick="mdfClose()">Delete</button>
</div>
```

`mdfOpen` records `document.activeElement` before showing the dialog and
moving focus to its first control; `mdfKeydown` intercepts `Tab` to keep
focus cycling only through the dialog's own focusable elements, and
`Escape` to close.

## Why is it useful?

A modal without a real focus trap is a common but serious accessibility
failure: a keyboard or screen-reader user can Tab straight through the
dialog's own buttons and land back on content behind the overlay, which is
supposed to be inert while the dialog is open — they end up interacting
with a page they can't currently see the relevant part of. Cycling focus
strictly between the dialog's first and last focusable elements (rather
than only trapping *forward* Tab, a common incomplete implementation)
keeps keyboard navigation contained in both directions.

Restoring focus to whatever was focused *before* the dialog opened —
rather than to `document.body` or nothing — matters just as much on close:
without it, a keyboard user who opened the dialog from a specific button in
a long list loses their place entirely and has to re-navigate from the top
of the page to get back to where they were.
