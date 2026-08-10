# CSS Language RTL Toggle

A pure CSS language direction toggle that smoothly switches a responsive UI between left-to-right (LTR) and right-to-left (RTL) layouts.

## Features

- Pure CSS implementation
- No JavaScript required
- Smooth direction transition
- Accessible radio-button controls
- Responsive layout
- Uses CSS logical direction behavior
- Supports reduced-motion preferences
- Easy to customize with CSS custom properties

## Files

- `demo.html` — standalone demonstration
- `style.css` — complete CSS implementation

## Usage

Link the stylesheet and add the direction toggle structure to your page.

The main container can switch direction using the checked RTL control:

```css
.container:has(#direction-rtl:checked) {
  direction: rtl;
}