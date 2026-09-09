# Interactive 3D Perspective Card Deck

An advanced showcase demonstrating stacked card decks that dynamically expand, hover-skew, and alter perspective depth based on user interaction.

## What does this do?
This demo displays a stacked deck of cards. When hovered, the deck fanned out with custom 3D rotation, depth offsets, and shadow adjustments, providing a premium tactile feel.

## How is it used?
1. Link `style.css` in your HTML file.
2. Construct the layout using card deck container classes:
   ```html
   <div class="deck-container">
     <div class="card card-1"></div>
     <div class="card card-2"></div>
     <div class="card card-3"></div>
   </div>
   ```
3. Custom CSS variables enable control over spacing, perspective angles, and transition timings.

## Why is it useful?
Using GPU-accelerated CSS perspective properties (`transform: perspective() rotateX() rotateY()`) allows for lightweight, responsive, and performance-optimized 3D hover effects that enhance engagement on landing pages, dashboards, and portfolio sites.
