# Warp Speed Tunnel

Zooming through star tunnel like warp drive with particle stars, speed control, and color customization.

## Features

- **Warp Speed Effect** – Zooming through a tunnel of stars
- **300+ Star Particles** – Dynamic stars with perspective projection
- **6 Color Modes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Star Trails** – Motion blur effect on stars
- **Tunnel Rings** – Hyperspace tunnel visualization
- **Speed Lines** – Dynamic speed lines
- **Star Shapes** – Mix of star and circle particles
- **Keyboard Shortcuts** – S (speed), C (color), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with perspective projection)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/warp-speed-tunnel.git

2. Navigate to the project folder:
   cd warp-speed-tunnel

3. Open demo.html in your browser

## File Structure

warp-speed-tunnel/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 6 color modes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |

### Color Modes

1. **Rainbow** – Full spectrum
2. **Ocean** – Blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Deep purple/pink tones
5. **Neon** – Bright neon colors
6. **Monochrome** – Grayscale elegant

### Speed Options

- **Slow** – 0.008 (gentle warp)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick warp)
- **Very Fast** – 0.07 (rapid warp)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Star particles | 300+ stars with perspective projection |
| Warp effect | Stars move toward viewer and reset |
| Trail effect | Position history with alpha |
| Tunnel rings | Animated ring visualization |
| Speed lines | Dynamic line generation |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
{
    name: 'MyMode',
    fn: (t) => `hsl(${value}, ${sat}%, ${light}%)`
}