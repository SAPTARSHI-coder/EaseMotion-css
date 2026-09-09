# Handwritten Underline Text

1. What does this do? Draws an underline beneath a headline like a marker swipe, animating the stroke from left to right on load (and replaying on hover).
2. How is it used? Wrap the headline text in a `.handwritten-underline` span and include the inline SVG with a hand-drawn path. The path length is driven by `stroke-dasharray` / `stroke-dashoffset`.
3. Why is it useful? It adds an organic, hand-crafted emphasis to headings using only CSS and a static SVG path, with no JavaScript, and respects `prefers-reduced-motion`.
