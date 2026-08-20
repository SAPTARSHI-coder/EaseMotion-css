# Input Size Variants Extension Fix (Issue #14075)

## What does this do?
Demonstrates size modifier classes (`.ease-input-sm`, `.ease-input-lg`) extended to target `.ease-textarea` and `.ease-select` in addition to `.ease-input`.

## How is it used?
```html
<textarea class="ease-textarea ease-input-sm"></textarea>
<select class="ease-select ease-input-lg">...</select>
```

## Why is it useful?
Developers expect size modifiers to work consistently across all form control types. Without this fix, textarea and select elements ignore the size classes entirely. Extending the size modifiers ensures UI consistency for all input fields.
