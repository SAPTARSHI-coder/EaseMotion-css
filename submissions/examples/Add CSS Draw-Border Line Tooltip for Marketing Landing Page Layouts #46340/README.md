# CSS Draw-Border Line Tooltip (Marketing Landing Page Aesthetics)

This example demonstrates a purely CSS-animated Tooltip featuring a captivating **Draw-Border Line** interaction transition. Styled specifically for modern Marketing Landing Pages, it uses fluid curves, glassmorphism, and bold typography.

It natively integrates with the **EaseMotion CSS framework** by leveraging its core design tokens, variables, and utility classes.

## Features
- **EaseMotion Integration**: Built utilizing `var(--ease-*)` variables for semantic colors, typography, border-radii, spacing, and transition speeds.
- **EaseMotion Classes**: Uses the `.ease-squish-button` utility class on the trigger button for satisfying micro-interactions.
- **Draw-Border Animation**: Instead of simple opacity changes, a dynamic perimeter line traces the exact rounded bounding box of the tooltip on hover. This is accomplished using an absolute positioned SVG and `stroke-dashoffset` transitioning on `pathLength="100"`.
- **Marketing Aesthetics**: Premium gradients, `.ease-shadow-xl`, deep blur filters (`backdrop-filter`), and strong call-to-action color mapping.
- **Modern CSS APIs**: Uses `allow-discrete` and `@starting-style` for graceful, performant container enter/exit transitions.

## Custom Properties
```css
:root {
  --draw-duration: 0.8s;
  --tooltip-scale-start: 0.95;
}
```
