# Text Overflow Ellipsis Utility

This submission demonstrates and implements the `.ease-text-overflow-ellipsis` typography utility class designed to truncate long heading strings to a single line with trailing `...` text.

---

## Technical Overview

Text wrapping inside structured card components can break visual alignments. The truncation utility is declared using:

```css
.ease-text-overflow-ellipsis {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

This prevents text from wrapping to multiple lines while indicating to users that additional hidden copy exists.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. In the **Without Truncation** card, observe how the long heading wraps to 3 lines, shifting card body paragraphs downwards.
3. In the **With Ellipsis Truncation** card, verify that the heading is truncated cleanly to a single line with `...` at the end, maintaining card layout alignment.
