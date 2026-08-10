# Lava Lamp Flow

Colored blobs rising and merging in a classic lava lamp style with realistic physics, organic shapes, and multiple color palettes.

## Features

- **Organic Blob Physics** – Blobs rise, fall, and merge realistically
- **8 Color Palettes** – Classic, Ocean, Rainbow, Fire, Galaxy, Neon, Pastel, Sunset
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Blob Merging** – Blobs merge when they touch
- **Add Blobs** – Click to add more blobs
- **Lava Lamp Body** – Classic lamp shape with glass effect
- **Organic Shapes** – Wobbly, irregular blob shapes
- **Glow Effects** – Blobs glow and pulse
- **Trail Effects** – Blobs leave subtle trails
- **Keyboard Shortcuts** – B (add), S (speed), C (color), R (reset), SPACE (add)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and clipping)
- Vanilla JavaScript (Particle physics, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/lava-lamp-flow.git

2. Navigate to the project folder:
   cd lava-lamp-flow

3. Open demo.html in your browser

## File Structure

lava-lamp-flow/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Add Blob" | Add a new blob to the lamp |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Classic" | Cycle through 8 color palettes |
| "Reset" | Reset to default |
| B | Add blob |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Add blob |

### Color Palettes

1. **Classic** – Orange/red (traditional lava lamp)
2. **Ocean** – Blue/teal tones
3. **Rainbow** – Full spectrum
4. **Fire** – Red/orange/yellow
5. **Galaxy** – Purple/pink tones
6. **Neon** – Bright neon colors
7. **Pastel** – Soft gentle colors
8. **Sunset** – Warm sunset tones

### Speed Options

- **Slow** – 0.005 (gentle flow)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick flow)
- **Very Fast** – 0.07 (rapid flow)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Blob physics | Velocity, gravity, and buoyancy |
| Merging | Distance-based merging with size absorption |
| Organic shapes | Wobbly circle with sinusoidal distortion |
| Lamp body | Rounded rectangle with clipping |
| Color palettes | HSL-based color arrays |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    bg: '#background'
}