# 3D Book Page Turn Effect

A CSS-only interactive 3D book that opens its cover when hovered.

## Preview
Open `demo.html` in your browser. You will see a book rotated in 3D space. Hover over the book, and the front cover will gracefully swing open, revealing the pages inside.

## Implementation
- A `.book` container provides a 3D context using `perspective`.
- The `.cover` element has `transform-origin: left`, which anchors its rotation to the spine of the book.
- When the parent `.book` is `:hover`ed, the `.cover` undergoes a `transform: rotateY(-135deg)`, swinging it open to the left.
- Subtle `box-shadow` properties give the book depth and a sense of curvature near the spine.
