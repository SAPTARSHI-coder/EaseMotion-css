# Cursor Pointer Custom

Explores the CSS `cursor` property with a grid of common keyword values including `pointer`, `grab`, `crosshair`, `zoom-in`, and more. Also demonstrates inline SVG data URIs used as custom cursor images with hotspot positioning.

## Usage

Open `demo.html` in any browser. Hover each cell to see the corresponding cursor. The bottom section shows two elements with custom SVG cursors defined via inline `url()` data URIs, using the `x y` hotspot syntax to set the click point.

## Notes

- Custom cursor images must be 32×32 or smaller in most browsers for reliable display.
- Hotspot coordinates (`12 12`, `12 6`) define which pixel of the image maps to the click point.
- Inline SVG data URIs avoid external file dependencies and work across all modern browsers.
