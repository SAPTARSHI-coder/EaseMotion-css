# Matrix Digital Rain

The iconic falling code effect from the Matrix, created purely with CSS.

## Features
- **Falling Columns:** Utilizes CSS animations to translate entire columns of text vertically across the screen.
- **Fading Trails:** By leveraging `nth-child` selectors, each letter within a column fades out sequentially, simulating a long glowing trail.
- **Glowing Head:** The leading character of each stream is colored white with a brighter glow to mimic the original film effect.
- **CSS Variables:** Heavy use of custom CSS properties (`--delay` and `--duration`) to easily randomize the speed and start times of individual columns directly in the HTML.

## Structure
- `demo.html`: The HTML layout containing multiple columns of text, utilizing inline CSS variables to offset their animations.
- `style.css`: The CSS controlling the falling and fading animations.

## How to run
Open `demo.html` in your browser and enter the Matrix.
