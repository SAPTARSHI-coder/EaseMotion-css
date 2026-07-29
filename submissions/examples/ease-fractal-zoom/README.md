# Fractal Zoom

Infinite zoom into fractal patterns with color morphing, interactive controls, and real-time rendering.

## Features

- **Infinite Zoom** – Continuous zoom into Mandelbrot fractal patterns
- **8 Color Modes** – Rainbow, Ocean, Fire, Galaxy, Pastel, Neon, Sunset, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Interactive Controls** – Drag to pan, scroll to zoom
- **Keyboard Shortcuts** – Arrow keys for panning, S (speed), C (color), R (reset)
- **Touch Support** – Pinch to zoom, drag to pan on mobile
- **Dynamic Color Morphing** – Colors shift and morph as you zoom
- **Real-time Rendering** – Generated pixel by pixel in real-time
- **Zoom Display** – Shows current zoom level
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with pixel manipulation)
- Vanilla JavaScript (Mandelbrot algorithm, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/fractal-zoom.git

2. Navigate to the project folder:
   cd fractal-zoom

3. Open demo.html in your browser

## File Structure

fractal-zoom/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Drag canvas | Pan the fractal |
| Scroll | Zoom in/out |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 8 color modes |
| "Reset" | Reset to default |
| Arrow keys | Pan the fractal |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Pause (coming soon) |

### Color Modes

1. **Rainbow** – Full spectrum
2. **Ocean** – Calm blue/teal tones
3. **Fire** – Warm red/orange tones
4. **Galaxy** – Deep purple/pink tones
5. **Pastel** – Soft gentle colors
6. **Neon** – Bright cyberpunk colors
7. **Sunset** – Warm sunset colors
8. **Monochrome** – Grayscale elegant

### Speed Options

- **Slow** – 1.008 (gentle zoom)
- **Normal** – 1.02 (balanced)
- **Fast** – 1.04 (quick zoom)
- **Very Fast** – 1.07 (rapid zoom)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Fractal generation | Mandelbrot algorithm with pixel-by-pixel rendering |
| Zoom | Continuous zoom with dynamic iteration count |
| Color morphing | HSL color functions with zoom-dependent values |
| Pan | Mouse/touch drag with offset calculation |
| Performance | ImageData manipulation for fast rendering |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
const colorModes = [
    {
        name: 'MyMode',
        fn: (iter, maxIter, zoom, x, y) => {
            const t = iter / maxIter;
            return `hsl(${value}, ${sat}%, ${light}%)`;
        }
    },
];