# CSS Shimmer-Sweep Pricing Table (Minimalist Tech)

A pure CSS pricing table component designed for Minimalist Tech Layouts. It features a modern, clean design with a continuous "Shimmer-Sweep" border animation used to draw attention to the "Popular" or "Pro" pricing tier.

## Features
- Pure CSS and HTML (Zero JavaScript required for the continuous animation).
- **Minimalist Tech Aesthetic**: Clean layouts, high-contrast typography, semantic checkmark iconography, and disabled styling for excluded features.
- **The Highlighted Tier System**: 
- The "Professional" tier is visually elevated using the `.card-highlight` class. This class slightly scales up the card (`transform: scale(1.05)`) and applies a vibrant blue glow (`box-shadow`) to immediately draw the eye.
- **The Shimmer-Sweep Border Animation**: 
- Instead of a standard 1px border, the highlighted card utilizes a dedicated `.shimmer-border` element. This element sits absolutely positioned behind the main card content (`.card-content`).
- The `.shimmer-border` utilizes a complex `conic-gradient` background to create a sweeping "beam" of light (`var(--accent-blue)` fading into `var(--accent-indigo)`).
- The `.card-content` element sits directly on top of this gradient, sized precisely 2px smaller on all sides. Because the `.card-content` has a solid white background, it acts as a mask, revealing only the outer 2px of the rotating `conic-gradient` underneath.
- The `sweep-rotation` keyframes infinitely rotate the conic gradient 360 degrees, creating the illusion of a beam of light continuously sweeping around the perimeter of the pricing card.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous sweeping animation is completely disabled. It gracefully falls back to a static, solid gradient border (`linear-gradient(135deg, var(--accent-blue), var(--accent-indigo))`) to maintain the visual hierarchy without the motion. Hover scale effects on the other cards are also disabled.

## Usage
Open `demo.html` in your browser. You will see a standard SaaS three-tier pricing layout (Standard, Professional, Enterprise). The center "Professional" tier is scaled up, features a "Most Popular" badge, and utilizes the continuous shimmer-sweep animation on its border to attract the user's attention.

## Files
- `demo.html`: The HTML structure for the pricing grid, detailing the layout for the standard cards and the specific nested structure required for the `.card-highlight` variant to achieve the border effect.
- `style.css`: The styling, tech design tokens, hover effects for the standard cards, and the specific `@keyframes` and `conic-gradient` logic driving the shimmer-sweep effect on the popular tier.
