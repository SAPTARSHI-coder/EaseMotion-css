# Retro CSS Slider

A highly stylized, JavaScript-free custom `<input type="range">` featuring chunky 8-bit pixel aesthetics, tactile press states, and cross-browser support.

## Features
- Pure CSS and HTML implementation. No images, SVGs, or JavaScript required to achieve the pixelated look.
- **Component Architecture & Styling Mechanics**: 
  - **Resetting Native Styles**: Relies on `-webkit-appearance: none;` on the native range input to strip away default OS styling, allowing for complete CSS redesign via pseudo-elements.
  - **Cross-Browser Pseudo-Elements**: The styling targets `::-webkit-slider-runnable-track` and `::-webkit-slider-thumb` for Chrome/Safari/Edge, and duplicates styles for `::-moz-range-track` and `::-moz-range-thumb` for Firefox compatibility.
  - **CSS Pixel Borders (Box-Shadow)**: The jagged, blocky 3D borders characteristic of 8-bit graphics and early 90s OS interfaces (like Windows 95) are achieved using layered `box-shadow` techniques.
    - **Outset Bevel (Thumb)**: `inset 4px 4px 0 light-color, inset -4px -4px 0 dark-color` creates a button that looks raised.
    - **Inset Bevel (Track)**: The colors are inverted on the track to make it look like a recessed groove.
  - **Tactile Feedback**: On the `:active` state (when the user clicks and drags), the thumb's inset shadows are inverted, and it is physically translated downwards (`transform: translateY(4px)`). This perfectly simulates the mechanical action of pressing a chunky plastic button.
- **Theming**: The palette utilizes classic console grey, arcade red, and pitch-black shadows. The font is `'Press Start 2P'` from Google Fonts. Due to the strict nature of retro themes, it ignores OS light/dark modes for the component itself, maintaining its distinct 8-bit aesthetic globally.
- Fully accessible semantic structure. Because it relies on a real `<input type="range">`, it is perfectly accessible to screen readers, keyboards (using arrow keys), and touch devices. Includes a chunky dashed outline for `:focus-visible`.

## Usage
Open `demo.html` in your browser. Click and drag the red slider thumb. Notice how the thumb physically presses down into the groove, changing its highlight/shadow bevels to simulate a physical mechanical press.

## Files
- `demo.html`: The HTML structure defining the semantic range input wrapped in a retro console container.
- `style.css`: The styling, the complex `box-shadow` layering for pixel borders, the cross-browser pseudo-selectors, and the active state "press" mechanics.
