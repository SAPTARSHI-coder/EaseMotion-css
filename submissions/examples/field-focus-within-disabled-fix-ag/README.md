# Field Focus-Within Disabled Input Fix (Issue #14067)

## What does this do?
Demonstrates the corrected `:focus-within` label color rule using `:not(:has(:disabled))` to prevent the label from turning primary color when the field contains a disabled input.

## How is it used?
```html
<div class="demo-field">
  <label class="demo-field-label">Label</label>
  <input class="demo-input" disabled>
</div>
```

## Why is it useful?
The `:has()` pseudo-class allows checking child state from a parent selector. By adding `:not(:has(:disabled))`, the focus-within label color only activates for fields with focusable, non-disabled inputs — preventing unexpected label color changes on disabled form fields.
