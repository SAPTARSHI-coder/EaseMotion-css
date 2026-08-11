# CSS Animated Night City

A pure CSS illustration of a city skyline at night, featuring complex window lighting grids and animated flickering effects generated entirely without JavaScript or structural DOM clutter.

## Features
- Pure CSS and HTML.
- **Component Architecture (Documented in Code)**: 
  - **The Window Grid Hack**: Generating hundreds of individual HTML `<div>` elements for every window in a skyline would destroy browser performance. Instead, this component uses CSS `repeating-linear-gradient` to draw intersecting horizontal and vertical lines on the `::after` pseudo-element of each building. The gaps in the gradient allow the pitch-black silhouette of the building to show through, while the colored bands create the illusion of brightly lit windows.
  - **Performance**: By using pseudo-elements and background patterns, the DOM remains incredibly lightweight (only 7 div elements for the entire city).
  - **The Flicker Animation**: A `@keyframes` animation (`twinkle`) adjusts the `opacity` of the pseudo-element grids. By applying this animation with different durations and `alternate-reverse` timing functions across the different buildings, the entire city appears to twinkle and flicker organically, as if individual lights are turning on and off at random.
- **Theming**: The component forces a dark sky aesthetic (`linear-gradient`) to sell the nighttime effect, but utilizes CSS Custom Properties allowing for easy overrides to the sky or window colors.
- Accessible semantic structure. The main container utilizes an explicit `aria-label` to describe the entire visual scene to screen readers, avoiding the need to label every decorative structural element. Honors the `prefers-reduced-motion` accessibility standard by disabling the flickering opacity animation for motion-sensitive users, rendering the city with static, warmly lit windows.

## Usage
Open `demo.html` in your browser to view the generated skyline and the overlapping, offset twinkle animations.

## Files
- `demo.html`: The lightweight HTML structure containing the building blocks.
- `style.css`: The styling, background grid generation logic, and the opacity flicker animation.
