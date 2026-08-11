# Floating Ghost

A cute, purely CSS-drawn ghost character that floats up and down seamlessly, casting a dynamic shadow beneath it.

## Preview

Open `demo.html` in your browser to see the ghost floating.

## Implementation Details

- **No SVG/Images/JavaScript:** The ghost is drawn completely using CSS shapes (border-radius, box-shadow) applied to simple HTML `div` elements. For example, the right eye and right hand are created by casting a `box-shadow` from the left eye and left hand!
- **Keyframe Animations:** The floating effect is achieved by an infinite `ease-in-out` animation that translates the ghost on the Y-axis. 
- **Dynamic Shadow:** A separate element below the ghost is animated simultaneously, scaling down and fading out slightly as the ghost moves higher up, simulating a real light source.
