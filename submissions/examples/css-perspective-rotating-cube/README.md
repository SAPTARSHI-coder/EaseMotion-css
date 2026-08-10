# CSS Perspective Rotating Cube

A pure CSS 3D rotating cube demonstrating CSS perspective,
3D transforms, and keyframe animation.

## Features

- Pure HTML and CSS
- Six-sided 3D cube
- CSS perspective
- `transform-style: preserve-3d`
- Multi-axis rotation
- Smooth keyframe animation
- Hover-to-pause interaction
- Responsive design
- Reduced-motion support
- No JavaScript
- No external dependencies

## How It Works

The cube is placed inside a perspective container:

```css
.scene {
  perspective: 800px;
}