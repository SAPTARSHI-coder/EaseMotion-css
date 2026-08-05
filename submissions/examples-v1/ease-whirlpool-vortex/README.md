# Whirlpool Vortex

Spinning water vortex pulling particles down, featuring 200+ particles, vortex rings, ripples, and 6 color palettes.

## Features

- **Vortex Effect** – Spinning water vortex that pulls particles inward
- **200+ Particles** – Dynamic particles with orbit and pull physics
- **6 Color Palettes** – Ocean, Galaxy, Fire, Emerald, Sunset, Neon
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Particle Physics** – Orbit, wobble, vertical pull
- **Vortex Rings** – Animated concentric rings
- **Ripples** – Expanding ripple effects
- **Trail Particles** – Particles pulled into vortex
- **Keyboard Shortcuts** – S (spin), C (color), R (reset), SPACE (spin)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Physics simulation)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/whirlpool-vortex.git

2. Navigate to the project folder:
   cd whirlpool-vortex

3. Open demo.html in your browser

## File Structure

whirlpool-vortex/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Spin vortex |
| "Spin" | Activate vortex spin |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Ocean" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| S | Spin vortex |
| C | Cycle colors |
| R | Reset |
| SPACE | Spin vortex |

### Color Palettes

1. **Ocean** – Blue ocean tones
2. **Galaxy** – Cosmic purple tones
3. **Fire** – Red/orange tones
4. **Emerald** – Green emerald tones
5. **Sunset** – Warm sunset tones
6. **Neon** – Bright neon colors

### Speed Options

- **Slow** – 0.005 (gentle spin)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick spin)
- **Very Fast** – 0.07 (rapid spin)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Vortex spin | Angular velocity with inward pull |
| Particle orbit | Circular motion with wobble |
| Pull physics | Distance-based inward force |
| Color palettes | Gradient-based particle coloring |
| Ripples | Expanding ring animations |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    glow: '#glowColor'
}