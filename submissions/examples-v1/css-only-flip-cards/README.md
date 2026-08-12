# CSS-only 3D Flip Cards

A pure CSS implementation of hardware-accelerated 3D flipping cards. Perfect for pricing tables, feature reveals, and team member profiles without the overhead of JavaScript.

## Files
- `demo.html` - Interactive demonstration featuring horizontal hover, vertical hover, and click-to-flip variations.
- `style.css` - The CSS implementation defining the 3D perspective, backface-visibility, and checkbox hacks.

## Details
Creating a true 3D flip card requires careful application of several advanced CSS properties:
1. `perspective: 1000px` on the parent container to give the 3D effect depth.
2. `transform-style: preserve-3d` on the flipping inner wrapper so child elements stay in 3D space.
3. `backface-visibility: hidden` on the front and back faces to ensure the mirrored back of the front face doesn't show when flipped.

This component provides `.ease-flip-card-hover` for traditional mouse interactions, and natively supports mobile tap-to-flip via the CSS Checkbox hack (`.ease-flip-card-checkbox`), which retains state using the `<input type="checkbox">` `:checked` pseudo-class.
