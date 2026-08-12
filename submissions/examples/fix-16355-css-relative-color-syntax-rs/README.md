# CSS Relative Color Syntax Utilities

This submission adds utilities showcasing the new, incredibly powerful CSS Relative Color Syntax.

## Bug / Feature Description
A major pain point in CSS has been manipulating hex variables. If you defined `--primary: #ff0000`, you couldn't add opacity to it natively without redefining it as `--primary-rgb: 255, 0, 0` and writing `rgba(var(--primary-rgb), 0.5)`. 

The new Relative Color Syntax solves this by allowing developers to unpack *any* color format, manipulate its specific channels (like hue, saturation, lightness, or alpha) using `calc()`, and repack it.

## Fix / Implementation Details
- **Alpha Injection**: Demonstrated `rgb(from var(--color) r g b / 50%)`. This correctly applies 50% opacity to a base color defined as a Hex code.
- **Lightness Math**: Demonstrated `hsl(from var(--color) h s calc(l + 40%))`. This safely lightens a color by unpacking it into the HSL space and running `calc()` on the Lightness channel.
- **Hue Rotation**: Demonstrated `hsl(from var(--color) calc(h + 180) s l)`. This perfectly generates the complementary color of the base variable by rotating the Hue channel 180 degrees.

## How to Test
1. Open `demo.html` in a modern browser (Chrome 119+, Safari 16.4+, Firefox 128+).
2. Look at the Alpha Injection section to see a Hex code flawlessly converted into semi-transparent backgrounds.
3. Look at the Lightness section and hover over the button to see it natively darken its base color.
4. Look at the Hue Rotation section to see mathematically perfect complementary and analogous color swatches generated entirely by the browser engine.
