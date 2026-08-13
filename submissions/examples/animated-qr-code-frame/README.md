# CSS Animated QR Code Frame

A CSS-only animated QR code frame featuring a smooth scanning line.

## Features

- Pure CSS implementation
- No JavaScript required
- Animated scanning line
- Responsive design
- Accessible QR frame
- Reduced-motion support
- Mobile-friendly

## Files

- `demo.html` - Demo page
- `style.css` - Component styling and animation

## How It Works

The scanning effect is created using CSS `@keyframes`.

The scanning line moves vertically inside the QR frame:

```css
@keyframes scan {
  0%, 100% {
    top: 10%;
  }

  50% {
    top: 88%;
  }
}