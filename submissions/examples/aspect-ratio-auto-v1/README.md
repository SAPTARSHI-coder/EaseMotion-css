# aspect-ratio — Auto & Ratio Values

Explores the `aspect-ratio` CSS property using `auto`, explicit ratio values (16/9, 1/1, 4/3, 21/9), and combined width/height constraints. Includes responsive media embed placeholders and an SVG image demonstrating intrinsic aspect ratio detection.

## Usage

Open `demo.html` in a modern browser. Each card shows a box constrained by a different `aspect-ratio` value. Resize the viewport to verify that each element maintains its proportions regardless of container width.

## Notes

- `aspect-ratio: auto` relies on the replaced element's intrinsic dimensions.
- Explicit ratios (`16/9`, `1/1`, etc.) override intrinsic dimensions when no natural ratio exists.
- Combined with `width: 100%`, the height is derived automatically from the aspect ratio.
- Useful for responsive video embeds, image galleries, and card layouts.
