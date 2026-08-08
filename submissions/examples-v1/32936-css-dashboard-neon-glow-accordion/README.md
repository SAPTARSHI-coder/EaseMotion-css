# CSS Responsive Dashboard Neon Glow Accordion

A pure CSS animated accordion component utilizing a highly requested "Neon Glow" interaction transition synchronized with vertical grid expansion. Styled specifically for **Responsive Dashboard** layouts, this component focuses on sleek dark mode panels, metric cards, and glowing data visualizations.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `grid-template-rows` transitions.
- **Neon Glow Interaction:** When a dashboard section is selected, its border, icons, and internal mock charts seamlessly transition into a bright, glowing active state, acting as a clear contextual indicator.
- **Responsive Dashboard Aesthetics:** Features a professional slate dark mode palette, grid-based metric card layouts, and CSS-only mock charts (bars and nodes) that inherit the parent accordion's neon color theme (Blue, Purple, Orange).
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes. Fully responsive down to mobile widths using CSS Grid and Flexbox.

## CSS Custom Properties
```css
:root {
    --glow-timing: 0.4s;
    --expand-timing: 0.5s;
    
    /* Neon Glow Themes */
    --neon-blue: #3b82f6;
    --neon-purple: #a855f7;
    --neon-orange: #f97316;
}
```
