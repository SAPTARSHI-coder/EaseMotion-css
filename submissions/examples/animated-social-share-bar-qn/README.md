# Animated Social Share Bar

## Description
A modern, space-saving social sharing component. It starts as a compact "Share" button and smoothly expands horizontally on hover to reveal individual social media icons (Twitter, Facebook, LinkedIn, Email). The icons appear with a staggered, bouncy cascading animation and feature individual brand-color hover states. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the main button and the 4 inline SVG social icons.
- `style.css`: Contains the flexbox layout, the width expansion transition, the staggered opacity/scale reveals, and the brand-color hover effects.

## How to use
1. Open `demo.html` in your browser and hover over the share button to see the expansion and cascading icon effects.
2. Copy the HTML and CSS into your project.
3. Wrap your main button and icon links inside a `.share-bar-qn` div.
4. **Customization:**
   - **Expanded Width:** Adjust the `width: 340px` in `.share-bar-qn:hover` to accommodate more or fewer icons. (Rule of thumb: ~50px per icon).
   - **Brand Colors:** Change the `color` properties on the individual icon classes (`.twitter-qn`, etc.) and their corresponding `rgba` hover backgrounds.
   - **Animation Speed & Bounce:** Modify the `0.5s` width transition and the `0.4s cubic-bezier` transform transitions to change the speed and bounce intensity.
   - **Stagger Timing:** Adjust the `transition-delay` values on the icon classes to change the cascading effect.