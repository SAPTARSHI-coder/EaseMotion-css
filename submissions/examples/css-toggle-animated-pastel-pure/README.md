# Animated Pastel Toggle

A delightful, highly animated pure CSS theme toggle (Day/Night switch) utilizing soft pastel colors, spring physics, and dynamic scenic backgrounds.

## Features
- **Pure CSS State Engine**: Operates entirely without Javascript using a hidden `<input type="checkbox">` and CSS sibling selectors (`+`) to control complex, multi-element state transitions.
- **Spring Physics Animation**: The main toggle knob (Sun/Moon) translates across the track using a custom `cubic-bezier(0.68, -0.55, 0.265, 1.55)` timing function, resulting in a satisfying, bouncy spring effect.
- **Dynamic Scenery Translation**: The background of the toggle track features environmental elements that animate based on the state:
  - **Day Mode**: Clouds (built via pseudo-elements) float in the sky. When switching to night, they sink down (`translateY`) and fade out.
  - **Night Mode**: Stars drop down from the top (`translateY`) and fade in. Once in position, the stars trigger individual, staggered `@keyframes` to twinkle continuously.
- **Morphing Knob**: The knob smoothly shifts its background color from a sunny yellow (`#FFDF00`) to a lunar grey (`#E5E5E5`). Simultaneously, lunar craters fade in via opacity transitions to complete the transformation into a moon.

## Usage
Include `demo.html` and `style.css` in your project. This component is ideal for dark mode / light mode application toggles.
- To demonstrate the effect, the `body` background color in `style.css` is wired to shift automatically based on the toggle state using the CSS `:has()` pseudo-class.
