# CSS Jello-Hover Popover for Product Catalog Layouts

A pure CSS popover component engineered for modern e-commerce and product catalog interfaces. It relies on the CSS `:focus-within` and `:hover` states to reveal a "Quick View" panel with an energetic, wobbly Jello animation.

## Features
- **Pure CSS State**: No JavaScript event listeners are required to toggle the popover. By nesting the popover panel inside the `.ease-popover-container`, standard CSS pseudo-classes (`:hover` and `:focus-within`) handle visibility.
- **EaseMotion Jello Animation**: Utilizes a custom `@keyframes ease-jello` sequence. When the Quick View button is triggered, the popover panel materializes while rapidly scaling and skewing to mimic a lively jello bounce.
- **Product Catalog Aesthetics**: Designed with minimal, clean styling emphasizing product imagery. The UI features crisp typography, white backgrounds, subtle borders, and stark black buttons typical of high-end boutique storefronts.
- **Accessible & Responsive**: Fully keyboard navigable. Tabbing into the hidden Quick View button reveals the trigger, and focusing it automatically triggers the popover to appear, making the inner elements (like Add to Cart) easily reachable without a mouse.

## EaseMotion Classes & Variables
- `.ease-popover-panel.ease-jello-hover`: The class that maps the jello keyframes and transition timings to the popover state.
- `@keyframes ease-jello`: The custom keyframe sequence defining the structural skewing.
- `--ease-jello-duration`: Controls the animation speed (default: `900ms`).
- `--ease-popover-offset-y`: Positions the drop distance of the popover relative to the Quick View trigger button (default: `12px`).

## Usage
Wrap your product's Quick View button and the popover panel within the `.ease-popover-container` to automatically inherit the hover/focus behavior. Adjust the `--ease-jello-duration` at the `:root` level to control the animation's snappiness.

### Quick Start
Open `demo.html` in your browser to view the clean e-commerce product grid and test out the jello-hover popover by hovering over the first product image's "Eye" icon.
