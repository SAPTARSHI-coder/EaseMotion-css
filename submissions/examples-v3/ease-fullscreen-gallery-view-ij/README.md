# Fullscreen Gallery View

An image gallery component where clicking a thumbnail opens a fullscreen overlay with an animated scaling transition. The fullscreen image appears to scale up from the thumbnail's position to the center of the viewport.

## Features

- Responsive thumbnail grid with hover effects
- Fullscreen overlay with smooth fade-in
- Image scales from thumbnail bounding rect to center using CSS `transform`
- Close button and keyboard `Escape` support
- Caption display per image

## Custom Properties

| Property                    | Default          | Description                    |
| --------------------------- | ---------------- | ------------------------------ |
| `--gallery-duration`        | `0.4s`           | Transition duration            |
| `--gallery-overlay-bg`      | `rgba(0,0,0,0.92)` | Fullscreen overlay background  |
| `--gallery-bg`              | `#1a1a2e`        | Page background                |
| `--gallery-caption-color`   | `#ffffff`        | Caption text color             |
