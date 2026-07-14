# Hypnotic Spiral

An infinite spiral that rotates continuously with smooth color gradient shifts, multiple color modes, and customizable speed and thickness.

## Features

- **Infinite Rotation** – Continuous spiral rotation with smooth animation
- **8 Color Modes** – Rainbow, Ocean, Fire, Galaxy, Pastel, Neon, Sunset, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **4 Thickness Options** – Thin, Medium, Thick, Very Thick
- **Multiple Layers** – 3 spiral layers with depth and glow
- **Wave Distortion** – Subtle wave effect along the spiral
- **Glowing Dots** – Animated dots following the spiral path
- **Color Gradient Shifts** – Smooth color transitions along the spiral
- **Glow Effects** – Luminous shadow and glow on spiral lines
- **Trail Effect** – Subtle trail for smooth motion
- **Keyboard Shortcuts** – S (speed), T (thickness), C (color), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Color interpolation)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/hypnotic-spiral.git

2. Navigate to the project folder:
   cd hypnotic-spiral

3. Open demo.html in your browser

## File Structure

hypnotic-spiral/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Speed: Normal" | Cycle through 4 speeds |
| "Thickness: Medium" | Cycle through 4 thickness options |
| "Color: Rainbow" | Cycle through 8 color modes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| T | Cycle thickness |
| C | Cycle colors |
| R | Reset |

### Color Modes

1. **Rainbow** – Full spectrum cycling
2. **Ocean** – Calm blue/teal tones
3. **Fire** – Warm red/orange tones
4. **Galaxy** – Deep purple/pink tones
5. **Pastel** – Soft gentle colors
6. **Neon** – Bright cyberpunk colors
7. **Sunset** – Warm sunset colors
8. **Monochrome** – Grayscale elegant

### Speed Options

- **Slow** – 0.005 (gentle rotation)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick rotation)
- **Very Fast** – 0.07 (rapid spinning)

### Thickness Options

- **Thin** – 1.5px (delicate)
- **Medium** – 3px (balanced)
- **Thick** – 5px (bold)
- **Very Thick** – 8px (dramatic)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Spiral generation | Trigonometric with increasing radius |
| Color gradient | Linear gradient with color functions |
| Rotation | Continuous angle increment |
| Wave distortion | Sine wave on radius |
| Glow effects | Canvas shadow blur |
| Multi-layer | 3 layers with different opacities |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
const colorModes = [
    { 
        name: 'MyMode', 
        fn: (t) => `hsl(${value}, ${sat}%, ${light}%)` 
    },
];