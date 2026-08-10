# Pure CSS Image Carousel

A fully functional image slider driven entirely by CSS state management and 2D transforms, built without a single line of JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management, tracking the current slide, or animating transitions).
- **Pure CSS State Management (The "Radio Button Hack")**: 
- This component utilizes a set of hidden `<input type="radio">` elements placed at the root level of the component wrapper.
- All interactive controls (the bottom dots, and the left/right arrows) are actually `<label>` elements linked via the `for` attribute to these hidden radio buttons.
- Clicking an arrow or a dot simply checks the corresponding hidden radio input.
- CSS sibling selectors (`~`) are then used to read which radio is currently `:checked` and update the UI accordingly.
- **Sliding Track Logic**: 
- The `.carousel-track` is a flex container holding three slides side-by-side, making its total width `300%`.
- Depending on which radio button is active, the track is translated horizontally (`transform: translateX(-33.333%)`, etc.) to bring the correct slide into the viewport.
- **Context-Aware Navigation Arrows**: 
- Because there is no JavaScript to dynamically say "if current slide is 2, the 'Next' button goes to 3", we hardcode specific arrows for every state.
- All arrows exist in the DOM simultaneously, but are hidden by default.
- Using CSS sibling selectors (`#slide-2:checked ~ .carousel-container .arrow-for-2`), we only reveal the specific Next/Prev arrow pair that correctly routes to the adjacent slides for the current state.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the horizontal track sliding and the staggered text entrance animations are completely disabled, resulting in instant slide transitions.

## Usage
Open `demo.html` in your browser. You will see an image carousel featuring three slides. You can navigate between them by clicking the left/right arrows on the sides, or by directly clicking the pagination dots at the bottom.

## Files
- `demo.html`: The HTML structure for the slider, detailing the crucial hidden radio inputs, the 300%-width track, and the context-specific navigation arrows.
- `style.css`: The styling, the CSS sibling logic (`:checked ~`) powering the state machine, and the smooth `transform` and `opacity` transitions.
