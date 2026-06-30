# Pure CSS Before/After Image Comparison Slider

This submission provides a "magic" pure CSS component: a fully interactive Before/After Image Slider without a single line of JavaScript.

## Features

- **Zero JavaScript:** By using the native CSS `resize: horizontal` property on an `overflow: hidden` wrapper, the browser handles the dragging, clipping, and redrawing natively.
- **Custom UI:** Pseudo-elements are used to draw a beautiful, EaseMotion-styled vertical divider line and a circular drag thumb in the center of the image.
- **Performance:** Because it utilizes native browser resizing rather than rapidly firing JavaScript `mousemove` events to update DOM styles, the interaction is perfectly smooth and jank-free.

## Usage

Provide a fixed-size container (either fixed `width`/`height` or aspect ratio). Place the "After" image statically in the back, and place the "Before" image inside the resizable `.ease-compare-overlay`.

```html
<div class="ease-compare-container" style="height: 400px; max-width: 800px;">
  <img class="ease-compare-after" src="after.jpg" alt="After" />

  <div class="ease-compare-overlay">
    <!-- Ensure the max-width of the before image matches the container width so it doesn't shrink when dragging -->
    <img
      class="ease-compare-before"
      src="before.jpg"
      style="width: 800px; max-width: none;"
      alt="Before"
    />
  </div>
</div>
```

## Note on Cross-Browser Support

The CSS `resize` property requires the user to click the bottom-right corner of the element to resize it. In Webkit browsers (Chrome, Edge, Safari), the `.ease-compare-overlay::after` line actually passes clicks through to the native resizer, allowing users to grab the line near the bottom. For a 100% robust cross-browser "grab anywhere on the line" experience, a tiny snippet of JS is usually required, but this pure CSS version works wonderfully as a lightweight, framework-native alternative!
