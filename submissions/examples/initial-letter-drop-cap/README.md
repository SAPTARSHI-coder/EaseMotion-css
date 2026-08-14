# CSS initial-letter Drop Cap

1. **What does this do?** Demonstrates the CSS `initial-letter` property for creating native typographic drop caps without pseudo-element hacks.

2. **How is it used?** Add `initial-letter: 3 1` to the `::first-letter` of a paragraph. The first number is the letter height in lines, the second is the sink depth.

3. **Why is it useful?** Drop caps traditionally require floated spans, complex calculations, or hard-coded font sizes. `initial-letter` gives editorial-quality drop caps with one declarative line of CSS.
