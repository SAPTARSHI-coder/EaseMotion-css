# CSS Animated Toggle


A documentation and demo page for the CSS-only Animated Toggle component.


## Features


- Smooth transition between ON/OFF states.
- Neon glow effect when the toggle is active.
- Pure HTML and CSS with no JavaScript required.
- Responsive and modern design.


## Files


- `demo.html` → Contains the toggle input, slider, and demo structure.
- `style.css` → Contains the toggle styling, animation, and active-state effects.
- `README.md` → Documentation and usage instructions.


## Usage


1. Open `demo.html` in a web browser.
2. Click the toggle switch to change between ON and OFF states.
3. The slider smoothly moves between the two states.
4. Customize the colors and dimensions in `style.css` if needed.


## HTML Structure


The component uses a checkbox input and a slider element:


```html
<label class="toggle">
    <input type="checkbox">
    <span class="slider"></span>
</label>

The checkbox controls the toggle state, while CSS handles the animation.

Customization

You can customize:

Toggle width and height.
Slider size.
Background colors.
Active-state glow.
Animation duration.

For example, modify the transition duration in style.css:

transition: background-color 0.4s ease;
Accessibility

The toggle uses a native checkbox input, allowing users to interact with the control using standard keyboard input.

Browser Support

The component uses standard HTML and CSS features and works in modern browsers.