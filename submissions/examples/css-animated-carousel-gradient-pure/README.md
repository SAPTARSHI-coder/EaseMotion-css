# Animated Carousel: Gradient

A smooth, CSS-only infinite scrolling marquee featuring vibrant, interactive gradient cards.

## Features
- Pure CSS and HTML implementation. Absolutely no JavaScript required for the infinite scrolling loop.
- **Component Architecture & Styling Mechanics**: 
  - **The Infinite Loop Technique**: The HTML contains two identical sets of 5 cards side-by-side inside `.carousel-track`. The CSS animation (`scroll-left`) translates the track to the left. The magic happens by translating the track exactly the distance of *one set* of cards (`--scroll-distance = 5 * (width + gap)`). When the animation reaches 100%, the track is instantly reset to 0%, but because the second set of cards looks identical to the first, the user perceives a seamless, infinite loop.
  - **Vibrant Gradient Cards**: Each card uses a distinct CSS `linear-gradient`. On hover, the cards pop out using `transform: translateY(-10px) scale(1.05)` with a bouncy `cubic-bezier` timing function, and their `filter: brightness()` is slightly increased.
  - **Interactive Pausing**: The continuous animation is automatically paused (`animation-play-state: paused`) when the user hovers over the carousel with a mouse, or focuses inside it with a keyboard, allowing them to read the cards or interact with them.
  - **Seamless Edges**: `.fade-overlay` elements are positioned absolutely on the left and right sides of the carousel wrapper. They use `linear-gradient` to blend from the background color (`#0f172a`) to `transparent`. `pointer-events: none` is used so they don't block clicks on the cards underneath.
- Fully accessible semantic structure. The wrapper uses `role="region"` and an `aria-label`. The duplicated set of cards is hidden from screen readers using `aria-hidden="true"` so that content isn't read twice. Honors the `prefers-reduced-motion` accessibility standard by disabling the marquee animation and instead rendering a static, wrapping flex grid of the first set of cards.

## Usage
Open `demo.html` in your browser. You will see a continuous row of brightly colored gradient cards scrolling from right to left. Hover over any card to pause the carousel and see the bouncy hover interaction.

## Files
- `demo.html`: The HTML structure defining the track, the duplicated sets of cards, and the edge fade overlays.
- `style.css`: The styling, the vibrant `linear-gradient` definitions, and the specific `@keyframes` math required to pull off the CSS-only infinite loop.
