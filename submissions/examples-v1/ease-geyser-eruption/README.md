# Geyser Eruption

Hot water bursting from ground with steam, featuring particle systems for water, steam, and splash effects with multiple color palettes.

## Features

- **Eruption Animation** – Hot water bursts from ground with steam
- **3 Particle Systems** – Water droplets, steam wisps, and splash particles
- **6 Color Palettes** – Natural, Sunset, Blue Lagoon, Fire, Galaxy, Emerald
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Particle Physics** – Gravity, velocity, damping, life cycles
- **Glow Effects** – Radiant glow on water particles
- **Steam Wisps** – Organic steam with wisp effects
- **Ground Detail** – Vent opening with water pool
- **Keyboard Shortcuts** – E (erupt), S (speed), C (color), R (reset), SPACE (erupt)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle systems, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/geyser-eruption.git

2. Navigate to the project folder:
   cd geyser-eruption

3. Open demo.html in your browser

## File Structure

geyser-eruption/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Trigger eruption |
| "Erupt" | Trigger geyser eruption |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Natural" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| E | Trigger eruption |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Trigger eruption |

### Color Palettes

1. **Natural** – Natural blue water tones
2. **Sunset** – Warm sunset tones
3. **Blue Lagoon** – Vibrant blue tones
4. **Fire** – Red/orange tones
5. **Galaxy** – Cosmic purple tones
6. **Emerald** – Green emerald tones

### Speed Options

- **Slow** – 0.005 (gentle eruption)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick eruption)
- **Very Fast** – 0.07 (rapid eruption)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Water particles | Physics-based with gravity and trails |
| Steam particles | Rising wisps with opacity fade |
| Splash particles | Burst particles from vent |
| Color palettes | Gradient-based coloring |
| Eruption power | Sine wave intensity during eruption |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    water: ['#color1', '#color2', '#color3', '#color4'],
    steam: ['#color1', '#color2', '#color3'],
    ground: '#groundColor',
    splash: '#splashColor'
}