# CSS object-view-box Image Crop Example

1. **What does this do?** This example demonstrates how to use the modern CSS `object-view-box` property to natively crop, zoom, and pan images directly in CSS.
2. **How is it used?** Apply `object-view-box: inset(top right bottom left)` to an `<img>` element. The values represent the percentage of the image to crop from each side.
3. **Why is it useful?** Traditionally, cropping an image required modifying the source file or using complex `background-image` or wrapper `overflow: hidden` hacks. `object-view-box` allows you to define a specific "view box" of an image natively, and importantly, it is **animatable**, allowing for smooth interactive pan and zoom effects.

### Key Features
- **Native Cropping:** No wrapper `div`s required for the crop effect itself.
- **Animatable:** Demonstrates smooth transitioning between different crop states on hover.
- **Aspect Ratio Preservation:** Uses `aspect-ratio` on the container to ensure uniform card sizes regardless of the crop applied to the image.
- **Graceful Fallback:** If a browser does not support `object-view-box`, the image gracefully degrades to displaying the full source image via `object-fit: cover`.
