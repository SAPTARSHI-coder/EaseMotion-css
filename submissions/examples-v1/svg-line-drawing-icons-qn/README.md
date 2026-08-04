# Animated SVG Line Drawing Icons

## Description
A stunning, interactive icon component where SVG paths smoothly draw themselves on hover. This creates a delightful, engaging effect perfect for feature highlights, call-to-action buttons, and interactive elements. The animation uses `stroke-dasharray` and `stroke-dashoffset` CSS properties to create the drawing effect. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains four icon cards with custom SVG icons (rocket, shield, lightning, heart).
- `style.css`: Contains the SVG stroke animation, hover effects, and card styling.

## How to use
1. Open `demo.html` in your browser and hover over the icons to see the drawing effect.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Wrap each icon in an `.icon-card-qn` container
   - Add the SVG inside an `.icon-wrapper-qn` div
   - Give each SVG path the `.icon-path-qn` class
4. **Customization:**
   - **Animation Speed:** Adjust the `1s` transition duration in `.icon-path-qn`.
   - **Trigger:** By default, icons draw on hover. To draw on page load instead, uncomment the alternative animation code in the CSS.
   - **Colors:** Change the `color` in `.line-icon-qn` to change the stroke color.
   - **Stagger Delay:** Modify the `transition-delay` values for multiple paths to create a sequential drawing effect.
   - **Icon Size:** Adjust the `width` and `height` in `.line-icon-qn`.

## Features
- **Smooth Drawing Effect:** SVG paths animate from invisible to fully drawn
- **Hover Trigger:** Icons draw when the user hovers over the card
- **Staggered Animation:** Multiple paths in one icon draw sequentially
- **Card Lift Effect:** Cards lift up with enhanced shadows on hover
- **Icon Rotation:** Icons rotate slightly on hover for extra dynamism
- **Fully Responsive:** Adapts to mobile screens
- **Accessibility:** Respects `prefers-reduced-motion` user preference

## Technical Details
- Uses `stroke-dasharray` to define the dash pattern (set to a value larger than the path length)
- `stroke-dashoffset` starts at the same value, making the path invisible
- On hover, `stroke-dashoffset` transitions to `0`, revealing the path
- The transition uses `cubic-bezier(0.4, 0, 0.2, 1)` for smooth easing
- Multiple paths can be staggered using `transition-delay`

## Creating Your Own Icons
1. Create or find an SVG icon with `stroke` paths (not filled)
2. Add the `.icon-path-qn` class to each `<path>`, `<circle>`, `<line>`, etc.
3. Adjust the `stroke-dasharray` value if needed (should be >= path length)
4. The animation will work automatically!

## Use Cases
- Feature highlights on landing pages
- Interactive icon buttons
- Process/workflow steps
- Technology stack displays
- Service offerings
- Portfolio project icons
- Animated logos
- Loading indicators