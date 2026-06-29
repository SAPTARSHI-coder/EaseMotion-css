# CSS View Transitions API Utility Classes

This submission introduces utility classes designed to work with the revolutionary View Transitions API, allowing for App-like page morphing natively in the browser.

## Bug / Feature Description
Traditionally, animating a small thumbnail image on a "List Page" into a large hero banner on a "Detail Page" required complex JS libraries (like Framer Motion) to calculate the initial coordinates, destination coordinates, and math for the interpolation (FLIP animations). The View Transitions API handles this at the browser-engine level automatically.

## Fix / Implementation Details
- **`view-transition-name`**: Added utilities like `.ease-vt-hero-image`, `.ease-vt-hero-title`, and `.ease-vt-card-container`. By assigning the exact same `view-transition-name` to an element in State A and an element in State B, the browser automatically morphs them when a transition is triggered.
- **`::view-transition-group`**: Added global timing overrides to make the animation duration slower and use a smooth `cubic-bezier` easing.
- Included a JS snippet in the demo showcasing how to trigger the DOM update using `document.startViewTransition()`.

## How to Test
1. Open `demo.html` in a modern browser (Chrome 111+, Edge 111+, Safari 18+).
2. Click anywhere on the "Retro Console Revival" card.
3. Observe how the small image seamlessly scales up into the large banner, the title glides and scales up to its new position, and the container morphs, creating a smooth App-like transition.
4. Click the "X" button in the top right of the hero banner to see the transition perfectly reverse back to the list layout.
