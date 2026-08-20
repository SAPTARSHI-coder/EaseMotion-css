# Zoom Out Effect

A scroll-driven parallax section that zooms out (scales down and fades) to reveal content beneath it.

## Features

- Hero section shrinks and fades as the user scrolls, creating a cinematic reveal
- Next sections sit below with `margin-top: 100vh` to stack naturally
- Smooth transition driven by the scroll event and `getBoundingClientRect`
- Transform-origin centered for natural zoom-out

## CSS Custom Properties

| Property           | Default           | Description             |
|--------------------|-------------------|-------------------------|
| `--zoe-duration`   | 0.01s             | Scroll update rate      |
| `--zoe-scale-min`  | 0.6               | Minimum scale reached   |
| `--zoe-bg`         | #1e293b           | Hero background color   |
| `--zoe-text-color` | #ffffff           | Hero text color         |
| `--zoe-overlay`    | rgba(0,0,0,0.2)   | Hero overlay tint       |

## Usage

Open `demo.html` in any modern browser and scroll.
