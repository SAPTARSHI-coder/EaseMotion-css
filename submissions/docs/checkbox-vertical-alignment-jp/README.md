# Checkbox Vertical Alignment Fix

Fixes the issue where custom checkboxes (`.ease-checkbox`) are vertically misaligned with their adjacent label text, especially noticeable when the text wraps to multiple lines.

**What does this do?**
Applies a flexbox layout to the `.ease-checkbox-wrapper` with `align-items: flex-start`, and uses a carefully calculated top margin on the checkbox to perfectly align it with the vertical center of the first line of text.

**How is it used?**
Wrap your checkbox and label text inside the wrapper:

```html
<label class="ease-checkbox-wrapper">
  <input type="checkbox" class="ease-checkbox" />
  <span class="ease-checkbox-label">Label text goes here...</span>
</label>
```

**Why is it useful?**
It resolves a common UI polish issue (Issue #49968), ensuring that forms look professional and structurally sound regardless of font size or text wrapping on smaller screens.
