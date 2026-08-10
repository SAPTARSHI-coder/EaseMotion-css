# Bouncing Bubble Grid

A grid of bubbles that bounce when moused over, creating a playful, interactive experience with color customization and physics effects.

## Features

- **Grid of Bubbles** – Configurable grid size (4x4 to 16x16)
- **Bounce Physics** – Bubbles bounce with realistic physics
- **Chain Reaction** – Nearby bubbles bounce too
- **7 Color Modes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Pulse Animation** – Bubbles pulse gently
- **Trail Effects** – Smooth trailing motion
- **Glow Effects** – Dynamic glow on bounce
- **Connection Lines** – Subtle lines between bubbles
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – G (grid), S (speed), C (color), R (reset), SPACE (random bounce)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/bouncing-bubble-grid.git

2. Navigate to the project folder:
   cd bouncing-bubble-grid

3. Open demo.html in your browser

## File Structure

bouncing-bubble-grid/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Hover over bubble | Bubble bounces with chain reaction |
| "Size: 8x8" | Cycle through 4x4 to 16x16 |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 7 color modes |
| "Reset" | Reset to default |
| G | Cycle grid sizes |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Random bounce |

### Grid Sizes

- **4x4** – Sparse, large bubbles
- **6x6** – Balanced
- **8x8** – Dense (default)
- **10x10** – Highly dense
- **12x12** – Very dense
- **16x16** – Maximum density

### Color Modes

1. **Rainbow** – Full spectrum
2. **Ocean** – Calm blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Deep purple/pink tones
5. **Neon** – Bright cyberpunk colors
6. **Pastel** – Soft gentle colors
7. **Monochrome** – Grayscale elegant

### Speed Options

- **Slow** – 0.008 (gentle motion)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick motion)
- **Very Fast** – 0.07 (rapid motion)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Bounce physics | Elastic bounce with easing |
| Chain reaction | Distance-based propagation |
| Pulse animation | Sine wave on size |
| Color modes | HSL functions with position/time |
| Grid layout | Dynamic spacing calculation |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
{
    name: 'MyMode',
    fn: (i, j, gridSize, time) => {
        return `hsl(${value}, ${sat}%, ${light}%)`;
    }
}