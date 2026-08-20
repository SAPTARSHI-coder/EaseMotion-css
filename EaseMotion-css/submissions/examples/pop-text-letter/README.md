# Pop Text Letter

1. What does this do? On page load, each letter of the headline pops up one at a time with a springy overshoot; hovering the headline replays the sequence.
2. How is it used? Wrap each letter in a `<span>` inside a `.pop-text` element and set an incrementing `--i` inline style on each span to control the stagger delay. Use `.pop-text__space` for whitespace spans.
3. Why is it useful? It adds a lively, attention-grabbing entrance animation to headings using only CSS (the overshoot comes from a `cubic-bezier` easing), with no JavaScript, and it respects `prefers-reduced-motion`.
