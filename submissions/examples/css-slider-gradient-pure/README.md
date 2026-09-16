# CSS-only Slider with Gradient Styling

A visually striking, pure CSS range slider utilizing vibrant gradients and advanced CSS styling hacks to avoid Javascript dependencies.

## Features
- **Pure CSS Track Fill**: Utilizes the `overflow: hidden` and massive negative `box-shadow` hack on the `::-webkit-slider-thumb` to create a colored progress track behind the thumb without needing Javascript to update CSS variables based on value.
- **Native Firefox Support**: Takes advantage of the exclusive `::-moz-range-progress` pseudo-element for perfect gradient track fills on Firefox browsers.
- **Gradient Thumb**: The slider thumb features a smooth `linear-gradient` (`#ff007f` to `#7928ca`) and a crisp white border, standing out against the dark track.
- **Micro-interactions**: The thumb smoothly scales up (`transform: scale(1.1)`) on hover to indicate interactivity.
- **Dark Mode UI**: Encapsulated in a modern, dark-themed settings card with `Outfit` typography.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Outfit` font is loaded in your `<head>`. This component uses standard `<input type="range">` elements, meaning it is inherently accessible and works with form submissions right out of the box.
