# CSS Grid Subgrid Card Layout Example

This submission demonstrates the use of the CSS Grid Subgrid feature (`grid-template-rows: subgrid`) to align card components across sibling cards in a row.

---

## The Alignment Problem

When rendering a row of cards with varying content lengths:
- Standard flexbox or simple grid layout forces card boxes to match heights.
- However, internal components (e.g. headers, text blocks, action buttons) do not align. A card with a three-line title pushes the description and button lower than the card next to it, creating a disjointed layout.

---

## The Subgrid Solution

CSS Subgrid allows a grid item (like a card) to adopt the row or column definitions of its parent grid container.

By defining a 3-row layout structure on the parent grid:
1. **Row 1:** Header (`auto`)
2. **Row 2:** Body (`1fr`)
3. **Row 3:** Footer (`auto`)

And declaring `grid-template-rows: subgrid` on the cards:
- Each card inherits these rows.
- The browser calculates the height of the tallest component in *any* card for that row, and aligns all other cards to match.

---

## Verification Steps

1. Open `demo.html` in a modern browser (Firefox, Safari, Chrome 117+).
2. Compare the two showcases:
   - **Traditional Grid:** Note how the action buttons at the bottom of the card and headings are offset from each other.
   - **Subgrid Alignment:** Observe how the card headings, description columns, and buttons are aligned perfectly across all cards.
