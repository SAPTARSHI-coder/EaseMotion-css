# Neumorphic Range Slider

A custom-styled `<input type="range">` slider that uses neumorphism (soft UI) for a 3D extruded look.

## Preview

Open `demo.html` in your browser and drag the slider thumb. Notice how it depresses visually when you click on it.

## Implementation Details

- **No JavaScript:** The styling and active states are handled entirely by CSS.
- **Custom Input Styling:** Uses vendor prefixes (`::-webkit-slider-thumb` and `::-moz-range-thumb`) to completely override the browser's default range input appearance.
- **Neumorphism:** The track uses an `inset` box shadow to look like a trench carved into the background, while the thumb uses an outward `box-shadow` to look like a button raised out of the same material. Both elements share the exact same background color (`#e0e5ec`) as the `body`.
- **Active State:** When the thumb is clicked (`:active`), it scales down slightly and its shadow inverts to an `inset` shadow, making it look physically pressed.
