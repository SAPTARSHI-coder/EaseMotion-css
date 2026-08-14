# CSS Holy Grail Layout

1. What does this do? Renders the classic holy grail page composition (header, left navigation sidebar, primary main column, right related-links aside, footer) using CSS Grid.
2. How is it used? Drop `demo.html` next to `style.css`; the `.page` grid names five areas via `grid-template-areas` and reflows into a single stacked column below 768px.
3. Why is it useful? Gives developers a ready-to-use, accessible (skip link, `role`/`aria-label`, keyboard-focusable main) holy grail layout with no JavaScript and `prefers-reduced-motion` support.

Closes #70321
