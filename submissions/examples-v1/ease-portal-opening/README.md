# Portal Opening

Rippling portal that opens with light burst, featuring animated ripples, particle effects, sparkles, and 6 color palettes.

## Features

- **Portal Animation** – Smooth opening with rippling rings
- **Light Burst** – Bright flash when portal opens
- **6 Color Palettes** – Rainbow, Mystic, Fire, Ice, Cosmic, Gold
- **Particle Effects** – Sparkles and particles during opening
- **Ripple Rings** – Animated concentric ripples
- **Swirling Particles** – Particles inside the portal
- **Interactive Controls** – Open/Close, color change
- **Keyboard Shortcuts** – O (open/close), C (color), R (reset), SPACE (open/close)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Particle systems)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/portal-opening.git

2. Navigate to the project folder:
   cd portal-opening

3. Open demo.html in your browser

## File Structure

portal-opening/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click portal | Open/Close |
| "Open" | Open portal |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| O | Open/Close |
| C | Cycle colors |
| R | Reset |
| SPACE | Open/Close |

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Mystic** – Purple cosmic theme
3. **Fire** – Warm orange/red theme
4. **Ice** – Cool blue/cyan theme
5. **Cosmic** – Deep space purple
6. **Gold** – Golden theme

## How It Works

| Feature | Implementation |
|---------|---------------|
| Portal opening | Progressive animation with ripples |
| Light burst | Radial gradient flash |
| Ripples | Animated ring waves |
| Particles | Sparkle and particle systems |
| Color palettes | RGB arrays for portal colors |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    glow: '#glowColor',
    inner: '#innerColor'
}