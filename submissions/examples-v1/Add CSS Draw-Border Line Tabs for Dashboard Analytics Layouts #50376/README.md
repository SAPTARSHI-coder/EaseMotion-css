# CSS Draw-Border Tabs - Dashboard Analytics

A pure CSS interactive tab component featuring a highly sophisticated, sequential "snake" border drawing animation, optimized for Dashboard Analytics interfaces.

## Features
- **Dashboard Aesthetics**: Styled for analytical clarity with functional grays, stark primary accents, and responsive metric grid layouts that feel at home in modern SaaS environments.
- **Draw-Border Line Interaction**: When a tab is selected, its bounding box border is literally "drawn" around it sequentially in a clockwise direction.
- **Pure CSS Sequencing**: The sequential drawing (Top → Right → Bottom → Left) is achieved purely through precise mathematical `transition-delay` calculations on the `width` and `height` properties of the `::before` and `::after` pseudo-elements.
- **Reversible Undraw Logic**: Un-selecting a tab perfectly reverses the animation counter-clockwise, smoothly "un-snaking" the border before disappearing.
- **Keyboard Accessible**: Uses standard HTML hidden radio buttons, allowing full keyboard navigation (Tab & Arrow Keys) with custom dash-styled focus rings integrated into the dashboard styling.
- **Fully Responsive**: The tabs wrap fluidly on smaller screens, and the dashboard metrics collapse into a single-column view to preserve legibility.

## Customization

The drawing physics and tab geometry can be easily customized via standard CSS custom properties in the `:root`.

```css
:root {
  /* Draw-Border Line Physics */
  --draw-speed: 0.15s;      /* Speed of a single border side drawing */
  --border-thickness: 2px;  /* Thickness of the drawn line */
  
  /* Layout Dimensions */
  --tab-padding-x: 24px;
  --tab-padding-y: 12px;
}
```

## Architecture Notes
- The "drawing" effect utilizes the `box-sizing: border-box` property on absolute pseudo-elements (`::before` and `::after`).
- **`::before`** handles the Top (drawn by expanding `width`) and Right (drawn by expanding `height`) borders.
- **`::after`** handles the Bottom (expanding `width` from the right) and Left (expanding `height` from the bottom) borders.
- Delays are calculated dynamically using `calc(var(--draw-speed) * multiplier)` to ensure one line finishes exactly as the next begins, resulting in a flawless unbroken snake animation.
