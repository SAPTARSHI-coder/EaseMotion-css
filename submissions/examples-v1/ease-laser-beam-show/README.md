# Laser Beam Show

Moving laser beams with reflections, featuring dynamic beam animation, reflections off walls, 6 color palettes, and particle effects.

## Features

- **Moving Laser Beams** – Beams rotate and wobble with organic motion
- **Ray Reflections** – Beams reflect off canvas walls
- **6 Color Palettes** – Rainbow, Neon, Sunset, Ocean, Galaxy, Disco
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Particle Effects** – Glowing particles along beams
- **Add Beams** – Click to add more beams
- **Beam Glow** – Dynamic glow and pulse effects
- **Reflection Points** – Visible glow at reflection points
- **Keyboard Shortcuts** – B (add), S (speed), C (color), R (reset), SPACE (add)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Ray casting, Particle system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/laser-beam-show.git

2. Navigate to the project folder:
   cd laser-beam-show

3. Open demo.html in your browser

## File Structure

laser-beam-show/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Add beam at cursor |
| "Add Beam" | Add random beam |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| B | Add beam |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Add beam |

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Neon** – Bright neon colors
3. **Sunset** – Warm sunset tones
4. **Ocean** – Blue ocean tones
5. **Galaxy** – Cosmic purple tones
6. **Disco** – Classic disco colors

### Speed Options

- **Slow** – 0.005 (gentle movement)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick movement)
- **Very Fast** – 0.07 (rapid movement)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Laser beams | Ray casting with reflection |
| Beam movement | Rotation with wobble |
| Reflections | Wall intersection with normal reflection |
| Color palettes | HSL-based color cycling |
| Particles | Glowing particle system |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5', '#color6'],
    glow: '#glowColor'
}