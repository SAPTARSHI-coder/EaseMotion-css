# Ripple Matrix

A grid of circles that ripple outward when hovered, creating a mesmerizing water-like ripple effect with dynamic colors and interactive controls.

## Features

- **Grid of Circles** – Configurable grid size (4x4 to 16x16)
- **Ripple Effect** – Circles ripple outward when hovered
- **8 Color Modes** – Rainbow, Ocean, Fire, Galaxy, Pastel, Neon, Sunset, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Hover Interaction** – Mouse hover creates ripples
- **Touch Support** – Works on mobile devices
- **Ripple Propagation** – Ripples spread to neighboring cells
- **Glow Effects** – Dynamic glow and shadow effects
- **Scale Animation** – Circles scale smoothly on hover
- **Color Transitions** – Dynamic color changes based on position and time
- **Keyboard Shortcuts** – G (grid), C (color), S (speed), R (reset), SPACE (clear)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Grid system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/ripple-matrix.git

2. Navigate to the project folder:
   cd ripple-matrix

3. Open demo.html in your browser

## File Structure

ripple-matrix/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Hover over circle | Creates ripple effect |
| "Size: 8x8" | Cycle through 4x4, 6x6, 8x8, 10x10, 12x12, 16x16 |
| "Color: Rainbow" | Cycle through 8 color modes |
| "Speed: Normal" | Cycle through 4 speeds |
| "Reset" | Reset to default |
| G | Cycle grid sizes |
| C | Cycle colors |
| S | Cycle speeds |
| R | Reset |
| SPACE | Clear all ripples |

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

- **Slow** – 0.008 (gentle ripples)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick ripples)
- **Very Fast** – 0.07 (rapid ripples)

### Grid Sizes

- **4x4** – Sparse, large circles
- **6x6** – Balanced
- **8x8** – Dense (default)
- **10x10** – Highly dense
- **12x12** – Very dense
- **16x16** – Maximum density

## How It Works

| Feature | Implementation |
|---------|---------------|
| Grid system | 2D array of cell objects |
| Ripple effect | Scale animation with sine wave |
| Color modes | HSL color functions per cell |
| Hover detection | Distance calculation from mouse |
| Ripple propagation | Spread to neighboring cells |
| Animation | RequestAnimationFrame loop |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
const colorModes = [
    { 
        name: 'MyMode', 
        fn: (i, j, gridSize, time) => {
            return `hsl(${value}, ${sat}%, ${light}%)`;
        }
    },
];