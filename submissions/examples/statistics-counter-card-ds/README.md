# Statistics Counter Card

## Feature overview
A responsive statistics section with four modern cards that animate number values as they enter the viewport.

## Preview description
The demo displays a grid of stat cards for users, projects, satisfaction, and support. Each card fades up into view and counts smoothly from zero to the target value using a requestAnimationFrame-driven animation.

## Folder structure
- `demo.html` — semantic demo page with cards and inline script.
- `style.css` — CSS Grid layout, card styling, responsive behavior, and hover motion.
- `README.md` — explanation of the feature, how it works, and customization options.

## How the counter animation works
- Each `.stat-card` is observed using the Intersection Observer API.
- When the card enters the viewport, the card receives the `.is-visible` class to fade up.
- The counter script triggers once and animates each number from 0 to its target value using `requestAnimationFrame`.
- The animation uses an ease-out cubic progression for a polished counting motion.

## Customization options
- `data-target` — change the target statistic value for each card.
- `--card-duration` — adjust animation timing for hover and fade transitions.
- `--accent` and `--card-bg` — update the accent color and card surface.
- `--radius` — change card border radius.
- `--gap` — modify spacing between cards.
- Card icons may be replaced with emoji, inline SVG, or icon fonts.

## Browser compatibility
This component uses modern browser APIs: CSS Grid, custom properties, Intersection Observer, and requestAnimationFrame. It is compatible with current versions of Chrome, Firefox, Edge, and Safari. For older browsers without Intersection Observer support, the counters may not trigger automatically, but the layout remains functional.
