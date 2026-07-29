# Tab Input Deprecated clip Fix (Issue #14089)

## What does this do?
Replaces `clip: rect(0, 0, 0, 0)` with the modern `clip-path: inset(50%)` for visually hiding the tab radio inputs while keeping them accessible.

## How is it used?
```css
/* DEPRECATED */
.ease-tab-input { clip: rect(0, 0, 0, 0); }

/* FIXED */
.ease-tab-input { clip-path: inset(50%); }
```

## Why is it useful?
The `clip` property is deprecated in the CSS Masking specification and will eventually be removed from browser support. `clip-path: inset(50%)` achieves the same visual hiding effect using a modern, non-deprecated property that passes CSS linters and accessibility auditing tools without warnings.
