## What

Interactive demonstration of CSS logical properties (`margin-inline`, `padding-block`, `inset-inline-start`, `border-inline-end`) with a toggle button that switches the document direction between LTR and RTL to show automatic flipping behavior.

## How

Each demo card isolates one logical property. The `dir` attribute on `<html>` is toggled via JavaScript. Logical properties automatically remap to their physical equivalents based on the writing direction. A reference table maps logical properties to their LTR and RTL physical counterparts for clarity.

## Why

Logical properties let authors write layout rules that work across languages and writing modes without overriding direction-specific values. They reduce duplication compared to writing separate `left`/`right` declarations or maintaining RTL-specific stylesheets, and they make internationalisation a first-class concern in CSS.
