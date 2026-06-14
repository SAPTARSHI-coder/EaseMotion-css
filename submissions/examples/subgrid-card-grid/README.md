# Subgrid Card Grid

### What does this do?
Demonstrates a card grid using CSS `grid-template-rows: subgrid` to align content vertically across rows. Each card spans 3 grid rows (image, title+description, footer). With subgrid, the title baselines, description lengths, and footer positions stay perfectly aligned horizontally — even when content amounts differ card-to-card.

### How is it used?
Open `demo.html` in a browser that supports subgrid (Firefox 71+, Chrome 117+, Safari 16+). The `.card-grid` defines 3 columns. Each `.card` sets `grid-row: span 3` and `grid-template-rows: subgrid`, inheriting the parent's row tracks. A `@supports not (grid-template-rows: subgrid)` fallback provides a reasonable alternative for older browsers.

### Why is it useful?
Subgrid solves a long-standing CSS Grid limitation — aligning children of sibling grid items across rows. Without subgrid, each card's internal layout is independent, producing misaligned footers and uneven whitespace. This example provides a production-ready, progressively enhanced card grid that looks polished across all browsers while leveraging modern CSS where available.
