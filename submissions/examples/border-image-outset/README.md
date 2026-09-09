# Border Image Outset

Shows how `border-image-outset` extends the border image drawing area beyond the element's border box. Compares outset values from 0 to 50px, including asymmetric and four-value syntax.

## Outset Mechanics

`border-image-outset` shifts the border image outward without affecting layout or the element's box model. The outset area overlaps neighboring content. Values can be lengths or unitless numbers (multiplied by `border-width`). One to four values follow standard CSS shorthand.

## Usage

Open `demo.html` in a modern browser. Grid cards show gradient border images with increasing outset values. Asymmetric examples extend only the horizontal or vertical axes. A side-by-side comparison contrasts a standard `border` with a `border-image-outset` of 30px, including a dashed guide line. Edit values in `style.css` to test different outset amounts.
