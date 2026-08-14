# CSS Responsive Cards Auto-fit

A hardware-accelerated, JavaScript-free responsive card grid that automatically reflows its layout based on available screen width without using any CSS `@media` queries for the grid columns.

## Features
- Pure CSS and HTML implementation. The entire responsive logic is handled by modern CSS Grid.
- **Component Architecture**: 
  - **Auto-Fit Grid Magic**: The core of this layout is the `.card-grid` container utilizing `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`. 
    - `auto-fit` tells the browser to create as many columns as will fit in the container.
    - `minmax(280px, 1fr)` ensures that no card ever shrinks below `280px`. If the container isn't wide enough for multiple 280px cards, it wraps them to the next row. If there is extra space, the `1fr` allows the cards to expand equally to fill the remaining width.
  - **Card Hover Effects**: Each `.feature-card` features a smooth hover state that elevates the card (`transform: translateY(-5px)`), increases the `box-shadow`, and slightly scales up the SVG icon inside (`transform: scale(1.1)`) for a premium, interactive feel.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a clean, enterprise-SaaS aesthetic with distinct accent colors for each card's icon container (blue, purple, green, orange, pink). Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`, which dynamically adjusts the card backgrounds, borders, and reduces the opacity of the icon backgrounds to maintain contrast.
- Fully accessible semantic structure. The cards use the `<article>` tag for semantic meaning, and SVGs are handled appropriately. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the hover elevation and scaling transitions are disabled.

## Usage
Open `demo.html` in your browser. Resize your browser window horizontally. Watch how the grid smoothly transitions from 5 columns, down to 3, down to 2, and finally to a single column on mobile sizes, all without a single breakpoint defined in the CSS. Hover over the cards to see the smooth elevation and icon scaling animations.

## Files
- `demo.html`: The HTML structure defining the CSS Grid container and the semantic `<article>` cards with inline SVGs.
- `style.css`: The styling, the `repeat(auto-fit, minmax())` grid logic, the `:hover` transition physics, and the responsive dark mode support.
