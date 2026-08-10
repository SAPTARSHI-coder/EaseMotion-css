# Neumorphic Keyboard

A miniature animated keyboard interface styled with neumorphism (soft UI). 

## Preview

Open `demo.html` in your browser and click on any of the keys. You will see them physically depress into the board.

## Implementation Details

- **Neumorphism:** The "soft UI" effect is created by matching the background color of the elements to the background color of the page (`#e0e5ec`). Then, two `box-shadow`s are applied: a light shadow on the top-left and a dark shadow on the bottom-right. This creates the illusion that the element is protruding from the surface.
- **Interactive State:** When a `.key` is clicked, the `:active` pseudo-class kicks in. We swap the standard `box-shadow` out for an `inset box-shadow`. This instantly reverses the 3D effect, making the key look like a physical button that has been pushed down into the board.
- **No JavaScript:** The physical button interaction relies purely on the CSS `:active` state.
