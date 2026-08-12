# CSS field-sizing Auto-Growing Input Example

This submission demonstrates the implementation of content-aware auto-growing text inputs and textareas using the new CSS `field-sizing` property.

---

## Technical Overview

Traditionally, making text inputs or textareas grow to fit their typed content required attaching JavaScript listeners to monitor character length and recalculate element heights/widths on the fly.

The CSS `field-sizing` property solves this natively:

```css
.auto-grow-textarea {
  field-sizing: content; /* Dynamically adjusts width/height to contents */
  min-height: 48px;
  max-height: 250px;
}
```

Applying `field-sizing: content` ensures that elements expand as lines wrap, and shrink when lines are deleted, providing native responsiveness.

---

## Verification Steps

1. Open `demo.html` in Chrome or Edge.
2. In the **Auto-Growing Sizing** column:
   - Type additional words into the text input. Verify the input box extends horizontally to fit the text.
   - Type multiple paragraphs into the textarea. Verify it expands vertically instead of displaying scrollbars.
   - Delete text inside the controls. Verify they shrink back to their minimum size.
