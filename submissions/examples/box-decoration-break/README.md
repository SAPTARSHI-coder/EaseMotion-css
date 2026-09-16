## What

This example demonstrates the `box-decoration-break` CSS property — specifically the difference between `clone` and `slice` values — on inline `<span>` elements that wrap across multiple lines. With `clone`, each line fragment gets the full background, border-radius, padding, and border independently. With `slice` (the default), decorations are applied as if the element were a single unbroken box, cutting off rounded corners and padding at line breaks.

## How

Two spans inside consecutive paragraphs use identical styles (gradient background, 8px border-radius, padding, and a colored border) but differ only in their `box-decoration-break` value: one uses `clone`, the other `slice`. A side-by-side comparison grid highlights the visual difference. Additional edge cases show nested clone spans and multiple inline elements within the same paragraph. The CSS includes the `-webkit-` prefixed version for broader browser support.

## Why

`box-decoration-break: clone` is essential for creating visually consistent inline UI elements — like highlighted search terms, tags, or inline badges — that span multiple lines. Without it, wrapped fragments lose their rounded corners and per-fragment padding, creating an awkward appearance. This property ensures that each line fragment looks intentional, improving readability and design polish for inline styled elements.
