# CSS Ripple-Wave Card Grid (Minimalist Tech)

A pure CSS interactive grid component designed for Minimalist Tech Layouts. It features a tactile "Ripple-Wave" click effect on the cards, simulating a material ink ripple without requiring any JavaScript event listeners or coordinate calculations.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.ripple-card` elements utilize a cleverly configured `::after` pseudo-element combined with the `:active` CSS state.
- When the user clicks (and holds) the card, the `:active` state instantly expands (`scale(2)`) and reveals (`opacity: 1`) a circular background shape anchored to the center of the card, with `transition: 0s`.
- When the user releases the click, the `:active` state is removed. The element then falls back to its default state, which defines a slow `transform` and `opacity` transition, creating the smooth fade-out ripple effect.
- The cards feature an `overflow: hidden` constraint to ensure the ripple respects the border-radius of the card container.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, and gentle hover-lift physics.
- Fully responsive CSS Grid layout that automatically adapts columns based on the viewport width using `auto-fill`.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (the ripple effect and hover translation are stripped).

## Usage
Open `demo.html` in your browser. You will see a grid of integration cards. Hover over them to see the icon highlight and the card lift slightly. Click anywhere on a card to witness the blue ripple instantly expand from the center, and slowly fade away when you release the mouse button.

## Files
- `demo.html`: The HTML structure for the grid layout and the anchor tags acting as the interactive cards.
- `style.css`: The styling, CSS Grid configurations, and the pure CSS `:active` logic driving the ripple-wave mechanics.
