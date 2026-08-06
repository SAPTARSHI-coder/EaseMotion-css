# CSS Draw-Border Tabs - Product Catalog Layout

A pure CSS interactive tab component optimized for high-end Product Catalog interfaces, featuring a bold, minimalist "Dual Bracket" border drawing animation.

## Features
- **E-Commerce Aesthetics**: Designed for premium catalogs with stark black-and-white palettes, minimalist typography, and large product photography wrappers.
- **Dual Bracket Draw-Border Interaction**: A highly stylized take on the draw-border effect. When a category filter is selected, two vertical "brackets" `[ ]` draw themselves simultaneously from opposite corners, and then elegantly close horizontally `[≡]` to encapsulate the tab.
- **Pure CSS Sequencing**: The sequential dual-bracket drawing is achieved without JS. It uses precisely calculated `transition-delay` logic on the `width` and `height` properties of the `::before` and `::after` pseudo-elements.
- **Reversible Undraw Logic**: Selecting a new tab perfectly reverses the animation of the previous tab, un-drawing the horizontal caps before retracting the vertical brackets.
- **Product Card Interactions**: Includes robust CSS hover interactions on the catalog grid, featuring scaling image effects and a sliding "Quick Add" button.
- **Keyboard Accessible**: Uses standard HTML hidden radio buttons, allowing full keyboard navigation (Tab & Arrow Keys) to switch catalog filters seamlessly.

## Customization

The drawing physics and filter geometry can be customized via standard CSS custom properties in the `:root`.

```css
:root {
  /* Draw-Border Line Physics */
  --draw-speed: 0.12s;      /* Speed of a single border side drawing */
  --border-thickness: 3px;  /* Bold thickness for e-commerce edge */
  
  /* Layout Dimensions */
  --tab-padding-x: 32px;
  --tab-padding-y: 16px;
}
```

## Architecture Notes
- The "drawing" effect utilizes the `box-sizing: border-box` property on absolute pseudo-elements (`::before` and `::after`).
- **`::before`** is anchored at `bottom: 0; left: 0`. It draws the Left border (via expanding `height`) and the Bottom border (via expanding `width`).
- **`::after`** is anchored at `top: 0; right: 0`. It draws the Right border (via expanding `height`) and the Top border (via expanding `width`).
- By transitioning the `height` on both pseudo-elements simultaneously with a `0s` delay, and then the `width` with a `var(--draw-speed)` delay, the two borders enclose perfectly to form a bounding box.
