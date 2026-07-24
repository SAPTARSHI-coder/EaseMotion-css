# Crystal Ball Glow

Floating orb with swirling mist inside, featuring mystical glow effects, 6 color palettes, particle systems, and interactive controls.

## Features

- **Swirling Mist** – Organic mist particles inside the orb
- **Glow Effect** – Pulsing glow with particles and sparkles
- **6 Color Palettes** – Rainbow, Mystic, Fire, Ice, Gold, Nature
- **Particle Systems** – Mist, glow, and sparkle particles
- **Glow Particles** – Floating particles when glowing
- **Sparkles** – Twinkling star sparkles
- **Interactive Controls** – Toggle glow, change colors
- **Keyboard Shortcuts** – G (glow), C (color), R (reset), SPACE (glow)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle systems, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/crystal-ball-glow.git

2. Navigate to the project folder:
   cd crystal-ball-glow

3. Open demo.html in your browser

## File Structure

crystal-ball-glow/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click crystal | Toggle glow |
| "Glow" | Toggle glow effect |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| G | Toggle glow |
| C | Cycle colors |
| R | Reset |
| SPACE | Toggle glow |

### Color Palettes

1. **Rainbow** – Colorful mist and glow
2. **Mystic** – Purple cosmic theme
3. **Fire** – Warm orange/red theme
4. **Ice** – Cool blue/cyan theme
5. **Gold** – Golden theme
6. **Nature** – Green theme

## How It Works

| Feature | Implementation |
|---------|---------------|
| Swirling mist | Particle system with orbital motion |
| Glow effect | Radial gradients with pulsing |
| Color palettes | HSL functions with position/time |
| Particles | Mist, glow, and sparkle types |
| Glass reflection | Highlight ellipses |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    glow: '#glowColor',
    mist: (t) => `hsla(${value}, ${sat}%, ${light}%, ${alpha})`
}