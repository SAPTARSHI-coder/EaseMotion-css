# Interactive Cursor-Proximity Animations

A responsive layout mechanism demonstrating macro-kinetics and interactive layout ripples inside **EaseMotion** utilizing native CSS combinators without any JavaScript overhead.

## Mechanics Explained
- **Active Focus**: The targeted card scales up (`scale(1.15)`) and is brought to the top using `z-index: 5`.
- **Downstream Displacement**: Leverages the general sibling combinator (`~`) to catch subsequent siblings, shifting them rightwards (`translateX(12px)`) and adding a subtle tilt (`rotate(2deg)`).
- **Ambient Contrast**: Utilizes the combined structural logic of `.proximity-grid:hover .proximity-card:not(:hover)` to smoothly fade un-hovered cards, amplifying the active focal point.

## Component Tree
- `demo.html` - Staged interactive grid panel.
- `style.css` - Layout matrices and transform combinators.
- `README.md` - Functional guide.