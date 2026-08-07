# Campfire Embers

Fire with rising ember particles, featuring realistic flame physics, ember particles, sparks, smoke, and interactive stoking.

## Features

- **Realistic Fire** – Dynamic flames with particle physics
- **Rising Embers** – Glowing ember particles with trails
- **Sparks** – Spark particles with physics
- **Smoke** – Rising smoke wisps
- **Logs** – Detailed logs with burn animation
- **6 Color Palettes** – Warm, Blue, Purple, Green, Pink, Gold
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Stoke Interaction** – Stoke the fire for more embers
- **Ambient Glow** – Warm glow effects
- **Keyboard Shortcuts** – S (stoke), P (speed), C (color), R (reset), SPACE (stoke)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle systems, Physics simulation)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/campfire-embers.git

2. Navigate to the project folder:
   cd campfire-embers

3. Open demo.html in your browser

## File Structure

campfire-embers/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click fire | Stoke the fire |
| "Stoke" | Stoke the fire |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Warm" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| S | Stoke |
| P | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Stoke |

### Color Palettes

1. **Warm** – Warm orange/red tones
2. **Blue** – Cool blue tones
3. **Purple** – Mystical purple tones
4. **Green** – Natural green tones
5. **Pink** – Soft pink tones
6. **Gold** – Golden tones

### Speed Options

- **Slow** – 0.005 (gentle fire)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick fire)
- **Very Fast** – 0.07 (rapid fire)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Fire particles | Particle system with gravity |
| Embers | Rising particles with trails |
| Sparks | Short-lived bright particles |
| Smoke | Rising wisps with opacity |
| Logs | Detailed with burn animation |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    fire: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    ember: ['#color1', '#color2', '#color3'],
    glow: '#glowColor',
    smoke: 'rgba(r,g,b,'
}