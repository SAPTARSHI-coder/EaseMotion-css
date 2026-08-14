# CSS Resizable Panel

A floating UI panel component that utilizes the native CSS `resize` property, enhanced with custom-styled visual handles and responsive internal layouts, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for resizing logic or dimension calculations).
- **Native CSS Resize Mechanics**: 
- The `.resizable-panel` uses the native CSS `resize: both;` property.
- To function, this property requires `overflow` to be set to something other than `visible` (we use `overflow: hidden;`).
- CSS `min-width`, `min-height`, `max-width`, and `max-height` constraints are respected natively by the browser during resizing, ensuring the panel doesn't break the UI.
- **Custom Visual Resize Handle Trick**: 
- By default, browsers (Chrome/Safari) render an ugly, un-styleable diagonal line grabber in the bottom right corner for `resize: both`.
- We hide this default UI using the WebKit scrollbar pseudo-element hack (`::-webkit-scrollbar-corner { background: transparent; }`).
- We then position a custom SVG icon (`.custom-resize-handle`) absolutely in the bottom-right corner.
- **Crucially**, we apply `pointer-events: none;` to our custom SVG handle. This allows the user's mouse clicks to pass straight through our beautiful icon and hit the invisible native browser resize zone sitting directly underneath it.
- **Responsive Internal Layout**: The internal form fields use CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(...))`) ensuring that as the user drags the panel to be wider or narrower, the internal content flawlessly reflows to fit the new dimensions.
- **Focus States**: Includes a `:focus-within` styling upgrade. When the user interacts with the panel (clicks inside it or resizes it), the shadow and border color dynamically intensify.

## Usage
Open `demo.html` in your browser. You will see a "Configuration" panel floating in the center of the screen. Click and drag the bottom-right corner (marked by the blue arrow icon) to resize the panel freely. Notice how the internal inputs automatically reflow into a single column when the panel is made too narrow.

*Note: True arbitrary 2D window "dragging" (moving the panel across the screen) requires JavaScript to persistently update `left/top` or `transform` coordinates based on pointer events. This component focuses purely on the CSS resizing mechanics requested.*

## Files
- `demo.html`: The HTML structure for the panel, including the mock internal UI and the custom `.custom-resize-handle` SVG.
- `style.css`: The styling, the core `resize: both` logic, min/max dimensional constraints, and the `pointer-events: none` hack for custom handle styling.
