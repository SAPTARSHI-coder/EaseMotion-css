# CSS Slider: Diamond Facet

A sharp, JavaScript-free carousel utilizing the CSS radio button hack. Features `clip-path` polygons to create chamfered edges, mimicking a precision-cut gemstone instead of standard rounded corners.

## Features
- Pure CSS and HTML implementation. No JavaScript required for slider navigation or state management.
- **Component Architecture**: 
  - **The Radio Button Hack**: The core functional logic relies on a series of hidden `<input type="radio">` buttons and the general sibling combinator (`~`). By placing `<label>` elements inside the `.slider-controls` UI that correspond to these radio IDs, clicking a control node actually checks the hidden radio button. The CSS then detects which button is `:checked` and alters the slide visibility accordingly.
  - **The Facet Geometry**: The `.facet-shape` class uses `clip-path: polygon(...)` to slice off the four corners of the element, creating an octagon. This is applied to the `.slider-track` containing all the slides.
  - **The Inner Glow (Fake Border)**: Standard CSS borders do not respect `clip-path` contours—they get chopped off. To fix this and create the illusion of a glowing 3D crystal edge around the slider, an absolutely positioned `.facet-inner-glow` pseudo-element is placed over the track. It shares the exact same clip-path polygon (adjusted for a 4px inset) and applies an `inset box-shadow` to create the glowing border.
  - **Refractive Transitions**: Because standard horizontal sliding can look messy when moving across the slanted, clipped corners of the container, this slider utilizes a sharp opacity and scale transition (`scale(0.95)` to `scale(1)`). This mimics a refractive shift within a crystal rather than a physical slide.
  - **Component Consistency**: The primary slider navigation controls also utilize a smaller variant of the facet clip-path, ensuring the entire interaction model feels geometrically consistent.
- **Theming**: Configured via CSS Custom Properties. The slider fully supports the OS-level system theme (`prefers-color-scheme: dark`), adjusting background colors and text contrast while maintaining the vivid cyan/sky blue crystal accents.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the scale transitions and instantly displaying the flat modal for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Click the faceted control nodes below the slider to navigate between the slides using the pure CSS radio hack.

## Files
- `demo.html`: The HTML structure defining the radio button state logic, the slider track, the inner-glow pseudo-element, and the faceted navigation controls.
- `style.css`: The styling, the `:checked` sibling selector logic, the `clip-path` geometry math, and the refractive scale transitions.
