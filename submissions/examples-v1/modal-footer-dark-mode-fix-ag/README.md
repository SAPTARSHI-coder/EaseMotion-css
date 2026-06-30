# Modal Footer Dark Mode Fix (Issue #14074)

## What does this do?
Demonstrates a modal footer with a proper dark mode background override that adapts the neutral-50 background to a dark surface.

## How is it used?
```html
<div class="ease-modal-footer">...</div>
```

## Why is it useful?
Without a dark mode override, the modal footer renders as bright light grey inside a dark modal, breaking the visual theme consistency. This fix ensures the footer assumes an appropriate dark surface color.
