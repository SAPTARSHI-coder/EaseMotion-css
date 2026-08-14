# CSS Micro-interactions: Minimalist Outline

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on clean, minimalist line-drawing and border manipulation. These interactions provide sharp, accessible feedback for user focus and hover states.

## Features
- Pure CSS and HTML implementation. No JavaScript event listeners or SVG line drawing logic required.
- **Component Architecture**: 
  - **Drawn Outline Button**: Simulates a pen drawing a box around the button on hover. It uses two `::before` and `::after` pseudo-elements positioned at opposite corners. On `:hover`, it transitions their `width` and `height` sequentially (using transition delays) while applying a solid border, creating the illusion of a continuous line being drawn.
  - **Expanding Offset Card**: A highly performant, minimalist focus state utilizing the native CSS `outline` and `outline-offset` properties. Rather than relying on complex `box-shadow` hacks, this interaction simply animates the `outline-offset` from `0px` to `8px` while slightly translating the card up on the Y-axis.
  - **Expanding Underline Input**: A classic material-style minimal input. The input itself has a faint bottom border. A separate `.underline` span is absolutely positioned at `left: 50%` with a width of `0`. When the input receives `:focus`, the span transitions to `left: 0` and `width: 100%`, expanding outward from the center. It also features a pure CSS floating label trick using the `:placeholder-shown` pseudo-class.
  - **Corner Brackets Button**: Small L-shaped brackets that snap into the corners of the button on hover. Achieved using `::before` and `::after` with only two border sides colored (e.g., top and left). They start slightly outside the button (`top: -5px`, `opacity: 0`) and snap into position (`top: 0`, `opacity: 1`) when hovered, while the main button border becomes transparent.
- **Theming**: Configured via CSS Custom Properties. The color palette is strictly high-contrast monochrome (black/white) adapting automatically to system Dark Mode via a `@media (prefers-color-scheme: dark)` query. Typography utilizes `Space Grotesk` for a modern, geometric feel.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling all width, height, and offset transitions for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Interact with the buttons using your mouse (hover) or keyboard (Tab to focus) to see the minimalist outline effects.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 4 minimalist micro-interactions.
- `style.css`: The styling, the pseudo-element geometry, the sequential `transition-delay` logic, and the dark mode media queries.
