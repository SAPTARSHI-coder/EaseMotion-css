# CSS Depth Charge Button

A button featuring a complex concentric ring animation that simulates a depth charge sinking inward when clicked, using pure CSS keyframes, 3D transforms, and staggered transition delays.

## Features
- Pure CSS and HTML implementation without any JavaScript listeners.
- **Component Architecture**: 
  - **The 3D Stage**: The parent `.depth-charge-btn` uses `perspective: 800px` and `transform-style: preserve-3d` to create a 3D stage. This allows the nested child rings to physically move backwards into the Z-axis.
  - **The Concentric Rings**: Four `<div class="ring">` elements are absolutely positioned in the center of the button. They are sized using `calc()` to be progressively larger than the button itself, spaced out by a `--ring-gap` CSS custom property.
  - **The Sinking Animation**: When the user clicks and holds the button (`:active` pseudo-class), a CSS transform pushes the rings deep into the background (`translateZ(-300px)`) and scales them down (`scale(0.5)`).
  - **Staggered Delays for Fluidity**: To make the animation look like a cascading funnel rather than a flat group of rings, staggered `transition-delay` values are applied. On `:active`, the outermost ring drops first (`0.00s`), followed sequentially by the inner rings. When the click is released, the delays are reversed so the innermost ring bubbles back up to the surface first.
- Fully accessible semantic structure. The decorative rings are hidden from screen readers using `aria-hidden="true"`, and the button includes an `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by freezing all 3D transitions for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click and hold the "Deploy" button to watch the rings sink into the Z-axis.

## Files
- `demo.html`: The HTML structure defining the button and the nested concentric rings.
- `style.css`: The styling, 3D perspective setup, and staggered `:active` transition delays.
