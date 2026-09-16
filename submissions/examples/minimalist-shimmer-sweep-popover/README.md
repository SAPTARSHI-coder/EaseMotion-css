# CSS Shimmer-Sweep Popover (Minimalist Tech)

A pure CSS interactive popover component designed for Minimalist Tech Layouts. It features a premium "Shimmer-Sweep" animation that simulates a beam of light washing across the popover card immediately after it is revealed.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **The Shimmer-Sweep Effect**: This effect is achieved using a dedicated `.shimmer-overlay` element positioned inside the popover but rendered above the background.
- The overlay utilizes a complex, tilted `linear-gradient` (`105deg`) that fades from transparent, to a semi-transparent accent color, and back to transparent, creating the "beam" of light.
- Initially, the overlay is positioned entirely off-screen to the left (`left: -100%`).
- When the popover is hovered and revealed, an `@keyframes` animation (`shimmer-sweep`) is triggered on the overlay, translating its `left` property to `200%`. This physically drags the gradient beam across the face of the popover card.
- An `animation-delay: 0.15s` ensures the shimmer sweep does not begin until the popover has almost finished its initial fade/slide-up entrance, creating a highly polished, sequential feel.
- The parent `.popover-content` utilizes `overflow: hidden` to ensure the sweeping beam doesn't bleed outside the card's rounded borders. A `.popover-inner` wrapper with a solid background and `z-index: 2` ensures the text remains perfectly legible and on top of the sweeping light.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive shimmer-sweep animation is completely disabled via `display: none !important`. The popover's spatial translation is stripped, and the interaction safely falls back to a simple opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a mock product card layout. Hover over the small circular "i" (info) trigger badge located next to the product title. Watch as the detailed specifications popover snaps into view, followed a fraction of a second later by a premium beam of light sweeping across its surface.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical nesting required to isolate the `.shimmer-overlay` below the text but above the background.
- `style.css`: The styling, popover mechanics, and the complex `linear-gradient` / `@keyframes` driving the shimmer sweep.
