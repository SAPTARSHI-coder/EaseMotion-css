# Psychedelic Kaleidoscope

A mesmerizing rotating kaleidoscope with infinite geometric reflections, multiple color palettes, segment controls, and interactive features.

## Features

- **Infinite Reflections** – Geometric patterns that create endless mirror effects
- **Multiple Segments** – 6, 8, 10, 12, 16, or 20 segments
- **8 Color Palettes** – Rainbow, Ocean, Sunset, Neon, Earth, Pastel, Cyberpunk, Monochrome
- **Speed Control** – Normal, Fast, Slow modes
- **Dynamic Shapes** – Random organic shapes morphing in each segment
- **Interactive Controls** – Click canvas to reverse rotation direction
- **Keyboard Shortcuts** – SPACE (speed), S (segments), C (colors), R (reset), F (fullscreen)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes
- **Zero Dependencies** – Pure HTML, CSS, Canvas, and JavaScript

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context)
- Vanilla JavaScript (Animation loop, Event handling)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/psychedelic-kaleidoscope.git

2. Navigate to the project folder:
   cd psychedelic-kaleidoscope

3. Open demo.html in your browser

## File Structure

psychedelic-kaleidoscope/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Reverse rotation direction |
| "Speed: Normal" | Toggle between Normal/Fast/Slow |
| "Segments: 8" | Cycle through 6, 8, 10, 12, 16, 20 segments |
| "Change Colors" | Cycle through 8 color palettes |
| "Reset" | Reset to default state |
| SPACE | Toggle speed |
| S | Change segments |
| C | Change colors |
| R | Reset |
| F | Toggle fullscreen |

### Color Palettes

1. **Rainbow** – Full spectrum vibrant colors
2. **Ocean** – Calm blue tones
3. **Sunset** – Warm orange and yellow
4. **Neon** – Bright cyberpunk colors
5. **Earth** – Natural brown and gold
6. **Pastel** – Soft gentle colors
7. **Cyberpunk** – Neon pink, cyan, purple
8. **Monochrome** – Grayscale elegant

## Customization

### Adding Color Palettes

Add to the `colorPalettes` array:

```javascript
const colorPalettes = [
    ['#color1', '#color2', '#color3', '#color4', '#color5', '#color6', '#color7'],
];