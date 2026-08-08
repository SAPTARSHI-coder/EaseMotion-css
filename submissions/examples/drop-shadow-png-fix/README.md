# Drop-Shadow Transparent Fix

A visual CSS pattern resolving the incredibly common design mistake of using `box-shadow` on a transparent PNG or SVG, which awkwardly shadows the image's invisible bounding box instead of its actual shape.

## Features
- **The Bug Context**: When you apply a standard CSS `box-shadow` to an `<img>` tag, the browser's rendering engine strictly looks at the rectangular CSS box model of that element. If the image is a transparent PNG of a leaf, the browser completely ignores the transparency (the alpha channel) and simply casts a rigid, ugly shadow around the invisible square boundaries of the image file itself.
- **The Modern Fix**: We use the CSS `filter: drop-shadow()` function instead. This hardware-accelerated filter mathematically analyzes the image's alpha channel on the fly. It dynamically generates a blurred shadow that perfectly hugs the contours of the actual shape (the non-transparent pixels), completely ignoring the invisible square box.

## Usage
Open `demo.html` in your browser. 
- Look at the **Buggy Demo**. You will clearly see a harsh, rectangular shadow floating awkwardly in the empty space around the transparent leaf.
- Look at the **Fixed Demo**. The shadow perfectly contours every curve and jagged edge of the leaf, looking incredibly realistic. 
- Hover over the fixed image to watch it scale and rotate; notice how the `drop-shadow` flawlessly recalculates its shape in real-time during the animation!

## Files
- `demo.html`: The HTML structure demonstrating the side-by-side PNG shadow comparison.
- `style.css`: The styling engine contrasting `box-shadow` with `filter: drop-shadow()`.
