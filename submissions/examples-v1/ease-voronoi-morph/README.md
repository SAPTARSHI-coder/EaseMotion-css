# Voronoi Morph

Voronoi diagram cells that pulse and rearrange with organic movement, dynamic colors, and interactive controls.

## Features

- **Voronoi Diagram** – Cell-based geometric pattern with organic morphing
- **Pulsing Cells** – Individual cells pulse with different phases
- **Organic Movement** – Cells drift and rearrange smoothly
- **6 Count Options** – 10, 20, 30, 50, 80, 120 cells
- **8 Color Modes** – Rainbow, Ocean, Fire, Galaxy, Pastel, Neon, Sunset, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Cell Glow** – Glowing site centers with pulse effect
- **Cell Borders** – Subtle border lines between cells
- **Interactive Controls** – Count, speed, color customization
- **Keyboard Shortcuts** – C (count), S (speed), P (color), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with ImageData manipulation)
- Vanilla JavaScript (Voronoi algorithm, Pixel manipulation)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/voronoi-morph.git

2. Navigate to the project folder:
   cd voronoi-morph

3. Open demo.html in your browser

## File Structure

voronoi-morph/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Cells: 30" | Cycle through 10, 20, 30, 50, 80, 120 cells |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 8 color modes |
| "Reset" | Reset to default |
| C | Cycle cell counts |
| S | Cycle speeds |
| P | Cycle colors |
| R | Reset |

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

- **Slow** – 0.005 (gentle movement)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (energetic)
- **Very Fast** – 0.07 (rapid morphing)

### Cell Counts

- **10** – Sparse, large cells
- **20** – Balanced
- **30** – Dense (default)
- **50** – Highly dense
- **80** – Very dense
- **120** – Maximum density

## How It Works

| Feature | Implementation |
|---------|---------------|
| Voronoi diagram | Distance-based cell assignment |
| Cell morphing | Smooth site movement with interpolation |
| Pulsing | Sine wave on cell size and glow |
| Color modes | HSL functions with position/time mapping |
| Pixel rendering | ImageData manipulation for performance |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
const colorModes = [
    {
        name: 'MyMode',
        fn: (i, total, time) => {
            return `hsl(${value}, ${sat}%, ${light}%)`;
        }
    },
];