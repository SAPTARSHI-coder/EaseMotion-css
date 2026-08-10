# CSS Zoom-In Card Grid (Minimalist Tech)

A pure CSS interactive grid component designed for Minimalist Tech Layouts. It features a modern "Zoom-In" hover effect that scales the internal content while simultaneously revealing a contextual action overlay.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.zoom-card` serves as a masking container using `overflow: hidden`.
- On hover, the inner `.card-content` scales up (`transform: scale(1.05)`) using a smooth `cubic-bezier` timing function. By scaling the inner content rather than the card itself, the outer border and shadow footprint remain stable and crisp on the page.
- Simultaneously, a hidden `.card-overlay` slides up from the bottom edge (`translateY(20px)` to `0`) and fades into view, presenting primary call-to-action buttons.
- Clean, structured aesthetic utilizing the `Inter` font, subtle gradient masks for the overlay, and minimalist iconography.
- Fully responsive CSS Grid layout that automatically adapts columns based on the viewport width using `auto-fit`.
- Mobile-first approach: on narrow screens, the hover interaction is disabled, and the action buttons are permanently visible at the bottom of the card for immediate touch access.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial scaling and translation are entirely stripped, transforming the complex interaction into a safe, simple opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a grid of product capability cards. Hover over any card to watch the content gracefully enlarge while a call-to-action button slides up from the bottom edge. Shrink the browser width to see how the layout adapts for touch interfaces.

## Files
- `demo.html`: The HTML structure for the grid layout, detailing the necessary nested `card-content` and `card-overlay` containers.
- `style.css`: The styling, CSS Grid configurations, and the pure CSS `transform: scale()` logic driving the internal zoom mechanics.
