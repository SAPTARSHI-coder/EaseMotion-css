# CSS Slider: Solar Flare Radial

A dynamic, JavaScript-free carousel utilizing the CSS radio button hack. Features intense radial gradients, pulsating background flares, and deep space aesthetics inspired by stellar phenomena.

## Features
- Pure CSS and HTML implementation. No JavaScript required for slider navigation or state management.
- **Component Architecture**: 
  - **The Radio Button Hack**: The core functional logic relies on a series of hidden `<input type="radio">` buttons and the general sibling combinator (`~`). By placing `<label>` elements inside the `.slider-controls` UI that correspond to these radio IDs, clicking a control node actually checks the hidden radio button. The CSS then detects which button is `:checked` and alters the slide position accordingly.
  - **The Solar Corona Background**: The `.solar-corona` is a large, absolutely positioned element behind the slider track. It utilizes a complex, multi-stop `radial-gradient` and a heavy `filter: blur(40px)`. An infinite CSS `@keyframes` animation scales it slightly, creating a pulsating star-like effect. 
  - **Reactive Radiance**: When the user clicks different control nodes, the `:checked` state triggers a transition on the `.solar-corona` background gradient, subtly shifting the hue and intensity of the flare to match the incoming slide's thematic content (e.g. from hot yellow to deep magenta).
  - **Sweeping Y-Axis Transitions**: Instead of the standard horizontal sliding motion, this variation utilizes a smooth vertical sweep (`translateY(20%)` to `0`) combined with an opacity cross-fade. This gives the slides a sense of rising up from the gravitational center.
- **Theming**: Configured via CSS Custom Properties. The slider is designed for dark/deep-space backgrounds to allow the bright, hot colors (yellows, oranges, reds) of the solar flare to create high contrast.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the vertical slide translation and the infinite corona pulsation, opting instead for a simple instant opacity cross-fade for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the control dots below the slider to navigate between the slides using the pure CSS radio hack, and observe the background flare shift in response.

## Files
- `demo.html`: The HTML structure defining the radio button state logic, the slider track, the solar corona background element, and the navigation controls.
- `style.css`: The styling, the `:checked` sibling selector logic for both the slides and the reactive background, the radial gradient math, and the pulsation keyframes.
