# Textarea Resize Label Fix (Issue #14073)

## What does this do?
Shows correct min-height and max-height on textarea to prevent resize handle from overlapping the label.

## How is it used?
```html
<div class="ease-field">
  <label class="ease-field-label">Message</label>
  <textarea class="ease-textarea"></textarea>
</div>
```

## Why is it useful?
Adding `max-height` prevents users from dragging the textarea resize handle upward to overlap the label, maintaining a clean form layout.
