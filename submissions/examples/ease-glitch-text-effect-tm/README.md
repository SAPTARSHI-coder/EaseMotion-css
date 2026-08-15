# Glitch Text Effect

Closes #74110

Text with a chromatic-aberration glitch effect — magenta and cyan duplicate layers jitter independently while the original text stays put.

## Technique

`::before` (magenta) covers the top half, `::after` (cyan) covers the bottom half via `clip-path` polygons. Both layers use the `data-text` attribute for content. Each animates with a steps() timing function for a stuttery glitch feel.
