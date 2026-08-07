# CSS Skew-Active Carousel

A pure CSS, lightweight interactive carousel designed for e-commerce checkout layouts. It uses radio inputs for state management and features a stylish skew and scale animation upon selection.

## Features
- Pure CSS and HTML (no external JavaScript required).
- Native radio buttons used for accessible state management.
- Dynamic `skewX` and `scale` transformations for inactive, hover, and active states.
- Horizontal scrollable track with hidden scrollbars for a clean look.
- Fully responsive across desktop, tablet, and mobile viewports.
- Honors the `prefers-reduced-motion` accessibility standard.

## Usage
Open `demo.html` in your browser. Click on the different payment methods in the carousel track. You'll notice the unselected items are slightly skewed, and selecting an item straightens it out and scales it up to indicate it is the active choice.

## Files
- `demo.html`: The HTML structure for the carousel and radio button state management.
- `style.css`: The styling, flexbox layouts, and CSS keyframe animations.