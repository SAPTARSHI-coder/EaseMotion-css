# Object View Box Crop &amp; Pan

Demonstrates CSS-native image cropping and panning with `object-view-box`. Uses the `inset()` function to define the visible region of a replaced element, enabling crop and pan without external image editors.

## View Box System

`object-view-box: inset(top right bottom left)` defines a view box in the element's own coordinate space. Values are percentages or lengths. Positive values shrink the visible area (crop), while negative values expand it. Combined with `object-fit: cover`, this gives fine control over which portion of an image is displayed.

## Usage

Open `demo.html` in a modern browser that supports `object-view-box` (Chromium 104+). A gradient placeholder represents the image source. Cards demonstrate center crop, edge crops, directional panning, and zoom. A comparison section contrasts `object-fit: cover`, `contain`, and `object-view-box` panning. Replace the gradient background with an `<img>` element for real image use.
