# CSS 3D-Flip Pricing Table — Gaming Hub Layout

A pure CSS/HTML pricing table for gaming platform layouts. Each plan card flips in 3D on hover to reveal its full feature list on the back face, with a highlighted "most popular" tier in the middle.

## Files

- `demo.html` — Clean HTML5 markup for the pricing section
- `style.css` — All styling, 3D flip logic, and responsive rules
- `README.md` — This file

## Features

- **3D card flip on hover**: front shows plan name and price, back reveals the full feature list using `transform-style: preserve-3d` and `backface-visibility: hidden`
- **Featured plan highlight**: middle "Pro Gamer" tier has an accent border, glow, and a "Most popular" badge
- **Checkmark feature list**: back-face features use a custom `::before` checkmark instead of default bullets
- **Fully responsive**: 3-column grid collapses to a single centered column on smaller viewports
- **Accessible motion fallback**: under `prefers-reduced-motion: reduce`, the flip animation is disabled and the back content is shown directly on hover instead, so features remain reachable without relying on 3D transforms

## CSS Techniques Used

- `perspective` on the grid container plus `transform-style: preserve-3d` on each card for the 3D flip effect
- `backface-visibility: hidden` to hide the non-active face during rotation
- `rotateY(180deg)` triggered on `:hover` of the card wrapper
- `clamp()` for responsive heading sizing
- A single `prefers-reduced-motion` block that swaps the 3D flip for a simple hover-reveal

## Usage

Open `demo.html` directly in a browser — no build step or dependencies required.

## Customization

- Update plan names, prices, and feature lists directly in `demo.html`
- Change the accent gradient in `.featured-badge` and `.btn-primary` to match your brand
- Adjust flip speed via the `transition` duration on `.flip-card-inner`