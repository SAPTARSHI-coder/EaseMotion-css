# CSS Slider: Velvet Smooth Transition

A luxurious, JavaScript-free carousel utilizing the CSS radio button hack. Features deep, rich colors and ultra-smooth, long-duration transitions combining scale, opacity, and blur filters to create a cinematic "focus pull" effect.

## Features
- Pure CSS and HTML implementation. No JavaScript required for slider navigation or state management.
- **Component Architecture**: 
  - **The Radio Button Hack**: The core functional logic relies on a series of hidden `<input type="radio">` buttons and the general sibling combinator (`~`). By placing `<label>` elements inside the `.slider-controls` UI that correspond to these radio IDs, clicking a control node actually checks the hidden radio button. The CSS then detects which button is `:checked` and alters the slide visibility accordingly.
  - **The Cinematic Entrance**: This slider explicitly avoids snappy or bouncy physics. Instead, it aims for weight and elegance. The `.slide` transitions use a long duration (`0.9s`) and a custom cubic-bezier (`0.25, 1, 0.5, 1`) that accelerates very slowly and decelerates gracefully.
  - **Focus Pull Effect**: The initial/inactive state of a slide is slightly scaled up (`1.05`) and heavily blurred (`filter: blur(10px)`). When a slide becomes active, the `transform` and `filter` properties animate into place, simulating a camera pulling focus onto the new slide.
  - **Continuous Zoom**: While a slide is active (`:checked`), a separate `@keyframes` animation is applied to its background image (`.slide-bg`), causing it to very slowly zoom in over 15 seconds. This adds a layer of subtle, continuous life to the composition even while the user is simply reading.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). The default aesthetic leans heavily into dark mode (deep plums, burgundies, and golds) to fit the "velvet" naming, but automatically adjusts to a lighter cream/gold palette if the user forces a light theme.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the blur/scale transitions and the continuous background zoom, opting instead for a simple instant opacity cross-fade for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the control dots below the slider to navigate between the slides using the pure CSS radio hack, and observe the cinematic focus pull.

## Files
- `demo.html`: The HTML structure defining the radio button state logic, the slider track, the background image containers, and the navigation controls.
- `style.css`: The styling, the `:checked` sibling selector matrix for slide opacity/blur toggling, the specific `cubic-bezier` timing functions, and the continuous zoom animation.
